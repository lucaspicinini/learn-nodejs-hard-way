const fs = require("node:fs/promises");
const path = require("node:path");

const { LogConfig } = require("./config/log-config");
const { LogLevel } = require("./utils/log-level");
const { RollingTimeOptions } = require("./utils/rolling-options");
const { check_and_create_dir, get_caller_info } = require("./utils/helpers");

class Logger {
    /**
     * @type {LogConfig}
     */
    #config;

    /**
     * @type {fs.FileHandle}
     */
    #log_file_handle;

    /**
     * @param {LogLevel} log_level
     */
    constructor(log_config) {
        log_config = log_config || LogConfig.with_defaults();
        LogConfig.assert(log_config);
        this.#config = log_config;
    }

    /**
     * Inicializa o logger criando um arquivo de log, e o diretório se não existir.
     */
    async init() {
        const log_dir_path = check_and_create_dir("logs");

        const file_name = this.#config.file_prefix + new Date().toISOString().replace(/[\.:]+/g, "-") + ".log";
        this.#log_file_handle = await fs.open(path.join(log_dir_path, file_name), "a+");
    }

    /**
     * @returns {Logger} Uma nova instância de Logger com os valores padrão.
     */
    static with_defaults() {
        return new Logger();
    }

    /**
     *
     * @param {LogConfig} log_config
     * @returns {Logger} Uma nova instância de Logger com a configuração fornecida.
     */
    static with_config(log_config) {
        return new Logger(log_config);
    }

    /**
     * Escreve a mensagem fornecida no arquivo de log.
     * @private
     * @param {string} message
     * @param {number} log_level
     */
    async #log(message, log_level) {
        if (log_level < this.#config.level || !this.#log_file_handle.fd) {
            return;
        }

        await this.#write_to_handle(message, log_level);
        await this.#rolling_check();
    }

    /**
     * Checa se o atual arquivo de log precisa ser rotacionado.
     */
    async #rolling_check() {
        const { size_threshold, time_threshold } = this.#config.rolling_config;

        const { size, birthtimeMs } = await this.#log_file_handle.stat();
        const current_time = new Date().getTime();

        if (size >= size_threshold || current_time - birthtimeMs >= time_threshold * 1000) {
            await this.#log_file_handle.close();
            await this.init();
        }
    }

    /**
     * Escreve a mensagem fornecida no arquivo de log.
     * @private
     * @param {string} message
     * @param {LogLevel} log_level
     * @returns {Promise<void>}
     */
    async #write_to_handle(message, log_level) {
        const date_iso = new Date().toISOString();
        const log_level_string = LogLevel.to_string(log_level);

        const log_message = `[${date_iso}] [${log_level_string}]: ${get_caller_info()} ${message}\n`;
        await this.#log_file_handle.write(log_message);
    }

    /**
     * @param {string} message
     */
    debug(message) {
        this.#log(message, LogLevel.Debug);
    }

    /**
     * @param {string} message
     */
    info(message) {
        this.#log(message, LogLevel.Info);
    }

    /**
     * @param {string} message
     */
    warn(message) {
        this.#log(message, LogLevel.Warn);
    }

    /**
     * @param {string} message
     */
    error(message) {
        this.#log(message, LogLevel.Error);
    }

    /**
     * @param {string} message
     */
    critical(message) {
        this.#log(message, LogLevel.Critical);
    }

    /** Getters */

    /**
     * @returns {LogLevel} O log level atual.
     */
    get level() {
        return this.#config.level;
    }

    /**
     * @returns {string} O prefixo do arquivo de log.
     */
    get file_prefix() {
        return this.#config.file_prefix;
    }

    /**
     * @returns {RollingTimeOptions}
     */
    get time_threshold() {
        return this.#config.rolling_config.time_threshold;
    }

    /**
     * @returns {RollingSizeOptions}
     */
    get size_threshold() {
        return this.#config.rolling_config.size_threshold;
    }
}

module.exports = { Logger };
