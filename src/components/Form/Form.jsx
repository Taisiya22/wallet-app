import { FormPay } from "./Form.styled";
import { Wrapper } from "./Form.styled";
import { FieldInput } from "./Form.styled";
import { PayBtn } from "./Form.styled";
import { Title } from "./Form.styled";

export const Form = () => {
    return (
      <Wrapper>
        <Title>Send ETH payment</Title>
        <FormPay>
          <FieldInput placeholder="0x2D0C9db70C7CAAdb8C48FFc4850B8eA82c48FF11" />
          <FieldInput placeholder="amount" />
          <PayBtn type="submit">Pay now</PayBtn>
        </FormPay>
      </Wrapper>
    );
};
