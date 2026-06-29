# [004] feat: Checkbox "Importante" marcado por padrão no cadastro de tarefas

## Modelo de Trabalho
- **Branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Derivar de:** `ia-main`
- **Agente responsável:** dev (`.kiro/agents/dev.json`)

## Instruções de Início para o Agente
1. Verificar se está no branch `ia-main`. Caso não esteja, informar e perguntar se pode retornar a ele antes de iniciar.
2. Após autorização, mover esta task para a pasta `doing/`, fazer commit e push no branch `ia-main`.
3. Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir de `ia-main` e iniciar a implementação.

---

## Descrição
Na tela de cadastro de tarefas, o checkbox **"Importante"** deve vir **marcado por padrão** sempre que o formulário for aberto ou resetado. Apenas o estado inicial do checkbox deve ser alterado; o comportamento do restante do formulário permanece igual.

## Critérios de Aceite
- [ ] Ao abrir o formulário de cadastro, o checkbox "Importante" já aparece marcado (`checked = true`).
- [ ] O usuário ainda pode desmarcar o checkbox antes de salvar.
- [ ] Após salvar uma tarefa, o formulário é resetado e o checkbox volta a aparecer **marcado** (não desmarcado).
- [ ] Nenhum outro campo do formulário teve seu comportamento alterado.
- [ ] A tarefa salva reflete corretamente o valor do checkbox (importante = true por padrão, salvo se o usuário desmarcar).

## Localização do Arquivo
- **Arquivo:** `client/src/components/AddTask.jsx`
- **Linha a alterar:** estado inicial de `importante`
  ```js
  // Antes
  const [importante, setImportante] = useState(false);

  // Depois
  const [importante, setImportante] = useState(true);
  ```
- **Reset após submit:** garantir que o `setImportante(false)` na função `onSubmit` seja alterado para `setImportante(true)`.

## Observações Técnicas
- Mudança mínima e cirúrgica — apenas dois pontos no mesmo arquivo.
- Não requer alterações no backend, banco de dados ou outros componentes.
- Validar visualmente que o checkbox aparece marcado ao carregar a página.

## Tipo
`feat`

## Estimativa
XS (menos de 30 minutos)
