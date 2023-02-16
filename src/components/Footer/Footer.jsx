import {
  SectionContainer,
  ListIcons,
  ItemIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  PinkCartoonIcon,
  GreenCartoonIcon,
  YellowCartoon01Icon,
} from './Footer.styled';

export default function Footer() {
  return (
    <footer>
      <SectionContainer>
        <ListIcons>
          <ItemIcon>
            <InstagramIcon />
          </ItemIcon>
          <ItemIcon>
            <TwitterIcon />
          </ItemIcon>
          <ItemIcon>
            <FacebookIcon />
          </ItemIcon>
          <ItemIcon>
            <PinterestIcon />
          </ItemIcon>
        </ListIcons>
        <PinkCartoonIcon />
        <GreenCartoonIcon />
        <YellowCartoon01Icon />
      </SectionContainer>
    </footer>
  );
}
