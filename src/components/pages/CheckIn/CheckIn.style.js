import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CheckInCircleLink = styled(NavLink)`
  border: 1px solid #5ece7b;
  display: block;
  margin: 100px auto 0;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  text-align: center;
  opacity: ${props => (props.currentStep === props.steps ? 0.5 : 1)};
  transition: opacity 600ms linear;
  :hover,
  :focus {
    transform: rotateZ(-360deg);
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 20px;
  }
`;
export const CheckInText = styled.h1`
  margin-top: 220px;
  font-size: 45px;
  color: black;
  font-weight: 700;
`;
