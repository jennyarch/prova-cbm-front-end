import { ButtonVoltar } from './style';

export default function BtnVoltar({ evento, children }){
  return (
    <>
      <ButtonVoltar 
        type='button' 
        onClick={evento}>
          {children}
      </ButtonVoltar>
    </>
  )
}