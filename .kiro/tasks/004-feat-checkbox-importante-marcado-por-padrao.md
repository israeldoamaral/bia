# 004 - Checkbox "Importante" marcado por padrão no cadastro de tarefas

## Modelo de Trabalho
- **Branch:** `004-feat-checkbox-importante-marcado-por-padrao`
- **Derivar de:** `ia-main`
- **Agente responsável:** `dev` (`.kiro/agents/dev.json`)

## Instruções de Início
Antes de iniciar a implementação, o agente **dev** deve:

1. Verificar se está no branch `ia-main`. Caso não esteja, informar ao usuário e perguntar se pode retornar para ele antes de prosseguir.
2. Após autorização, mover este arquivo para a pasta `doing/`, fazer commit e push no branch `ia-main`.
3. Criar o branch `004-feat-checkbox-importante-marcado-por-padrao` a partir de `ia-main` e iniciar a implementação.

---

## História de Usuário

**Como** usuário da tela de cadastro de tarefas,  
**Quero** que o checkbox "Importante" já venha marcado por padrão ao abrir o formulário,  
**Para que** eu não precise marcá-lo manualmente toda vez que criar uma nova tarefa importante, reduzindo fricção no processo de cadastro.

---

## Contexto Técnico

- **Arquivo:** `client/src/components/AddTask.jsx`
- **Linha afetada:** `const [importante, setImportante] = useState(false);`
- **Mudança necessária:** Alterar o valor inicial do state de `false` para `true`

---

## Critérios de Aceite

- [ ] Ao abrir o formulário de cadastro de tarefas, o checkbox "Importante" deve estar marcado por padrão.
- [ ] O usuário ainda deve conseguir desmarcar o checkbox manualmente antes de salvar.
- [ ] Após salvar uma tarefa, o formulário deve ser resetado com o checkbox "Importante" marcado novamente (comportamento padrão mantido).
- [ ] Nenhum outro campo do formulário deve ser afetado pela mudança.
- [ ] A funcionalidade de cadastro de tarefas deve continuar funcionando normalmente.

---

## Detalhes de Implementação

### Mudança necessária

**Arquivo:** `client/src/components/AddTask.jsx`

```diff
- const [importante, setImportante] = useState(false);
+ const [importante, setImportante] = useState(true);
```

Também ajustar o reset após submit para manter `true` como valor padrão:

```diff
- setImportante(false);
+ setImportante(true);
```

---

## Tipo
`feat`

## Estimativa
`P` — Pequena (menos de 1 hora)
