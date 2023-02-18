import {
  SectionContainer,
  Title,
  MapImg,
  YellowCartoon01Icon,
  YellowCartoon02Icon,
  PinkCartoonIcon,
  Clouds01Icon,
  Clouds02Icon,
  Clouds03Icon,
  Clouds04Icon,
  Clouds05Icon,
  Clouds06Icon,
  Clouds07Icon,
  Clouds08Icon,
  Clouds09Icon,
  EllipseIcon,
} from './Main.styled';

import ContactForm from 'components/ContactForm/ContactForm';
import SendInfo from 'components/SendInfo/SendInfo';

export default function Main() {
  return (
    <main>
      <SectionContainer>
        <Title>Reach out to us!</Title>
        <ContactForm />
        <SendInfo />
        <MapImg />
        <YellowCartoon01Icon />
        <Clouds01Icon />
        <Clouds02Icon />
        <Clouds03Icon />
        <Clouds04Icon />
        <Clouds05Icon />
        <Clouds06Icon />
        <Clouds07Icon />
        <Clouds08Icon />
        <Clouds09Icon />
        <EllipseIcon />
        <YellowCartoon02Icon />
        <PinkCartoonIcon />
      </SectionContainer>
    </main>
  );
}
