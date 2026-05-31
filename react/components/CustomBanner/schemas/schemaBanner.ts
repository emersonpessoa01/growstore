import { defaultPropsBanner } from "./defaultPropsBanner";

export const schemaBanner = {
  title: "Banner de Benefícos Natura IO",
  description: "Configuração dos 3 selos promocionais da Home Page",
  type: "object",
  properties: {
    layout: {
      title: "Layoout do Banner",
      type: "string",
      enum: ["horizontal", "vertical"],
      default: defaultPropsBanner.layout,
      widget: {
        "ui:widget": "radio"
      }
    },
    // Campos do selo 1
    iconUrl1: {
      title: "ìcone do Selo 1",
      type: "string",
      default: defaultPropsBanner.iconUrl1
    },
    mainText1: {
      title: "Texto Principal do Selo 1",
      type: "string",
      default: defaultPropsBanner.mainText1
    },
    subText1: {
      title: "Texto Suporte do Selo 1",
      type: "string",
      default: defaultPropsBanner.subText1
    },
    // Campos do selo 2
    iconUrl2: {
      title: "ìcone do Selo 2",
      type: "string",
      default: defaultPropsBanner.iconUrl2
    },
    mainText2: {
      title: "Texto Principal do Selo 2",
      type: "string",
      default: defaultPropsBanner.mainText2
    },
    subText2: {
      title: "Texto Suporte do Selo 2",
      type: "string",
      default: defaultPropsBanner.subText2
    },

    // Campos do selo 3
    iconUrl3: {
      title: "ìcone do Selo 3",
      type: "string",
      default: defaultPropsBanner.iconUrl3
    },
    mainText3: {
      title: "Texto Principal do Selo 3",
      type: "string",
      default: defaultPropsBanner.mainText3
    },
    subText3: {
      title: "Texto Suporte do Selo 3",
      type: "string",
      default: defaultPropsBanner.subText3
    }
  }
};
