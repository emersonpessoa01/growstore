import React from "react";
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { schema } from "./schemas/schema";
import { schemaProps } from "./schemas/schemaProps";

interface CustomFreightBarProps {
  valueFreeShipping: number;
}

export default function CustomFreightBar({
  valueFreeShipping,
}: CustomFreightBarProps) {
  const { orderForm } = useOrderForm();

  console.log("Order Form", orderForm);

  const metaFrete =
    valueFreeShipping || schemaProps.valueFreeShipping;
  const valorAtual = orderForm?.value || 0;
  const faltaQuanto = Math.max(0, metaFrete - valorAtual);
  const porcentagem = Math.min(
    (valorAtual / metaFrete) * 100,
    100,
  );
  const ganhouFrete = valorAtual >= metaFrete;

  const textColor = porcentagem > 51 ? "#fff" : "#333";

  return (
    <div style={ContainerStyle}>
      {/* Barra de fundo cinza */}
      <div style={backgroundBarStyle} />

      {/* Barra de preenchimento laranja */}
      <div
        style={{
          ...fillBarStyle,
          width: `${porcentagem}%`,
        }}
      />

      {/* Texto informativo */}
      <div style={{ ...textStyle, color: textColor }}>
        {ganhouFrete
          ? "parabéns! você ganhou frete grátis"
          : `faltam R$ ${(faltaQuanto / 100).toFixed(
              2,
            )} PARA GANHAR FRETE GRÁTIS`}
      </div>
    </div>
  );
}

CustomFreightBar.schema = schema;
CustomFreightBar.schemaProps = schemaProps;

const ContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "30px",
  position: "relative",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

const backgroundBarStyle: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

const fillBarStyle: React.CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  backgroundColor: "#e88235",
  transition: "width 0.5s ease-in-out",
};

const textStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  fontSize: "12px",
  fontWeight: "bold",
  letterSpacing: "0.5px",
  textAlign: "center",
  textTransform: "uppercase",
};
