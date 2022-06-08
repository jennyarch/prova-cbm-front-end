
import { Container, ContainerMain} from "./styles";

export default function ContainerComponent({children}) {

  return (
    <ContainerMain>
      <Container>
        {children}
      </Container>
    </ContainerMain>
  );
}