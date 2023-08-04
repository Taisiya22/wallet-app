import { ethers } from "ethers";
import { useState } from "react";
import { FormPay } from "./Form.styled";
import { Wrapper } from "./Form.styled";
import { FieldInput } from "./Form.styled";
import { PayBtn } from "./Form.styled";
import { Title } from "./Form.styled";
// import { ErrorMessage } from "../ErrorMessage";
// import { TxList } from "../TxList";
import { toast } from "react-hot-toast";
import { validateAddress, validateTransfer } from "../../utils/validator";

import { createContext, useContext } from "react";

export const MetaMaskContext = createContext({});

export const useMetaMask = () => {
  const context = useContext(MetaMaskContext);
  if (context === undefined) {
    throw new Error(
      'useMetaMask must be used within a "MetaMaskContextProvider"'
    );
  }
  return context;
};
// const startPayment = async ({ setError, setTxs, ether, addr }) => {
//   try {
//     if (!window.ethereum)
//       throw new Error("No crypto wallet found. Please install it.");

//     await window.ethereum.send("eth_requestAccounts");
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     ethers.utils.getAddress(addr);
//     const tx = await signer.sendTransaction({
//       to: addr,
//       value: ethers.utils.parseEther(ether),
//     });
//     console.log({ ether, addr });
//     console.log("tx", tx);
//     setTxs([tx]);
//   } catch (err) {
//     setError(err.message);
//   }
// };
export const Form = () => {
       const [address, setAddress] = useState("");
       const [amount, setAmount] = useState("");
    //    const [loading, setLoading] = useState(false);
       const { wallet } = useMetaMask();

       const handleInputChange = (event) => {
         const { name, value } = event.target;
         if (name === "address") {
           setAddress(value);
         } else if (name === "amount") {
           setAmount(value);
         }
       };

       const handleSubmit = async (event) => {
         event.preventDefault();
         if (!validateAddress(address)) return;
         if (!validateTransfer(amount)) return;
         const value = ethers.utils.parseEther(amount)._hex;
        //  setLoading(true);

         try {
           await window.ethereum.request({
             method: "eth_sendTransaction",
             params: [
               {
                 from: wallet.accounts[0],
                 to: address,
                 value: value,
               },
             ],
           });

           toast.success("Transaction successfully completed!");
         } catch (error) {
           toast.error(
             "Oops...something went wrong while sending the transaction. Please try again."
           );
         } finally {
        //    setLoading(false);
         }
       };
  return (
    <Wrapper>
      <Title>Send ETH payment</Title>
      <FormPay onSubmit={handleSubmit}>
        <FieldInput
          type="text"
          name="address"
          value={address}
          onChange={handleInputChange}
          placeholder="0x2D0C9db70C7CAAdb8C48FFc4850B8eA82c48FF11"
        />
        <FieldInput
          type="text"
          name="amount"
          value={amount}
          onChange={handleInputChange}
          placeholder="amount"
        />
        <PayBtn type="submit">Pay now</PayBtn>
        {/* <ErrorMessage message={error} />
        <TxList txs={txs} /> */}
      </FormPay>
    </Wrapper>
  );
};
