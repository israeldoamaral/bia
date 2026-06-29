# 004 - Checkbox "Importante" marcado por padrão no cadastro de tarefa

## Tipo
`feat`

## Descrição
Na tela de cadastro de tarefa, o checkbox **"Importante"** deve vir marcado por padrão ao abrir o formulário, facilitando o fluxo do usuário que, na maioria das vezes, cadastra tarefas importantes.

## Contexto Técnico
- **Arquivo:** `client/src/components/AddTask.jsx`
- **Estado atual:** `const [importante, setImportante] = useState(false);`
- **Estado esperado:** `const [importante, setImportante] = useState(true);`

> ⚠️ Apenas o valor inicial do estado deve ser alterado. O comportamento do checkbox (desmarcar/marcar livremente) permanece igual. Após o envio do formulário, o reset também deve voltar para `true` (linha `setImportante(false)` → `setImportante(true)`).

## Critérios de Aceite
- [ ] Ao abrir/carregar o formulário de cadastro, o checkbox "Importante" já aparece marcado
- [ ] O usuário ainda consegue desmarcar o checkbox manualmente
- [ ] Após salvar uma tarefa, o checkbox volta marcado para o próximo cadastro
- [ ] Nenhum outro campo ou comportamento do formulário é afetado

## Arquivos a Modificar
- `client/src/components/AddTask.jsx`

## Estimativa
**P** (Pequena) — alteração de 2 linhas
