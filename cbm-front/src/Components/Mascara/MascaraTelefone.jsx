import InputMask from 'react-input-mask';
import './estilo.css';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

export default function MascaraCpf({value, onChange}){
  
  function handleChange(event){
    onChange({
      ...event,
      target:{
        ...event.target,
        value: onlyNumbers(event.target.value),
      }
    })
  }
  return(
    <InputMask
      className="InputMask"
      mask="(99)99999-9999"
      name="telefone"
      onChange={onChange}
      value={value}
      required
      autoComplete="off"
      handleChange={handleChange}
      
    />
  )
}