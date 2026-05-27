# 🧩 Desafio E4 — React aplicado ao VTEX IO

**Formação:** Desenvolvimento com VTEX IO  
**Encontro:** E4 — D8, parte 3  
**Entrega:** até o próximo encontro ao vivo (E5)

---

## Contexto

Você foi contratado pela **Natura IO Store** para resolver um problema real: o time de marketing precisa alterar os selos promocionais da Home Page — textos como "Frete grátis" e "Pagamento seguro" — sem precisar acionar o dev a cada campanha.

Sua missão é construir um componente React no VTEX IO que o time de conteúdo consiga editar **diretamente pelo Site Editor**, sem mexer em código.

---

## O que você vai construir

Um componente chamado `BenefitsBanner` que:

- Exibe ao menos **3 selos** com ícone + texto principal + texto de suporte
- Permite que qualquer propriedade (texto, ícone, destaque) seja editada pelo **Site Editor**
- Funciona em dois layouts: **horizontal** e **vertical**
- Usa **CSS Handles** para que o Store Theme controle os estilos sem tocar no componente

---

## Entregável mínimo

Para considerar o desafio concluído, seu projeto deve ter:

- [ ] Componente `BenefitsBanner.tsx` renderizando os selos corretamente
- [ ] Bloco `benefits-banner` registrado em `interfaces.json`
- [ ] Props padrão declaradas em `blocks.json`
- [ ] JSON Schema com as propriedades editáveis (título, ícone, destaque)
- [ ] Bloco visível e editável no painel do Site Editor
- [ ] Loja rodando em workspace dev via `vtex link` sem erros de build

---

## Código de referência

O código base está disponível no repositório da turma. Use como ponto de partida — leia, entenda a estrutura e adapte para o seu workspace.

> **Atenção:** não copie e cole sem ler. O valor do exercício está em entender **por que** cada arquivo existe e como as peças se conectam.

Arquivos que você vai encontrar:

```
benefits-banner/
├── manifest.json
├── react/
│   └── BenefitsBanner.tsx     ← componente + JSON Schema
├── store/
│   ├── interfaces/interfaces.json
│   └── blocks/blocks.json
└── styles/css/BenefitsBanner.css
```

---

## Passo a passo sugerido

1. Leia o `README.md` do projeto antes de qualquer coisa
2. Abra o workspace dev e confirme que o `vtex link` está funcionando
3. Adicione `"benefits-banner"` nos blocos da Home Page do seu Store Theme
4. Rode `vtex link` e confirme que o componente aparece na loja
5. Abra o Site Editor (`/admin/cms/storefront`) e edite os selos — eles devem atualizar sem redeploy
6. Personalize os estilos criando o arquivo CSS no Store Theme:

```
styles/css/<seu-vendor>.benefits-banner.css
```

---

## Desafio opcional — para quem quer ir além 🚀

Implemente **uma ou mais** das extensões abaixo e abra um **Pull Request** no repositório da turma:

### Extensão 1 — Layout responsivo com `useDevice()`
Use o hook `useDevice()` da VTEX para detectar se o usuário está em mobile e alternar o layout automaticamente — sem precisar que o time de marketing configure isso.

```tsx
import { useDevice } from 'vtex.device-detector'

const { isMobile } = useDevice()
const activeLayout = isMobile ? 'column' : layout
```

> Dica: conecte com o `useState` e `useEffect` que você já usa no React — a lógica é a mesma, só a fonte dos dados muda.

### Extensão 2 — Variante de layout via prop + CSS Handle
Adicione a prop `layout` ao JSON Schema com o `ui:widget: "radio"` e crie os CSS Handles `benefitsList--row` e `benefitsList--column` para o Store Theme poder estilizar cada variante separadamente.

### Extensão 3 — Internacionalização
Use `defineMessages` + `useIntl` para o título padrão do banner, permitindo que a loja exiba o texto correto em PT-BR, EN e ES sem alterar o componente.

```tsx
import { defineMessages, useIntl } from 'react-intl'

const messages = defineMessages({
  defaultTitle: {
    id: 'store/benefits-banner.sectionTitle',
    defaultMessage: 'Por que comprar aqui?',
  },
})
```

Crie também o arquivo `messages/pt.json` com a tradução.

---

## Critérios de avaliação no E5

No início do próximo encontro, 2 ou 3 alunos vão compartilhar a tela e mostrar:

1. A loja rodando com o `BenefitsBanner` na Home Page
2. Uma edição ao vivo pelo Site Editor (trocar texto ou ícone de um selo)
3. O CSS Handle sendo usado para personalizar um estilo no Store Theme

Não precisa estar perfeito — o importante é ter tentado, ter anotado onde travou e trazer as dúvidas.

---

## Recursos úteis

| Recurso | Link |
|---|---|
| Documentação VTEX IO — React | https://developers.vtex.com/docs/guides/vtex-io-documentation-creating-a-new-custom-page |
| CSS Handles | https://developers.vtex.com/docs/guides/vtex-io-documentation-using-css-handles-for-store-customization |
| JSON Schema no Site Editor | https://developers.vtex.com/docs/guides/vtex-io-documentation-making-your-app-compatible-with-site-editor |
| useDevice hook | https://developers.vtex.com/docs/guides/vtex-device-detector |
| Internacionalização VTEX IO | https://developers.vtex.com/docs/guides/vtex-io-documentation-8-translating-the-component |

---

## Dúvidas?

Poste no canal da turma com a tag `#E4` e descreva:

1. O que você tentou fazer
2. O que aconteceu (mensagem de erro, comportamento inesperado)
3. O que você já pesquisou

Nos vemos no E5. 👋
