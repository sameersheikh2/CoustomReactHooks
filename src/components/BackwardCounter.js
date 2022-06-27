import useContext from '../Hooks/useContext';
import Card from './Card';

const BackwardCounter = () => {
  const counter = useContext(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
