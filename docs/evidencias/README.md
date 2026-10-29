# Evidências da Atividade 02

O MCP **Computer/Browser Use** (`unified-computer-use`, ferramenta `mcp__cua_repl`) foi usado na aplicação local para ler a árvore de acessibilidade, operar os controles, enviar teclas, inspecionar o DOM e capturar telas. Os arquivos abaixo registram a versão original e a versão corrigida; não são imagens ilustrativas geradas por IA.

## Antes e depois

| Verificação | Antes | Depois |
| --- | --- | --- |
| Contraste dos títulos em fundo claro, desktop | [Captura original](antes-contraste-desktop.jpg) | [Captura corrigida](depois-contraste-desktop.jpg) |
| Modal e navegação por teclado | [Captura original](antes-modal.jpg), [foco atrás do modal](antes-modal-teclado.txt) | [Captura desktop](depois-modal-desktop.jpg), [foco inicial e isolamento](depois-modal-teclado.txt), [captura mobile](depois-modal-mobile.jpg) |
| FAQ e status de confirmação inicial | [Trechos do retorno original do MCP](antes-acessibilidade.txt) | [Árvore corrigida](depois-acessibilidade.txt), [FAQ por teclado](depois-faq-teclado.jpg) |

## Registros das verificações

- [Resultados de interação e medidas obtidas pelo MCP](validacoes-mcp.json): Tab, Shift+Tab, Escape, foco, CTAs, validação do formulário, cancelamento, reabertura, FAQ, menu móvel, dimensões e contrastes.
- [Atalho “Pular para o conteúdo” visível no primeiro Tab](depois-atalho-teclado.jpg).
- [E-mail inválido rejeitado pelo navegador](depois-email-invalido.jpg).
- [Confirmação após envio válido](depois-reserva-confirmada.jpg).
- [Menu móvel aberto](depois-menu-mobile.jpg).
- Página completa em [360 × 800](depois-pagina-360.jpg), [768 × 1024](depois-pagina-768.jpg) e [1440 × 900](depois-pagina-1440.jpg). As dimensões são as do viewport; as capturas incluem a página inteira.

O fluxo de cancelamento foi testado fechando o formulário durante os 900 ms de processamento e consultando o status após esse prazo. A confirmação permaneceu vazia. Também foi verificado que uma nova abertura não é encerrada por um processamento antigo. Durante o envio, o botão ficou desabilitado e o formulário informou `aria-busy="true"`.

Nos quatro títulos sobre fundos claros, o contraste calculado a partir das cores computadas pelo navegador ficou em **6,17:1** (benefícios), **6,79:1** (como funciona), **5,63:1** (avaliações) e **6,79:1** (FAQ). Essa medição é específica desses elementos, não uma auditoria de todas as cores da página.

## Contribuição e limites

O MCP confirmou que as respostas recolhidas estavam presentes na árvore de acessibilidade e que Tab alcançava um link atrás do modal original. Na versão corrigida, a árvore do modal apresenta somente seus controles, o foco inicia no nome e percorre os controles sem sair do diálogo. As verificações reais também levaram a complementar o modal nativo com um ciclo explícito entre o primeiro e o último controle.

A validação foi realizada no navegador integrado, com dados fictícios. Não foram testados leitores de tela, dispositivos físicos nem todos os navegadores. `npm run build` também foi executado com sucesso pelo terminal; esse resultado não é atribuído ao MCP de navegador. Nenhum dado foi enviado a um serviço de reservas e não houve publicação no GitHub nesta etapa.
