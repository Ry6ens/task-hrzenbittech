import styled from 'styled-components';

import { device } from 'styles/Media.variables';

import img from 'images/background.png';

import { ReactComponent as YellowCartoon01 } from 'images/icons/YellowCartoon01.svg';
import { ReactComponent as YellowCartoon02 } from 'images/icons/YellowCartoon02.svg';
import { ReactComponent as PinkCartoon } from 'images/icons/PinkCartoon.svg';
import { ReactComponent as Clouds } from 'images/icons/Clouds.svg';
import { ReactComponent as Ellipse } from 'images/icons/Ellipse.svg';

export const SectionContainer = styled.section`
  position: relative;

  padding: 157px 150px;

  overflow: hidden;

  @media ${device.desktop} {
    margin: 0 auto;
    width: 1440px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  color: #3e3e3e;
`;

export const MapImg = styled.div`
  position: absolute;
  top: -52px;
  right: -350px;

  width: 975px;
  height: 975px;

  border-radius: 50%;

  background-image: url(${img});

  z-index: -1;
`;

export const YellowCartoon01Icon = styled(YellowCartoon01)`
  position: absolute;
  top: 20px;
  left: 30px;

  width: 122px;
  height: 122px;
`;

export const YellowCartoon02Icon = styled(YellowCartoon02)`
  position: absolute;
  top: 515px;
  left: 765px;

  width: 127px;
  height: 127px;

  z-index: 2;
`;

export const PinkCartoonIcon = styled(PinkCartoon)`
  position: absolute;
  top: 550px;
  left: 765px;

  width: 299px;
  height: 299px;

  z-index: 1;
`;

export const Clouds01Icon = styled(Clouds)`
  position: absolute;
  top: 185px;
  left: -70px;

  width: 219px;
  height: 165px;

  & path {
    opacity: 0.05};
  }
`;

export const Clouds02Icon = styled(Clouds)`
  position: absolute;
  top: 400px;
  left: -90px;

  width: 219px;
  height: 165px;

  & path {
    opacity: 0.15};
  }
`;

export const Clouds03Icon = styled(Clouds)`
  position: absolute;
  top: 700px;
  left: 100px;

  width: 130px;
  height: 100px;

  & path {
    opacity: 0.1};
  }

  z-index: -1;
`;

export const Clouds04Icon = styled(Clouds)`
  position: absolute;
  top: 655px;
  left: 345px;

  width: 220px;
  height: 165px;

  z-index: -1;

  & path {
    opacity: 0.15};
  }
`;

export const Clouds05Icon = styled(Clouds)`
  position: absolute;
  top: 800px;
  left: 135px;

  width: 290px;
  height: 215px;

  & path {
    opacity: 0.05};
  }
`;

export const Clouds06Icon = styled(Clouds)`
  position: absolute;
  top: 800px;
  right: 535px;

  width: 170px;
  height: 130px;

  & path {
    opacity: 0.09};
  }
`;

export const Clouds07Icon = styled(Clouds)`
  position: absolute;
  top: 130px;
  right: 435px;

  width: 220px;
  height: 165px;

  z-index: -2;

  & path {
    opacity: 0.15};
  }
`;

export const Clouds08Icon = styled(Clouds)`
  position: absolute;
  top: 285px;
  right: 575px;

  width: 172px;
  height: 130px;

  z-index: -2;

  & path {
    opacity: 0.1};
  }
`;

export const Clouds09Icon = styled(Clouds)`
  position: absolute;
  top: 150px;
  left: 620px;

  width: 140px;
  height: 100px;

  & path {
    opacity: 0.05};
  }
`;

export const EllipseIcon = styled(Ellipse)`
  position: absolute;
  top: 20px;
  left: 715px;

  width: 87px;
  height: 87px;
`;
