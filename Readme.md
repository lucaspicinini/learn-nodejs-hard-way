# Aprenda Node.js construindo um framework backend - [Velocy](https://github.com/ishtms/velocy)

<p align="center">
  <img src="./assets/imgs/cover.jpg" alt="Learn nodejs the hard way" width="500">
</p>

Você pode acessar a versão atual do livro nos [diretórios dos capítulos](/chapters) ou no formato PDF (modo claro e escuro disponíveis - versão em Inglês) [clicando aqui](https://github.com/ishtms/learn-nodejs-hard-way/releases). Vale ressaltar que esta edição inclui a versão atual do conteúdo, não a sua versão final.

> Este livro ainda está em um estágio bem inicial. Ele contém uma parte insignificante de todo o conteúdo que o livro deveria cobrir. Haverá um total de 0 dependências para o nosso [framework backend](https://github.com/ishtms/velocy), assim como para a nossa [biblioteca de logs](https://github.com/ishtms/logtar). Tudo será feito usando Node.js puro, no modo "vannilla", do jeito difícil (o melhor jeito para aprender).

---

## Nota

Se você não está familiarizado com Javascript, também é possível conferir meu outro repositório - [Learn Javascript - The Easy Way](https://github.com/ishtms/learn-javascript-easy-way) ele leva você a uma jornada profunda e divertida em Javascript - desde o básico até os conceitos avançados que você precisa, sem mergulhar em muita teoria. Apenas exemplos práticos de código.

---

Para dominar um novo conceito, muitas vezes é melhor começar do zero. Este não é apenas mais um guia qualquer de Node.js; é uma experiência abrangente de código, visando construir um produto do mundo real que pode ser usado por milhares de desenvolvedores. O produto que vamos construir será um framework backend, também do zero.

Você não aprenderá apenas como o Node.js funciona, mas porque ele funciona de uma maneira específica. O guia também contém discussões sobre estruturas de dados e design patterns relevantes.

Outra coisa incluída no livro, é uma ampla gama de exercícios criados especificamente para desafiá-lo, podendo exigir comprometimento e esforço consistente de sua parte. Os primeiros exercícios começam no capítulo 7.

Este guia vai além do básico. Estamos focados em fornecer uma estrutura de back-end modularizada e otimizada que esteja perto de estar pronta para produção. Tópicos como otimização de desempenho, medidas de segurança e diversos tipos de teste serão abordados para garantir que a estrutura seja confiável e escalável.

Eu recomendo fortemente codar ativamente junto com este guia, em vez de apenas lê-lo, para uma compreensão completa do Node.js e seus aspectos mais complexos.

Repositório para nosso framework backend - [Velocy](https://github.com/ishtms/velocy). (W.I.P)

[![Read Next](/assets/imgs/next.png)](/chapters/ch01-what-is-a-web-server-anyway.md)

# Índice

- [(opcional) Node.js é muito mais rápido do que você pensa](/chapters/ch00-nodejs-faster-than-you-think.md)
  - [Candidatos ao Teste](/chapters/ch00-nodejs-faster-than-you-think.md#contenders-for-the-test)
    - [Elysia - Bun](/chapters/ch00-nodejs-faster-than-you-think.md#elysia---bun)
    - [Axum - Rust](/chapters/ch00-nodejs-faster-than-you-think.md#axum---rust)
    - [Express - Node.js](/chapters/ch00-nodejs-faster-than-you-think.md#express---nodejs)
    - [Velocy - Node.js](/chapters/ch00-nodejs-faster-than-you-think.md#velocy---nodejs)
  - [O Benchmark](/chapters/ch00-nodejs-faster-than-you-think.md#the-benchmark)
- [Afinal, o que diabos é um Servidor Web?](/chapters/ch01-what-is-a-web-server-anyway.md)
  - [Partes de um Servidor Web](/chapters/ch01-what-is-a-web-server-anyway.md#parts-of-a-web-server)
  - [Navegando pelo Mundo dos Protocolos: Um rápido panorama](/chapters/ch01-what-is-a-web-server-anyway.md#navigating-the-world-of-protocols-a-quick-overview)
  - [A Relação entre HTTP e TCP](/chapters/ch01-what-is-a-web-server-anyway.md#the-relationship-between-http-and-tcp-ensuring-reliable-web-communication)
    - [Integridade e Ordenamento de dados](/chapters/ch01-what-is-a-web-server-anyway.md#1-data-integrity-and-order)
    - [Mecanismo de Confirmação](/chapters/ch01-what-is-a-web-server-anyway.md#2-acknowledgment-mechanism)
    - [Interações Complexas](/chapters/ch01-what-is-a-web-server-anyway.md#3-complex-interactions)
    - [Sobrecarga de Transmissão](/chapters/ch01-what-is-a-web-server-anyway.md#4-transmission-overhead)
  - [Como Servidores Web respondem às suas requisições](/chapters/ch01-what-is-a-web-server-anyway.md#asking-and-getting-how-web-servers-respond-to-your-requests)
    - [A Requisição](/chapters/ch01-what-is-a-web-server-anyway.md#the-request)
      - [Sua Requisição](/chapters/ch01-what-is-a-web-server-anyway.md#1-your-request)
      - [Encontrando o endereço](/chapters/ch01-what-is-a-web-server-anyway.md#2-finding-the-address)
      - [Resolvendo o endereço](/chapters/ch01-what-is-a-web-server-anyway.md#3-resolving-the-address)
    - [A Resposta](/chapters/ch01-what-is-a-web-server-anyway.md#the-response)
      - [Endereço de retorno](/chapters/ch01-what-is-a-web-server-anyway.md#1-return-address)
      - [Enviando a requisição](/chapters/ch01-what-is-a-web-server-anyway.md#2-sending-the-request)
      - [Preparando o conteúdo](/chapters/ch01-what-is-a-web-server-anyway.md#3-preparing-the-content)
      - [Enviando a resposta](/chapters/ch01-what-is-a-web-server-anyway.md#4-sending-the-response)
      - [Aproveitando o conteúdo](/chapters/ch01-what-is-a-web-server-anyway.md#5-enjoying-the-content)
- [Seu primeiro servidor web com node.js](/chapters/ch02-your-first-nodejs-server.md)
  - [O que é exatamente node ou node.js?](/chapters/ch02-your-first-nodejs-server.md#what-exactly-is-node-or-nodejs)
  - [Seu primeiro programa em node.js](/chapters/ch02-your-first-nodejs-server.md#your-first-nodejs-program)
  - [Como o console.log() funciona no Node.js?](/chapters/ch02-your-first-nodejs-server.md#how-does-consolelog-work-in-nodejs)
  - [O objeto process](/chapters/ch02-your-first-nodejs-server.md#the-process-object)
  - [A propriedade stdout do objeto process](/chapters/ch02-your-first-nodejs-server.md#the-stdout-property-of-the-process-object)
- [Trabalhando com arquivos](/chapters/ch03-working-with-files.md)
  - [O que a biblioteca de logs vai fazer?](/chapters/ch03-working-with-files.md#what-will-the-logging-library-do)
  - [Afinal, como você trabalha com arquivos?](/chapters/ch03-working-with-files.md#how-do-you-work-with-files-anyway)
  - [Vamos voltar aos arquivos](/chapters/ch03-working-with-files.md#lets-get-back-to-files)
  - [Um pouco mais sobre descritores de arquivos](/chapters/ch03-working-with-files.md#a-little-more-about-file-descriptors)
  - [Criando nosso primeiro arquivo](/chapters/ch03-working-with-files.md#creating-our-first-file)
    - [O argumento `path`](/chapters/ch03-working-with-files.md#path-argument)
    - [O argumento `flag`](/chapters/ch03-working-with-files.md#flag-argument)
    - [O argumento `mode`](/chapters/ch03-working-with-files.md#mode-argument)
  - [Lendo de um arquivo](/chapters/ch03-working-with-files.md#reading-from-a-file)
  - [Uma pequena cartilha para o `for..of` e o `for await..of` no javascript](/chapters/ch03-working-with-files.md#a-small-primer-to-forof-and-for-awaitof-in-javascript)
    - [`for..of`](/chapters/ch03-working-with-files.md#forof)
    - [`for await..of`](/chapters/ch03-working-with-files.md#for-awaitof)
  - [Lendo o arquivo json](/chapters/ch03-working-with-files.md#reading-the-json-file)
  - [Buffers](/chapters/ch03-working-with-files.md#buffers)
  - [Analisando o arquivo json](/chapters/ch03-working-with-files.md#parsing-the-json-file)
- [`logtar` - Nossa própria biblioteca de logs](/chapters/ch04-logtar-our-logging-library.md)
  - [Iniciando um novo projeto](/chapters/ch04-logtar-our-logging-library.md#initialising-a-new-project)
  - [Um pouco sobre o `SemVer`](/chapters/ch04-logtar-our-logging-library.md#a-little-about-semver)
  - [Criando uma classe LogLevel](/chapters/ch04-logtar-our-logging-library.md#creating-a-loglevel-class)
  - [A classe Logger](/chapters/ch04-logtar-our-logging-library.md#the-logger-class)
  - [Encapsulamento com campos privados](/chapters/ch04-logtar-our-logging-library.md#encapsulation-with-private-fields)
  - [A classe `LogConfig`](/chapters/ch04-logtar-our-logging-library.md#the-logconfig-class)
  - [Design Patterns](/chapters/ch04-logtar-our-logging-library.md#design-patterns)
    - [O pattern `Builder`](/chapters/ch04-logtar-our-logging-library.md#the-builder-pattern)
    - [Usando o pattern `Builder` com a classe `LogConfig`](/chapters/ch04-logtar-our-logging-library.md#using-builder-pattern-with-the-logconfig-class)
  - [Comentários em `jsdoc`](/chapters/ch04-logtar-our-logging-library.md#jsdoc-comments)
  - [A classe `RollingConfig`](/chapters/ch04-logtar-our-logging-library.md#the-rollingconfig-class)
    - [A classe `RollingSizeOptions`](/chapters/ch04-logtar-our-logging-library.md#the-rollingsizeoptions-class)
    - [A classe `RollingTimeOptions`](/chapters/ch04-logtar-our-logging-library.md#the-rollingtimeoptions-class)
  - [Finalizando a classe `RollingConfig`](/chapters/ch04-logtar-our-logging-library.md#finishing-up-the-rollingconfig-class)
  - [Vamos recapitular](/chapters/ch04-logtar-our-logging-library.md#lets-recap)
  - [Adicionando mais métodos úteis na classe `LogConfig`](/chapters/ch04-logtar-our-logging-library.md#adding-more-useful-methods-in-the-logconfig-class)
  - [Porque o `readFileSync`?](/chapters/ch04-logtar-our-logging-library.md#why-readfilesync)
- [Refatorando o código](/chapters/ch04.1-refactoring-the-code.md)
  - [A necessidade de refatorar](/chapters/ch04.1-refactoring-the-code.md#the-need-for-refactoring)
  - [Criando arquivos separados](/chapters/ch04.1-refactoring-the-code.md#creating-separate-files)
    - [Explicação](/chapters/ch04.1-refactoring-the-code.md#explanation)
    - [O arquivo `index.js`](/chapters/ch04.1-refactoring-the-code.md#the-indexjs-file)
    - [O arquivo `lib/logtar.js`](/chapters/ch04.1-refactoring-the-code.md#the-liblogtarjs-file)
    - [O arquivo `lib/logger.js`](/chapters/ch04.1-refactoring-the-code.md#the-libloggerjs-file)
    - [O arquivo `lib/config/log-config.js`](/chapters/ch04.1-refactoring-the-code.md#the-libconfiglog-configjs-file)
    - [O arquivo `lib/config/rolling-config.js`](/chapters/ch04.1-refactoring-the-code.md#the-libconfigrolling-configjs-file)
    - [O arquivo `lib/utils/log-level.js`](/chapters/ch04.1-refactoring-the-code.md#the-libutilslog-leveljs-file)
    - [A classe `lib/utils/rolling-options.js`](/chapters/ch04.1-refactoring-the-code.md#the-libutilsrolling-optionsjs-class)
- [Escrevendo Logs](/chapters/ch04.2-writing-logs.md)
  - [Reutilizando o File Handle](/chapters/ch04.2-writing-logs.md#re-using-the-file-handle)
  - [Rotação de Logs](/chapters/ch04.2-writing-logs.md#2-log-rotation)
  - [Logging Assíncrono](/chapters/ch04.2-writing-logs.md#3-asynchronous-logging)
  - [Obtendo Informações da Chamada](/chapters/ch04.2-writing-logs.md#4-getting-caller-information-module-and-line-number)
  - [Testando a Nossa API Atual](/chapters/ch04.2-writing-logs.md#testing-our-current-api)
  - [Implementando Métodos de Logging](/chapters/ch04.2-writing-logs.md#implementing-logging-methods)
    - [DRY (Don't Repeat Yourself) - Não Se Repita](/chapters/ch04.2-writing-logs.md#dry-dont-repeat-yourself)
    - [O Método `log`](/chapters/ch04.2-writing-logs.md#the-log-method)
    - [Considerando a Variável Membro `log_level`](/chapters/ch04.2-writing-logs.md#considering-the-log_level-member-variable)
  - [Gravando em um Arquivo](/chapters/ch04.2-writing-logs.md#writing-to-a-file)
    - [Uma Pequena Cartilha Sobre Expressões Regulares](/chapters/ch04.2-writing-logs.md#a-small-primer-on-regular-expressions)
    - [Testando a Criação do Arquivo de Log](/chapters/ch04.2-writing-logs.md#testing-the-log-file-creation)
    - [Outra Pegadinha](/chapters/ch04.2-writing-logs.md#another-gotcha)
    - [Configuração do Diretório de Logs](/chapters/ch04.2-writing-logs.md#logs-directory-configuration)
    - [Nosso Primeiro Script](/chapters/ch04.2-writing-logs.md#our-first-script)
  - [O Objeto `require`](/chapters/ch04.2-writing-logs.md#the-require-object)
  - [Adicionando um Novo Auxiliar Para Criar o Diretório de Logs](/chapters/ch04.2-writing-logs.md#adding-a-new-helper-to-create-log-directory)
  - [Atualizando o Método `init`](/chapters/ch04.2-writing-logs.md#updating-the-init-method)
  - [Completando o Método `log`](/chapters/ch04.2-writing-logs.md#completing-the-log-method)
- [Capturando metadados](/chapters/ch04.3-capturing-metadata.md)
  - [O que é uma Pilha?](/chapters/ch04.3-capturing-metadata.md#what-is-a-stack)
  - [Exemplos de Pilhas](/chapters/ch04.3-capturing-metadata.md#examples-of-stacks)
  - [A Pilha de Chamadas](/chapters/ch04.3-capturing-metadata.md#the-call-stack)
  - [Obtendo Informações da Pilha](/chapters/ch04.3-capturing-metadata.md#getting-the-stack-info)
  - [Obtendo o nome da `chamada` e o número da linha](/chapters/ch04.3-capturing-metadata.md#getting-the-callee-name-and-the-line-number)
  - [Uma forma mais ergonômica](/chapters/ch04.3-capturing-metadata.md#a-more-ergonomic-way)
  - [Usando a função `get_caller_info`](/chapters/ch04.3-capturing-metadata.md#using-the-get_caller_info-function)
- [Uma pequena introdução ao `async` vs `sync`](/chapters/ch04.4-intro-to-async-vs-sync.md)
  - [O Equilíbrio entre Opostos](/chapters/ch04.4-intro-to-async-vs-sync.md#the-balance-between-opposites)
  - [Misturando Código Assíncrono e Síncrono](/chapters/ch04.4-intro-to-async-vs-sync.md#mixing-asynchronous-and-synchronous-code)
  - [I/O mais rápido e pronto para uso](/chapters/ch04.4-intro-to-async-vs-sync.md#faster-io-out-of-the-box)
  - [Código Bloqueante](/chapters/ch04.4-intro-to-async-vs-sync.md#blocking-code)
  - [Concorrência](/chapters/ch04.4-intro-to-async-vs-sync.md#concurrency)
- [Adicionando Suporte à Rotação de Arquivos](/chapters/ch04.5-rolling-file-support.md)
  - [Recursos de Rotação](/chapters/ch04.5-rolling-file-support.md#rolling-features)
    - [`#time_threshold`](/chapters/ch04.5-rolling-file-support.md#timethreshold)
    - [`#size_threshold`](/chapters/ch04.5-rolling-file-support.md#sizethreshold)
  - [O Método `rolling_check()`](/chapters/ch04.5-rolling-file-support.md#the-rolling_check-method)
  - [`file_handle.stat()`](/chapters/ch04.5-rolling-file-support.md#file_handlestat)
  - [Chamando o método `rolling_check`](/chapters/ch04.5-rolling-file-support.md#calling-the-rolling_check-method)
  - [Uma Grande Pegadinha!](/chapters/ch04.5-rolling-file-support.md#a-big-gotcha)
  - [Rastreios de Pilha Através de Pontos `await`](/chapters/ch04.5-rolling-file-support.md#stack-traces-across-await-points)
    - [O Culpado](/chapters/ch04.5-rolling-file-support.md#the-culprit)
  - [Testando a Criação do Novo Arquivo de Log](/chapters/ch04.5-rolling-file-support.md#testing-the-new-log-file-creation)
- [Mergulho Profundo no HTTP](/chapters/ch05.0-http-deep-dive.md)
  - [Um Pequeno Servidor Web](/chapters/ch05.0-http-deep-dive.md#a-small-web-server)
    - [Iniciando Nosso Servidor Web](/chapters/ch05.0-http-deep-dive.md#starting-our-web-server)
    - [Testando Nosso Servidor Web](/chapters/ch05.0-http-deep-dive.md#testing-our-web-server)
    - [Testando com o `cURL`](/chapters/ch05.0-http-deep-dive.md#testing-with-curl)
- [Verbos HTTP, Versionamento e os benefícios do `HTTP/1.1`](/chapters/ch05.1-http-verbs-versioning-http1_1.md)
  - [`GET` - Recupere Dados](/chapters/ch05.1-http-verbs-versioning-http1_1.md#get---retrieve-data)
  - [`POST` - Crie Alguma Coisa](/chapters/ch05.1-http-verbs-versioning-http1_1.md#post---create-something)
  - [`PUT` - Substitua ou Crie](/chapters/ch05.1-http-verbs-versioning-http1_1.md#put---replace-or-create)
  - [`HEAD` - Recupere Metadados](/chapters/ch05.1-http-verbs-versioning-http1_1.md#head---retrieve-metadata)
  - [`DELETE` - Remova da Existência](/chapters/ch05.1-http-verbs-versioning-http1_1.md#delete---remove-from-existence)
  - [`PATCH` - Atualizações Parciais](/chapters/ch05.1-http-verbs-versioning-http1_1.md#patch---partial-updates)
  - [Um Pequeno Resumo](/chapters/ch05.1-http-verbs-versioning-http1_1.md#a-small-recap)
  - [O `/` Path](/chapters/ch05.1-http-verbs-versioning-http1_1.md#the--path)
  - [`HTTP/0.9`](/chapters/ch05.1-http-verbs-versioning-http1_1.md#http09)
  - [`HTTP/1.0`](/chapters/ch05.1-http-verbs-versioning-http1_1.md#http10)
    - [Introdução do Cabeçalho HTTP](/chapters/ch05.1-http-verbs-versioning-http1_1.md#introduction-to-the-http-header)
    - [Versionamento](/chapters/ch05.1-http-verbs-versioning-http1_1.md#versioning)
    - [Códigos de Status](/chapters/ch05.1-http-verbs-versioning-http1_1.md#status-codes)
    - [Cabeçalho Content-Type](/chapters/ch05.1-http-verbs-versioning-http1_1.md#content-type-header)
    - [Novos Métodos](/chapters/ch05.1-http-verbs-versioning-http1_1.md#new-methods)
  - [`HTTP/1.1`](/chapters/ch05.1-http-verbs-versioning-http1_1.md#http11)
    - [Conexões Persistentes](/chapters/ch05.1-http-verbs-versioning-http1_1.md#persistent-connections)
    - [Pipelining](/chapters/ch05.1-http-verbs-versioning-http1_1.md#pipelining)
    - [Codificação de Transferência Fragmentada](/chapters/ch05.1-http-verbs-versioning-http1_1.md#chunked-transfer-encoding)
    - [O Cabeçalho `Host`](/chapters/ch05.1-http-verbs-versioning-http1_1.md#the-host-header)
    - [Melhorias de Cache](/chapters/ch05.1-http-verbs-versioning-http1_1.md#caching-improvements)
    - [Range Requests](/chapters/ch05.1-http-verbs-versioning-http1_1.md#range-requests)
    - [Novos Métodos: `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`](/chapters/ch05.1-http-verbs-versioning-http1_1.md#new-methods-put-delete-connect-options-trace)
- [User agents](/chapters/ch05.2-user-agents.md)
  - [O `User-Agent` pode ser estranho](/chapters/ch05.2-user-agents.md#user-agent-can-be-weird)
- [MIME Type e `Content-Type`](/chapters/ch05.3-mime-type-and-content-type.md#mime-type-and--content-type-)
  - [Entendendo o Cabeçalho `Accept`](/chapters/ch05.3-mime-type-and-content-type.md#understanding-the--accept--header)
    - [Analisando a Linha](/chapters/ch05.3-mime-type-and-content-type.md#breaking-down-the-line)
    - [Por que o Coringa?](/chapters/ch05.3-mime-type-and-content-type.md#why-the-wildcard-)
    - [Resposta do Servidor](/chapters/ch05.3-mime-type-and-content-type.md#server-response)
  - [MIME Type](/chapters/ch05.3-mime-type-and-content-type.md#mime-type)
  - [Anatomia de um MIME type](/chapters/ch05.3-mime-type-and-content-type.md#anatomy-of-a-mime-type)
  - [Mas Por Que o Coringa `*/*`?](/chapters/ch05.3-mime-type-and-content-type.md#but-why-the-wildcard)
  - [O Cabeçalho `Content-Type`](/chapters/ch05.3-mime-type-and-content-type.md#the-content-type-header)
    - [`Content-Type` no Cabeçalho da Requisição](/chapters/ch05.3-mime-type-and-content-type.md#-content-type--on-request-header)
    - [`Content-Type` no Cabeçalho da Resposta](/chapters/ch05.3-mime-type-and-content-type.md#content-type-on-response-header)
  - [O `charset=UTF-8`: Codificação de Caracteres](/chapters/ch05.3-mime-type-and-content-type.md#the-charsetutf-8-character-encoding)
    - [Codificação Universal de Caracteres](/chapters/ch05.3-mime-type-and-content-type.md#universal-character-encoding)
- [Cabeçalhos](/chapters/ch05.4-headers.md#headers)
  - [Nome do Cabeçalho](/chapters/ch05.4-headers.md#header-name)
  - [Dois Pontos (`:`)](/chapters/ch05.4-headers.md#colon)
  - [Valor do Cabeçalho](/chapters/ch05.4-headers.md#header-value)
  - [Espaço em Branco](/chapters/ch05.4-headers.md#whitespace)
  - [Cabeçalhos Customizados Com Base no `X-`](/chapters/ch05.4-headers.md#custom-x--based-headers)
- [Cabeçalhos de Requisição](/chapters/ch05.4-headers.md#request-headers)
  - [Accept](/chapters/ch05.4-headers.md#accept)
  - [Referer](/chapters/ch05.4-headers.md#referer)
  - [Authorization](/chapters/ch05.4-headers.md#authorization)
  - [Cookie](/chapters/ch05.4-headers.md#cookie)
  - [Host](/chapters/ch05.4-headers.md#host)
  - [Content-Type](/chapters/ch05.4-headers.md#content-type)
- [Cabeçalhos de resposta](/chapters/ch05.4-headers.md#response-headers)
  - [Content-Type (resposta)](/chapters/ch05.4-headers.md#content-type-response)
  - [Cache-Control](/chapters/ch05.4-headers.md#cache-control)
    - [Como o Cache Funciona](/chapters/ch05.4-headers.md#how-caches-work)
    - [Diretivas de Cache-Control](/chapters/ch05.4-headers.md#cache-control-directives)
      - [Always Cache (atualizações infrequentes)](/chapters/ch05.4-headers.md#always-cache-infrequent-updates)
      - [Always Cache (apenas privado)](/chapters/ch05.4-headers.md#always-cache-private-only)
      - [Never Cache (dados em tempo real)](/chapters/ch05.4-headers.md#never-cache-realtime-data)
  - [Set-Cookie](/chapters/ch05.4-headers.md#set-cookie)
- [Resposta e Códigos de Status](/chapters/ch05.5-response-status-codes.md)
  - [`Connection: close` em ação](/chapters/ch05.5-response-status-codes.md#connection-close-in-action)
  - [Códigos de Status](/chapters/ch05.5-response-status-codes.md#status-codes)
- [`velocy` Nosso Framework Backend](/chapters/ch06.0-velocy-our-backend-framework.md)
  - [Por quê o Velocy?](/chapters/ch06.0-velocy-our-backend-framework.md#why-velocy)
  - [Afinal, o que é um framework/biblioteca backend?](/chapters/ch06.0-velocy-our-backend-framework.md#what-is-a-backend-frameworklibrary-anyway)
  - [Principais Funcionalidades do Nosso Framework Backend](/chapters/ch06.0-velocy-our-backend-framework.md#core-features-of-our-backend-framework)
    - [Roteamento e Gerenciamento de URL](/chapters/ch06.0-velocy-our-backend-framework.md#routing-and-url-handling)
    - [Middlewares](/chapters/ch06.0-velocy-our-backend-framework.md#middlewares)
    - [Construindo Nosso Próprio Banco de Dados](/chapters/ch06.0-velocy-our-backend-framework.md#building-our-own-database)
      - [Armazenamento e Recuperação de Dados](/chapters/ch06.0-velocy-our-backend-framework.md#data-storage-and-retrieval)
      - [Indexando](/chapters/ch06.0-velocy-our-backend-framework.md#indexing)
      - [Consultando](/chapters/ch06.0-velocy-our-backend-framework.md#querying)
    - [Caching](/chapters/ch06.0-velocy-our-backend-framework.md#caching)
    - [Rate limiting](/chapters/ch06.0-velocy-our-backend-framework.md#rate-limiting)
    - [Outros Recursos](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Estado Compartilhado](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Upload de Arquivos](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Envio de Arquivo Estático](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Dados em Multi-part](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Websockets](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Logging](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
      - [Monitoramento](/chapters/ch06.0-velocy-our-backend-framework.md#some-other-features-that-we-will-be-implementing)
- [Uma implementação básica do `Router`](/chapters/ch06.1-basic-router-implementation.md)
  - [Um Router de Brinquedo](/chapters/ch06.1-basic-router-implementation.md#a-toy-router)
  - [Chunks, ah não!](/chapters/ch06.1-basic-router-implementation.md#chunks-oh-no)
  - [Especificando o `Content-Length`](/chapters/ch06.1-basic-router-implementation.md#specifying-content-length)
  - [Reusabilidade de Código](/chapters/ch06.1-basic-router-implementation.md#code-reusability)
  - [Separando Preocupações](/chapters/ch06.1-basic-router-implementation.md#separation-of-concerns)
- [A Classe `Router`](/chapters/ch06.2-the-router-class.md)
  - [Usando o `Router` com um Servidor HTTP](/chapters/ch06.2-the-router-class.md#using-router-with-an-http-server)
  - [`this` não é bom](/chapters/ch06.2-the-router-class.md#this-is-not-good)
    - [Usando o `.bind()`](/chapters/ch06.2-the-router-class.md#using-bind)
    - [Usando `Arrow` function](/chapters/ch06.2-the-router-class.md#using-arrow-function)
  - [Contexto Léxico](/chapters/ch06.2-the-router-class.md#lexical-context)
  - [Arrow functions não são de graça](/chapters/ch06.2-the-router-class.md#arrow-functions-are-not-free)
  - [Por Que Devemos Nos Importar Com Memória?](/chapters/ch06.2-the-router-class.md#why-should-we-care-about-memory)
  - [Testando o Código Atualizado](/chapters/ch06.2-the-router-class.md#testing-the-updated-code)
- [Aprimorando a API `Router`](/chapters/ch06.3-improving-the-router-api.md)
- [A Necessidade de Uma `trie`](/chapters/ch06.4-the-need-for-a-trie.md)
  - [O que é uma `Trie` afinal?](/chapters/ch06.4-the-need-for-a-trie.md#what-is-a-trie-anyway)
- [Exercício 1 - Implementando uma `Trie`](/chapters/ch07-ex-implementing-a-trie.md#exercise-1---implementing-a-trie)
  - [Nó Root](/chapters/ch07-ex-implementing-a-trie.md#root-node)
  - [Fim de Palavra](/chapters/ch07-ex-implementing-a-trie.md#end-of-the-word)
  - [Desafio 1: Trie Básica com o Método `insert`](/chapters/ch07-ex-implementing-a-trie.md#challenge-1-basic-trie-with-insert-method)
    - [Requisitos](/chapters/ch07-ex-implementing-a-trie.md#requirements)
    - [Mais detalhes](/chapters/ch07-ex-implementing-a-trie.md#more-details)
    - [Solução](/chapters/ch07-ex-implementing-a-trie.md#solution)
  - [Desafio 2: Implemente o Método `search`](/chapters/ch07-ex-implementing-a-trie.md#challenge-2-implement-search-method)
    - [Requisitos](/chapters/ch07-ex-implementing-a-trie.md#requirements-1)
    - [Mais detalhes](/chapters/ch07-ex-implementing-a-trie.md#more-details-1)
    - [Dicas](/chapters/ch07-ex-implementing-a-trie.md#hints)
    - [Solução](#solution-1)
- [Exercício 2 - Implementando Nosso `Router` Baseado em Trie](/chapters/ch08-ex-implementing-router.md#exercise-2---implementing-our-trie-based-router)
  - [Desafio 1: Implementando o Método `addRoute`](/chapters/ch08-ex-implementing-router.md#challenge-1-implementing-the-addroute-method)
    - [Requisitos](/chapters/ch08-ex-implementing-router.md#requirements)
    - [Mais detalhes](/chapters/ch08-ex-implementing-router.md#more-details)
    - [Dicas](/chapters/ch08-ex-implementing-router.md#hints)
    - [Solução](/chapters/ch08-ex-implementing-router.md#solution)
    - [Explicação](/chapters/ch08-ex-implementing-router.md#explanation)
  - [Desafio 2: Implementando o Método `findRoute`](/chapters/ch08-ex-implementing-router.md#challenge-2-implementing-the-findroute-method)
    - [Requisitos](/chapters/ch08-ex-implementing-router.md#requirements-1)
    - [Mais detalhes](/chapters/ch08-ex-implementing-router.md#more-details-1)
    - [Modelo Inicial](/chapters/ch08-ex-implementing-router.md#starting-boilerplate)
    - [Dicas](/chapters/ch08-ex-implementing-router.md#hints-1)
    - [Solução](/chapters/ch08-ex-implementing-router.md#solution-1)
    - [Explicação](/chapters/ch08-ex-implementing-router.md#explanation-1)

![](https://uddrapi.com/api/img?page=readme)
