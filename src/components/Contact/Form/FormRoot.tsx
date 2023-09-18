import React from "react";

interface IFormRoot extends React.PropsWithChildren {
  className: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormRoot = React.forwardRef<HTMLFormElement, IFormRoot>(
  ({ children, className, handleSubmit }, ref) => (
    <form className={className} onSubmit={handleSubmit} ref={ref}>
      {children}
    </form>
  )
);

export default FormRoot;
