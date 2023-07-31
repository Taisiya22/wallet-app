import { useState } from "react";
import { ethers } from "ethers";
import { InfoWrap } from "./ConnectButton.styled";
import { ConnectBtn } from "./ConnectButton.styled";

export const ConnectButton = () => {
  const [userAccount, setUserAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const onConnect = () => {
    if (window.ethereum) {
      //  check if user has account

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => {
          setUserAccount(account[0]);
          getBalance(account[0]);
        });
      window.ethereum.on("changeAccount", onConnect);
      window.ethereum.on("chainChanged", chainChangedHandler);
    } else {
      alert("You haven't acoount on MetaMask yet");
    }
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };
  const getBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setBalance(ethers.utils.formatEther(balance));
        console.log(balance);
      });
  };
  return (
    <>
      {userAccount ? (
        <InfoWrap>
          <span>Your account: {userAccount}</span>
          <span>Your balance : {balance}</span>
        </InfoWrap>
      ) : (
        <>
          <ConnectBtn onClick={onConnect}>Connect to wallet</ConnectBtn>
        </>
      )}
    </>
  );
};
