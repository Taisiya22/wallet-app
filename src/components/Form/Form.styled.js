import styled from 'styled-components';

export const FormPay = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 18px;
 `

export const Wrapper = styled.div`
margin: auto;
border: 4px solid #331900;
border-radius: 10px;
// background-color: #aba295;
padding: 30px;
`

export const FieldInput = styled.input`
width: 600px;
height: 50px;
padding: 10px 15px;
border-radius: 10px;
border: 2px solid #331900;
`

export const PayBtn = styled.button`
width: 400px;
height: 50px;
background-color: #331900;
color: #FFF;
border-radius: 10px;
border: transparent;
font-size: 15px;
cursor: pointer;
transition: ease-out 0.4s;
&:hover {
    opacity:0.8;
}
`

export const Title = styled.h2`
font-size: 25px;
font-weight: 600;
text-align: center;
margin-bottom: 20px;
`
