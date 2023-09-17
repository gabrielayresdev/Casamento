import React from "react";

interface IFormRoot extends React.PropsWithChildren {
  className: string;
}

const FormRoot = ({ children, className }: IFormRoot) => {
  return <form className={className}>{children}</form>;
};

export default FormRoot;
