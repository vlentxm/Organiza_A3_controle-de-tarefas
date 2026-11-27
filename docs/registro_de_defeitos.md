# Registro de Defeitos — Organiza

**Data dos testes exploratórios:** 26/11/2026.

O enunciado solicita pelo menos dois defeitos identificados durante os testes e permite documentar problemas encontrados em testes exploratórios ou situações de falha reproduzíveis. Os dois registros abaixo foram observados e reproduzidos. Eles são apresentados com transparência como limitações de usabilidade; não são violações diretas de requisitos funcionais expressos no enunciado.

## BUG01 — Pesquisa diferencia nomes com e sem acento

- **Descrição:** A pesquisa encontra “João”, mas não encontra o mesmo registro quando o termo é digitado como “Joao”, sem acento.
- **Pré-condição:** Existir tarefa cadastrada com responsável “João”.
- **Passos para reproduzir:** (1) cadastrar tarefa com responsável “João”; (2) pesquisar `João` e confirmar que aparece; (3) substituir por `Joao`; (4) observar que nenhum resultado é encontrado.
- **Resultado atual:** A busca diferencia “ã” de “a”.
- **Resultado desejável:** Normalizar acentos para que a pesquisa localize o nome com ou sem diacríticos.
- **Severidade:** Baixa.
- **Estado:** Aberto — não corrigido na versão avaliada.
- **Evidências:** `evidencias/EXP01_pesquisa_com_acentos_Joao.png` e `evidencias/EXP01_pesquisa_sem_acentos_Joao.png`.
- **Observação:** A pesquisa sem distinção de acentos não está explicitamente exigida no enunciado; trata-se de melhoria identificada em teste exploratório.

## BUG02 — Tarefa vencida não recebe indicação visual de atraso

- **Descrição:** O sistema aceita uma tarefa com data de vencimento passada e não apresenta sinalização visual específica de atraso.
- **Pré-condição:** Data de execução 26/11/2026.
- **Passos para reproduzir:** (1) cadastrar tarefa `teste de prazo`; (2) informar responsável `iury`; (3) informar vencimento `01/01/2025`; (4) salvar; (5) observar a tarefa; (6) alterar status para “Em andamento”; (7) observar novamente.
- **Resultado atual:** A tarefa é aceita e aparece com o status selecionado, sem aviso ou destaque de vencimento ultrapassado.
- **Resultado desejável:** Exibir aviso/indicador de atraso para tarefas não concluídas cuja data já passou.
- **Severidade:** Baixa.
- **Estado:** Aberto — não corrigido na versão avaliada.
- **Evidências:** `evidencias/EXP03_tarefa_com_data_passada.png` e `evidencias/EXP03_status_tarefa_vencida.png`.
- **Observação:** O enunciado exige armazenar a data de vencimento, mas não determina bloqueio de datas passadas nem alerta de atraso. Trata-se de oportunidade de melhoria observada em teste exploratório.

## Resumo

| Indicador | Resultado |
|---|---:|
| Defeitos/limitações exploratórias registrados | 2 |
| Severidade alta | 0 |
| Severidade média | 0 |
| Severidade baixa | 2 |
| Corrigidos nesta versão | 0 |
| Em aberto | 2 |
