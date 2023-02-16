import styled from 'styled-components';

import { device } from 'styles/Media.variables';

import { ReactComponent as Instagram } from 'images/icons/Instagram.svg';
import { ReactComponent as Twitter } from 'images/icons/Twitter.svg';
import { ReactComponent as Facebook } from 'images/icons/Facebook.svg';
import { ReactComponent as Pinterest } from 'images/icons/Pinterest.svg';
import { ReactComponent as PinkCartoon } from 'images/icons/PinkCartoon.svg';
import { ReactComponent as GreenCartoon } from 'images/icons/GreenCartoon.svg';
import { ReactComponent as YellowCartoon01 } from 'images/icons/YellowCartoon01.svg';

export const SectionContainer = styled.section`
  position: relative;

  padding: 0px 150px;

  background: #fafafa;

  border: 1px solid #d8d8d8;

  overflow: hidden;

  @media ${device.desktop} {
    margin: 0 auto;
    width: 1440px;
  }
`;

export const ListIcons = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;

  margin: 80px 0px 100px 180px;
`;

export const ItemIcon = styled.li`
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 13px;
  height: 13px;
`;

export const TwitterIcon = styled(Twitter)`
  width: 13px;
  height: 13px;
`;

export const FacebookIcon = styled(Facebook)`
  width: 13px;
  height: 13px;
`;

export const PinterestIcon = styled(Pinterest)`
  width: 13px;
  height: 13px;
`;

export const GreenCartoonIcon = styled(GreenCartoon)`
  position: absolute;
  top: 0px;
  right: 130px;

  width: 79px;
  height: 97px;
`;

export const PinkCartoonIcon = styled(PinkCartoon)`
  position: absolute;
  top: -35px;
  left: 10px;

  width: 299px;
  height: 299px;
`;

export const YellowCartoon01Icon = styled(YellowCartoon01)`
  position: absolute;
  top: 50px;
  right: -40px;

  width: 122px;
  height: 122px;
`;
