import {
  ContainerForm,
  BoxForm,
  Label,
  Input
} from './styles';

export default function FormularioFormacao({ onChange }){
  return (
    <ContainerForm>
      <BoxForm>
        <Label>Instituição</Label>
        <Input
          type="text"
          name="instituicao"
          required
          onChange={onChange}
        />
      </BoxForm>
      <BoxForm>
        <Label>Curso</Label>
        <Input
          type="text"
          name="curso"
          required
          onChange={onChange}
        />
      </BoxForm>
    </ContainerForm>
  )
}