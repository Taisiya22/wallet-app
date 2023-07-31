import styled from 'styled-components';

export const InfoWrap = styled.div`
display: flex;
flex-direction: column;
`;

export const ConnectBtn = styled.button`
background-color: #331900;
width: 200px;
height : 50px;
color: white;
cursor: pointer;
border: 1px solid #331900;
border-radius: 10px;
 box-shadow: inset 0 0 0 0 #994c00;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 400px 0 0 0 #994c00;
  }
`