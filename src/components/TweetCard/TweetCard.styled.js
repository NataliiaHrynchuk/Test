import styled from 'styled-components';
import { ReactComponent as Logo } from 'images/Logo.svg';
import { ReactComponent as Phrases } from 'images/Phrases.svg';
import Boy from 'images/Boy.png';

export const Container = styled.div`
  width: 380px;
  height: 460px;
  position: absolute;
  left: 435px;
  top: 168px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border: 1px solid #000000;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoIcon = styled(Logo)`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const PhrasesPicture = styled(Phrases)`
  position: absolute;
  top: 28px;
  left: 36px;
  /* width: 308px;
  height: 168 px; */
  margin-left: auto;
  margin-right: auto;
`;
export const Rectangle = styled.div`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Avatar = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  border-radius: 85.9232px;
  background: url(${Boy});
  background-repeat: no-repeat;
  background-size: contain;
`;
