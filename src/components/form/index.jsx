import React from "react";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "../input";
import { QuadroReq } from "../containers/style";
import api from "../../services/api";

export const Formulario = ({
  tipo,
  rota,
  data = { email: "", full_name: "", telephone: "" },
}) => {
  const formatPhone = (str) => {
    return str
      .replace(/\D/g, "")
      .replace(
        /(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})/,
        (fullMatch, country, ddd, dddWithZero, prefixTel, suffixTel) => {
          if (country)
            return `${country} (${
              ddd || dddWithZero
            }) ${prefixTel}-${suffixTel}`;
          if (ddd || dddWithZero)
            return `(${ddd || dddWithZero}) ${prefixTel}-${suffixTel}`;
          if (prefixTel && suffixTel) return `${prefixTel}-${suffixTel}`;
          return str;
        }
      );
  };
  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Informe um email válido"),

    telephone: yup.string().required("Campo obrigatório"),
    days: yup.number().typeError("Apenas números").optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    data.amount = data.amount * 100;
    api.post("", data).then((response) => {
      console.log(response);
    });
  };
  const [full_name, setFull_name] = useState(data.full_name);
  const [email, setEmail] = useState(data.email);
  const [telephone, setTelephone] = useState(data.telephone);
  return (
    <QuadroReq onSubmit={handleSubmit((data) => onSubmit(data))}>
      <h1>Informe os Dados</h1>
      <Input
        label="Nome completo*"
        placeholder="Informe o nome completo*"
        register={register}
        name="full_name"
        error={errors.full_name?.message}
        value={full_name}
        onChange={(e) => {
          setFull_name(e.target.value);
        }}
      />
      <Input
        label="Informe seu melhor email *"
        placeholder="Seu melhor email *"
        register={register}
        name="email"
        error={errors.email?.message}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        label="Informe o número do telefone *"
        placeholder="Informe o Telefone *"
        register={register}
        name="telephone"
        error={errors.telephone?.message}
        value={telephone}
        onChange={(e) => {
          setTelephone(
            formatPhone(e.target.value.replace(/[^\d]/g, "").substring(0, 11))
          );
        }}
      />

      <button type="submit"> Enviar </button>
    </QuadroReq>
  );
};
