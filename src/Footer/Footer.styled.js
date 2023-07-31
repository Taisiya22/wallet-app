import styled from 'styled-components';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export const FooterWrapper = styled.footer`
  display: flex;
//   flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  height: 100px;
  gap: 20px;
//   width: 100%;
  color: #fff;
  background-color: #cc6600;
  backdrop-filter: grayscale(100%);
//   @media screen and (min-width: 320px) {
//     flex-direction: row;
//   }
`;
export const GitIcon = styled(AiOutlineGithub)`
width: 40px;
height: 40px;
color: #331900;
transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
cursor: pointer;
  &:hover {
   color: #fff;
  }

 `

export const LinkedinIcon = styled(AiFillLinkedin)`
width: 40px;
height: 40px;
color: #331900;
transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
 cursor: pointer;
  &:hover {
   color: #fff;
  }
 `