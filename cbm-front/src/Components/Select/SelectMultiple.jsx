import Select from 'react-select';

export default function MySelect({ onChange, list }){

  
  const options = list.map((optionAtual) => {
    return (
      {value: optionAtual, label: optionAtual}
    )
  })


  return(
    
    <Select 
      isMulti
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      name="list"
      onChange={onChange}
      
    />
  )
}