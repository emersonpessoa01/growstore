import { defaultProps } from "./defaultProps";

export const schema = {
  title: "Banner de Benefícios",
  description: "Custom component BenefitsBanner",
  type: "object",
  properties: {
    discount: {
      title: "Percentual de desconto",
      description:
        "Informe o percentual de desconto para exibir no banner",
      type: "string",
      default: defaultProps.discount
    },
    installments: {
      title: "Número de parcelas",
      description: "Parcelamento sem juros",
      type: "string",
      default: defaultProps.installments
    }
  },
};
