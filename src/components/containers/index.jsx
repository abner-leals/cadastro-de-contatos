import React, { useContext } from "react";

import { ValoresContext } from "../../contexts/valoresCalculados";
import { QuadroRes, QuadroValores } from "./style";

export const ContainerRes = (props) => {
  const { valores } = useContext(ValoresContext);
  const keys = Object.keys(valores);
  return (
    <QuadroRes>
      <h3>
        Você Receberá:<p></p>
      </h3>
      <QuadroValores>
        {keys?.map((key) => {
          if (key === "0") {
            return (
              <li key={key}>
                Hoje:{" "}
                <strong>
                  {" "}
                  R$ {(valores[key] / 100).toFixed(2).replace(".", ",")}{" "}
                </strong>
              </li>
            );
          }
          if (key === "1") {
            return (
              <li key={key}>
                Amanhã:{" "}
                <strong>
                  {" "}
                  R$ {(valores[key] / 100).toFixed(2).replace(".", ",")}{" "}
                </strong>
              </li>
            );
          } else {
            return (
              <li key={key}>
                Em {key} dias:
                <strong>
                  {" "}
                  R$ {(valores[key] / 100).toFixed(2).replace(".", ",")}{" "}
                </strong>{" "}
              </li>
            );
          }
        })}
      </QuadroValores>
    </QuadroRes>
  );
};
