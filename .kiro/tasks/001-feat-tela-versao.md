# [001] Tela de Versão

## Tipo
`feat`

## Descrição
Implementar a tela de versão no frontend do projeto BIA, acessível pela rota `/versao`, seguindo o mesmo padrão de estrutura e estilo da tela de tarefas.

## Contexto
A API já expõe o endpoint `GET /api/versao` que retorna a versão atual da aplicação. É necessário criar uma tela dedicada no frontend que consuma esse endpoint e exiba as informações de forma consistente com o restante da aplicação.

Atualmente existe um componente `Version.jsx` na pasta `client/src/components/`, porém ele não segue o mesmo padrão da tela de tarefas (`Tasks.jsx`). A tarefa consiste em reescrever/refatorar esse componente para aderir ao padrão estabelecido.

## Critérios de Aceite

- [ ] O componente `Version.jsx` deve consumir a rota `GET /api/versao` usando `fetch`
- [ ] Deve utilizar o hook `useLog` (do `LogContext`) para registrar requisições, respostas e erros, igual ao padrão do `App.jsx`
- [ ] Deve exibir estado de **loading** enquanto aguarda resposta da API
- [ ] Deve exibir estado de **erro** caso a requisição falhe, com mensagem descritiva
- [ ] Deve exibir o dado retornado pela API (versão) em caso de sucesso
- [ ] A rota `/versao` deve estar registrada no `App.jsx` e com link ativo no `Header.jsx`
- [ ] O visual deve seguir o mesmo padrão de classes CSS já utilizado nas demais telas

## Referências de Padrão

- Componente de referência: `client/src/components/Tasks.jsx`
- Padrão de fetch e logging: `client/src/App.jsx` (funções `fetchTasks`, `getTasks`)
- Rota e navegação: `client/src/App.jsx` e `client/src/components/Header.jsx`

## Arquivos Envolvidos

- `client/src/components/Version.jsx` — componente principal a ser refatorado
- `client/src/App.jsx` — verificar/manter rota `/versao`
- `client/src/components/Header.jsx` — verificar/manter link de navegação

## Notas Técnicas

- Usar `import.meta.env.VITE_API_URL || "http://localhost:8080"` para a URL base da API
- Não criar novos arquivos ou contextos; reutilizar os existentes
- Manter simplicidade: sem paginação, sem filtros, apenas exibir a versão retornada pela API
