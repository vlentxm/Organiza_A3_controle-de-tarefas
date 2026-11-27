# Relatório Final — Organiza

## 1. Identificação
- **Projeto:** Sistema de Controle de Tarefas (Organiza)
- **Disciplina:** Garantia da Qualidade de Software
- **Data de execução:** 26/11/2026
- **Integrante(s):** Iury Valentim Fernandes | RA: 1262625005

## 2. Resumo da aplicação
O Organiza é uma aplicação web simples para gerenciamento de tarefas. Permite cadastrar, listar, editar e excluir tarefas, alterar o status entre Pendente, Em andamento e Concluída, pesquisar por título ou responsável e filtrar por status. Os dados são armazenados no LocalStorage do navegador.

## 3. Execução dos testes manuais
Foram executados nove casos manuais (CT01 a CT09), cobrindo cadastro válido, alteração de status, pesquisa, múltiplas tarefas, filtro, edição, exclusão, validação de título obrigatório e persistência após atualização da página.

| Métrica | Resultado |
|---|---:|
| Casos executados | 9 |
| Aprovados | 9 |
| Reprovados | 0 |
| Aprovação | 100% |
| Reprovação | 0% |

**Cálculo:** 9 ÷ 9 × 100 = 100%.

## 4. Testes exploratórios e defeitos
Foram registrados dois comportamentos reproduzíveis:
- **BUG01:** a pesquisa diferencia nomes com e sem acento (“João” é encontrado, “Joao” não).
- **BUG02:** tarefas com data de vencimento passada não recebem indicação visual de atraso.

Ambos foram classificados com severidade baixa e permaneceram em aberto. O enunciado não define expressamente busca insensível a acentos nem alerta/bloqueio de datas passadas; por isso, são apresentados como limitações/oportunidades de melhoria identificadas exploratoriamente, e não como violações diretas dos requisitos obrigatórios.

| Métrica de defeitos | Resultado |
|---|---:|
| Defeitos/limitações exploratórias registrados | 2 |
| Corrigidos nesta versão | 0 |
| Em aberto | 2 |
| Taxa de correção | 0% |

## 5. Teste automatizado
Execução realizada na raiz do projeto pelo comando `npm test`, com Node.js v26.13.1 e npm 11.20.0.

Os oito testes verificaram: aceitação de tarefa válida; rejeição de título vazio ou apenas espaços; rejeição de responsável ausente; rejeição de data ausente; aceitação apenas dos três status; remoção de espaços extras; formatação de data ISO para o padrão brasileiro; e descrição opcional.

| Métrica | Resultado |
|---|---:|
| Testes automatizados executados | 8 |
| Aprovados | 8 |
| Reprovados | 0 |
| Aprovação | 100% |

Evidência: `evidencias/TA01_resultado_8_testes_automatizados.png`.

## 6. Avaliação da qualidade
Os testes indicam que as funcionalidades principais verificadas estão operacionais: cadastro, alteração de status, pesquisa básica, filtragem, edição, exclusão, validação de título e persistência após atualização. Os oito testes automatizados também foram aprovados.

Os testes exploratórios identificaram duas oportunidades de melhoria relacionadas à busca com acentos e à sinalização de tarefas vencidas. Essas limitações não foram corrigidas nesta versão. A aplicação também possui limitações de escopo: os dados ficam armazenados localmente no navegador, sem autenticação, backend ou sincronização entre dispositivos.

## 7. Conclusão
Com base nos nove casos manuais executados e nos oito testes automatizados aprovados, a aplicação apresentou resultado satisfatório nas funcionalidades essenciais verificadas. Os testes exploratórios permitiram registrar duas oportunidades de melhoria. Assim, o Organiza atende ao escopo funcional básico definido para o mini projeto, mantendo oportunidades de evolução na pesquisa e no acompanhamento de prazos.
