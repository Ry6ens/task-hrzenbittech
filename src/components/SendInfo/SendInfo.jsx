import { useSelector } from 'react-redux';

import { Text } from './SendInfo.styled';

import { getMessage } from 'redux/contactForm/form-selectors';

export default function SendInfo() {
  const message = useSelector(getMessage);

  return <Text>{message}</Text>;
}
