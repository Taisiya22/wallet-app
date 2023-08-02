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
  transition: ease-out 0.4s;

  &:hover {
    opacity:0.8;
}
`