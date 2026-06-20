import { schemaProps } from "./schemaProps";

export const schema = {
  title: "Barra de frete personalizada",
  description: "Adereços para Barra de frete personalizada",
  type: "object",
  properties: {
    valueFreeShipping: {
      title: "Valor mínimo para frete grátis",
      type: "number",
      description: "Valor do frete grátis",
      default: schemaProps.valueFreeShipping,
    },
  },
};
