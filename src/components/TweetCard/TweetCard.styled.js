import styled from 'styled-components';
import { ReactComponent as Logo } from 'images/Logo.svg';
import { ReactComponent as Phrases } from 'images/Phrases.svg';
import Boy from 'images/Hansel.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  position: relative;
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
  margin-left: auto;
  margin-right: auto;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 178px;
  width: 380px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::before,
  ::after {
    content: '';
    width: 150px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const Avatar = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border-radius: 85.9232px;
  border: 8px solid #ebd8ff;
  background: url(${Boy});
  background-repeat: no-repeat;
  /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 284px;
`;

export const Statistics = styled.p`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 16px;
  color: #ebd8ff;
  text-transform: uppercase;
`;
