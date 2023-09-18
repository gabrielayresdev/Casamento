import React, { FormEventHandler } from "react";
import emailjs from "@emailjs/browser";

interface IFormRoot extends React.PropsWithChildren {
  className: string;
  handleSubmit: (e: FormEventHandler<HTMLFormElement>) => void;
}

/* const FormRoot = ({ children, className, handleSubmit }: IFormRoot) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}; */

const FormRoot = React.forwardRef<HTMLFormElement, IFormRoot>(
  ({ children, className, handleSubmit }, ref) => (
    <form className={className} onSubmit={handleSubmit} ref={ref}>
      {children}
    </form>
  )
);

export default FormRoot;
