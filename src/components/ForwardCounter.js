import { useState, useEffect } from 'react';
import useContext from '../Hooks/useContext';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useContext();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
