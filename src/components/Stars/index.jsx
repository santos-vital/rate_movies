import { Container} from './styles';
import { IoStar, IoStarOutline } from 'react-icons/io5';

export function Stars({background}){
  return(
    <Container>
      {background ? <IoStar/> : <IoStarOutline/>}
    </Container>
  );
}