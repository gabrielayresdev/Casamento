import React from "react";
import parseDate from "../services/parseDate";
import getLastDayOfMonth from "../services/getLastDayOfMonth";

type inputTypes = "email" | "date" | "notNull" | false;
type Types = {
  [key: string]: {
    validate: () => boolean;
  };
};

const useForm = (type: inputTypes) => {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);

  const types: Types = {
    email: {
      validate: () => {
        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (value.length === 0) {
          setError("Preencha um valor");
          return false;
        } else if (!regex.test(value)) {
          setError("E-mail inválido");
          return false;
        } else {
          setError(null);
          return true;
        }
      },
    },
    date: {
      validate: () => {
        const { month, year } = parseDate(value);
        if (!month || !year) {
          setError("Informe o ano e o mês que deseja agendar o evento");
          return false;
        } else {
          const current = new Date();
          const limit = getLastDayOfMonth(year, month);
          if (limit < current) {
            setError(
              "Não podemos agendar um evento para o passado. Por favor, selecione uma data válida"
            );
            return false;
          }
          setError(null);
          return true;
        }
      },
    },
    notNull: {
      validate: () => {
        if (value.length === 0) {
          console.log(value.length);
          setError("Preencha o campo");
          return false;
        }
        setError(null);
        return true;
      },
    },
  };

  function validate() {
    if (type) {
      const valid = types[type].validate();
      return valid;
    } else return true;
  }

  function onChange({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (error) validate();
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(),
  };
};

export default useForm;
