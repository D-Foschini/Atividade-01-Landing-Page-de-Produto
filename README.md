# ThermoViva One

## Integrantes

- Eric Barbosa Costa
- Daniel Foschini

## Sobre o produto

A **ThermoViva One** é uma garrafa térmica fictícia de 750 ml pensada para pessoas que passam o dia entre estudo, trabalho, deslocamentos e atividades físicas. Sua proposta é manter bebidas quentes por até 12 horas e frias por até 24 horas, combinando praticidade, vedação segura e uma identidade visual contemporânea.

A landing page apresenta o produto, seus benefícios, a tecnologia de isolamento, avaliações fictícias, preço, perguntas frequentes e um checkout demonstrativo. Toda a experiência é client-side: o formulário simula uma reserva, mas não envia nem armazena dados.

## Jornada de construção

### Ideia inicial

O ponto de partida da atividade já definia o tipo de produto: uma garrafa térmica. A partir disso, a ideia foi evitar uma apresentação genérica e criar uma marca fictícia com personalidade própria. Surgiu então a **ThermoViva**, associando temperatura e movimento, e o modelo **One**, apresentado como uma garrafa versátil para diferentes momentos do dia.

Foram consideradas duas abordagens visuais:

- uma página clara e minimalista, próxima de um catálogo;
- uma direção escura e editorial, inspirada em produtos esportivos e de tecnologia.

A segunda opção foi escolhida porque valoriza melhor o acabamento preto da garrafa e permite usar o verde-lima como cor de energia, destaque e ação.

Também foram avaliados CTAs de lista de espera e cadastro. A solução final utiliza uma **compra simulada**, pois demonstra mais interação: o usuário abre um modal, preenche o formulário e recebe uma confirmação visual, sem qualquer cobrança real.

### Pesquisa e referências

A pesquisa se concentrou em padrões comuns de landing pages de produto:

- hierarquia de informação começando por proposta de valor e imagem principal;
- benefícios apresentados antes dos detalhes técnicos;
- seção visual explicando o funcionamento do isolamento térmico;
- prova social claramente identificada como fictícia;
- oferta próxima do CTA principal;
- FAQ para responder objeções antes da decisão.

Como referência estética, foram observadas linguagens de fotografia editorial de produto, campanhas de equipamentos para atividades ao ar livre e páginas de produtos tecnológicos. Nenhuma página ou marca real foi reproduzida. A composição final foi desenvolvida especificamente para o produto fictício.

### Ferramentas utilizadas

- React;
- Vite;
- JavaScript;
- CSS Modules;
- Lucide React para os ícones;
- OpenAI Codex para apoio na ideação, organização e implementação;
- ferramenta de geração de imagens da OpenAI para o mockup da garrafa;
- Git e GitHub para versionamento.

### Uso de IA

Foi utilizado o **OpenAI Codex, baseado em um modelo GPT**, durante a construção do projeto. A IA ajudou em quatro momentos principais:

1. transformação dos requisitos da atividade em uma estrutura completa de landing page;
2. criação do conceito da marca ThermoViva, dos textos e da hierarquia das seções;
3. implementação em React, separação em MVVM e criação dos estilos responsivos;
4. geração do mockup promocional da garrafa a partir de uma descrição visual.

O primeiro resultado já contemplava as seções solicitadas, porém usava um único componente e uma folha CSS global. Após a leitura dos critérios completos da atividade, essa solução foi revista. A sugestão inicial de manter tudo concentrado foi descartada e o código foi reorganizado em **Model, View e ViewModel**, além da migração para **CSS Modules**.

Foram mantidas as sugestões relacionadas à identidade escura, ao verde-lima como cor de destaque, à seção técnica e ao checkout simulado. Os textos foram ajustados para deixar explícito que o produto, as avaliações e a compra são fictícios.

### Evolução da solução

Entre a primeira ideia e a versão final, ocorreram as seguintes mudanças:

- definição do nome **ThermoViva One** e de uma identidade visual própria;
- adoção de uma composição editorial em preto, creme e verde-lima;
- substituição de um CTA genérico por um checkout simulado com validação;
- inclusão de confirmação visual após o envio do formulário;
- criação de uma representação técnica em CSS para explicar as camadas da garrafa;
- identificação explícita das avaliações como conteúdo fictício;
- inclusão de menu responsivo e FAQ interativo;
- reorganização do código para a arquitetura MVVM;
- migração dos estilos para CSS Modules;
- inclusão de acessibilidade básica, navegação por âncoras e suporte a redução de movimento.

### Resultado final

O resultado final atende ao objetivo de apresentar e vender a ideia de um produto fictício em uma experiência navegável. A página funciona em diferentes tamanhos de tela, mantém uma identidade consistente e inclui todas as seções previstas na atividade.

Com mais tempo, seria interessante realizar testes com usuários, criar variações reais de cor para o produto, otimizar ainda mais a imagem principal e adicionar testes automatizados para as interações do formulário e do FAQ.

## Arquitetura do projeto

Foi escolhida a arquitetura **MVVM (Model–View–ViewModel)** por separar os dados, a interface e os comportamentos sem acrescentar complexidade desnecessária ao tamanho do projeto.

```text
src/
├── models/
│   └── product.js                    # Dados mockados do produto e conteúdo
├── viewmodels/
│   └── useLandingPageViewModel.js    # Estado e ações da interface
├── views/
│   ├── LandingPage.jsx               # Componentes visuais da página
│   └── LandingPage.module.css        # CSS Module responsivo
├── App.jsx                            # Entrada da aplicação
└── main.jsx                           # Montagem do React
```

- **Model:** concentra as informações fictícias da garrafa, benefícios, etapas, avaliações e FAQ.
- **ViewModel:** controla menu mobile, acordeão, modal, envio simulado e mensagem de sucesso.
- **View:** renderiza a página e recebe dados e ações do ViewModel.

## Requisitos atendidos

- [x] React
- [x] CSS Modules
- [x] Arquitetura MVVM
- [x] Identidade visual
- [x] Nome e proposta do produto
- [x] Hero section
- [x] Benefícios e diferenciais
- [x] Imagem e representação do produto
- [x] Explicação de funcionamento
- [x] Avaliações fictícias
- [x] Oferta e preço
- [x] FAQ
- [x] CTA funcional com modal e formulário simulado
- [x] Layout responsivo

## Como executar

É necessário ter o Node.js instalado.

```bash
npm install
npm run dev
```

O Vite mostrará no terminal o endereço local para abrir no navegador.

## Build de produção

```bash
npm run build
npm run preview
```

> Projeto acadêmico. O produto, as características comerciais, as avaliações e a compra são fictícios.
