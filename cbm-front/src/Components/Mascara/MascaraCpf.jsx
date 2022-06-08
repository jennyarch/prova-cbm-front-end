import InputMask from 'react-input-mask';

import './estilo.css';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

export default function MascaraCpf({value, onChange, evento, nome}){
  
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
      mask="999.999.999-99"
      name={nome}
      onChange={onChange}
      value={value}
      required
      autoComplete="off"
      handleChange={handleChange}
      
    />
  )
}