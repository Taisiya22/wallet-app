import { ethers } from "ethers";

import { FormPay } from "./Form.styled";
import { Wrapper } from "./Form.styled";
import { FieldInput } from "./Form.styled";
import { PayBtn } from "./Form.styled";
import { Title } from "./Form.styled";

const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};
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
