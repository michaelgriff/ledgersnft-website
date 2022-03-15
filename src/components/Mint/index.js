import React, { useState } from "react";
import abi from "../../utils/abi.json";
import Web3 from "web3";
import {
  Container,
  Icon,
  StyledButton,
  RowFlex,
  ColumnFlex,
  StyledRoundButton,
  ButtonWrap,
  ElementContainer,
  StyledImage,
} from "./MintComponents";
import ledgers_logo from "../../images/ledgers-text.png";
import hidden from "../../images/hidden.gif";
import goldthing from "../../images/gold-ledge.png";

const Mint = () => {
  const [account, setAccount] = useState();
  const [amount, setAmount] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState("");

  window.ethereum.on("accountsChanged", (accounts) => {
    window.location.reload();
  });

  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  const connect = async () => {
    if (typeof window.ethereum == undefined) {
      setErrMsg("Install Metamask");
      return;
    }

    const networkId = await window.ethereum.request({
      method: "net_version",
    });

    if (networkId != 4) {
      setErrMsg("Change to Mainnet");
      return;
    }

    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (!account) {
      setErrMsg("Something went wrong, try again");
      return;
    }

    setAccount(account[0]);
  };

  const decrease = () => {
    if (amount != 1) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (amount != 3) {
      setAmount(amount + 1);
    }
  };

  const claim = async (amount) => {
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(
      abi,
      "0x7D2F7De261322014b656831FE5bA9A53067110a3"
    );
    setClaimingNft(true);

    contract.methods
      .mint(amount)
      .estimateGas({
        from: account,
      })
      .then((gasAmount) => {
        contract.methods
          .mint(amount)
          .send({
            from: account,
            to: "0x7D2F7De261322014b656831FE5bA9A53067110a3",
            value: amount * 60000000000000000,
            gasLimit: gasAmount + 10000,
          })
          .once("error", () => {
            setClaimingNft(false);
            setFeedback("Oops, try again later");
          })
          .then(() => {
            setClaimingNft(false);
            setFeedback("Welcome to The Ledge");
          });
      });
  };

  return (
    <>
      <Container>
        <div class="float">
          <Icon to="/">
            <img
              class="centered"
              src={ledgers_logo}
              alt={"logo"}
              height={50}
              width={250}
            />
          </Icon>
        </div>
        <RowFlex>
          <ElementContainer>
            <img id="hidden" alt={"hidden"} src={hidden} />
          </ElementContainer>

          <ColumnFlex>
            <StyledImage alt={"goldthing"} src={goldthing} />
            <p>1 Ledgers NFT Costs 0.06 ETH</p>
            {account ? (
              <>
                <ButtonWrap>
                  <StyledRoundButton className="padded" onClick={decrease}>
                    -
                  </StyledRoundButton>
                  <p className="padded">{amount}</p>
                  <StyledRoundButton className="padded" onClick={increase}>
                    +
                  </StyledRoundButton>
                </ButtonWrap>
                <StyledButton
                  disabled={claimingNft ? 1 : 0}
                  onClick={() => claim(amount)}
                >
                  {claimingNft ? "BUSY" : "MINT"}
                </StyledButton>
                <p>{feedback}</p>
              </>
            ) : (
              <>
                <StyledButton onClick={connect}>CONNECT</StyledButton>
                <p>{errMsg}</p>
              </>
            )}
          </ColumnFlex>
        </RowFlex>
      </Container>
    </>
  );
};

export default Mint;
