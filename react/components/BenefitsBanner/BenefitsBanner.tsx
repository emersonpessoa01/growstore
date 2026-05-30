import React from "react";
import { useProduct } from "vtex.product-context";
import { schema } from "./schemas/schema";
import { defaultProps } from "./schemas/defaultProps";

type Props = {
  discount?: string;
  installments?: string;
};

function BenefitsBanner({ discount, installments }: Props) {
  const productContext = useProduct();
  // const product = productContext?.product;

  // console.log("Produto no BenefitsBanner:", product);
  // console.log("Contexto do produto:", productContext);
  // const dateCurrent = new Date().toLocaleDateString("pt-BR", {
  //   day: "2-digit",
  //   month: "2-digit",
  //   year: "numeric"
  // });
  const listPrice =
    productContext?.selectedItem?.sellers[0].commertialOffer.ListPrice;
  const installmentsValue = listPrice ? listPrice / Number(installments) : 0;

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "10px",
        borderRadius: "8px",
        border: ".1px solid rgba(0, 0, 0, .1)",
        maxWidth: "45rem",
        width: "100%"
      }}
    >
      {/* <h1
        style={{
          color: "#00419e",
          margin: "0 0 10px 0",
          fontSize: "20px"
        }}
      >
        Hey, {name}
      </h1> */}
      {/* <p
        style={{
          color: "#333",
          margin: 0,
          fontSize: "14px",
          fontWeight: "bold"
        }}
      >
        Data: {dateCurrent} {dataCustom && `| Custom: ${dataCustom}`}
      </p> */}

      <span style={{ color: "#555", margin: 0, fontSize: "12px" }}>
        Em até {installments} de R${" "}
        {installmentsValue?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}{" "}
        sem juros você poderá pagar à vista R${" "}
        {listPrice?.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}{" "}
        ou ganhar {discount}% de desconto no boleto.
      </span>
    </div>
  );
}

BenefitsBanner.schema = schema;
BenefitsBanner.defaultProps = defaultProps;

export default BenefitsBanner;
