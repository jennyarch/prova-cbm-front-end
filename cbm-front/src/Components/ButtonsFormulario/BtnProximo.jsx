import { ButtonProximo } from "./style";

export default function BtnProximo({ evento, children, tipo, onChange }) {
  return (
    <>
      <ButtonProximo 
        type={tipo} 
        onClick={evento}
        onChange={onChange}
        >
        {children}
      </ButtonProximo>
    </>
  );
}
