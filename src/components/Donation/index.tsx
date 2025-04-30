import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import { useEffect, useState } from "react";
import styles from "./donation.module.scss";
import FundProgressBar from "../FundsProgress";

const DEPOSIT_WALLET = new PublicKey(
  process.env.REACT_APP_DONATE_ADDRESS || "",
);

export const DonateForm = () => {
  const { connection } = useConnection();
  const tokenPrice = 0.0016; // Example token price in USD
  const { publicKey, sendTransaction } = useWallet();

  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [reelbroTokens, setReelbroTokens] = useState(0);
  const [totalToken, setTotalToken] = useState(0);

  useEffect(() => {
    if (!amount) {
      setReelbroTokens(0);
      return;
    }

    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
    )
      .then((res) => res.json())
      .then((data) => {
        const price = data.solana.usd;
        console.log("SOL price: ", price);
        calculateTokens(price, amount);
      })
      .catch((err) => console.error("Failed to fetch SOL price:", err));
  }, [amount]);

  const getTotalTokenAmount = async () => {
    console.log("publicKey: ", publicKey?.toBase58());
    try {
      const response = await fetch(
        `/api/donations/getTokenAmount/${publicKey?.toBase58()}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch total.");
      }

      setTotalToken(data.total_token_amount);
    } catch (err: any) {
      console.error(err);
      setStatus(err.message || "Failed to fetch total.");
    }
  };

  useEffect(() => {
    getTotalTokenAmount();
    console.log("status: ", status);
  }, [publicKey]);

  const calculateTokens = (price: number, amount: any) => {
    const usdValue = price * amount;
    const tokens = (usdValue / tokenPrice).toFixed(2);
    setReelbroTokens(Number(tokens));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!publicKey || !amount) {
      setStatus("Please connect your wallet and enter a valid amount.");
      return;
    }
    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: DEPOSIT_WALLET,
        lamports,
      }),
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      // ⬇ Send donation record to backend
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wallet: publicKey.toBase58(),
          sol_amount: parseFloat(amount),
          token_amount: reelbroTokens,
          signature,
        }),
      });
      setStatus(
        `✅ Transaction sent! Your tokens will be sent when we aidrop.`,
      );
      console.log("response: ", response);
      setAmount(""); // Reset input
      await getTotalTokenAmount(); // Refresh total tokens after transaction
    } catch (err) {
      setStatus("❌ Transaction failed: " + (err as Error).message);
    }
  };

  if (!publicKey) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className={styles.donate_status}>
          Please connect your wallet to make a purchase.
        </p>
        <p>
          Price : <span className={styles.donate_token_amount}>$0.0016</span>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.donate_content}>
      <FundProgressBar />
      <form className={styles.donate_form} onSubmit={handleSubmit}>
        <p>Enter amount in SOL:</p>
        <div className="">
          <input
            type="number"
            step="0.01"
            placeholder="E.G: 0.05"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border px-3 py-2 rounded-md w-full"
          />
          <button type="submit" className={styles.donate_button}>
            Buy
          </button>
        </div>
        <p>
          Your Purchased REELBRO :{" "}
          <span className={styles.donate_token_amount}>{totalToken}</span>
        </p>
        <p>
          $REELBRO Receive :{" "}
          <span className={styles.donate_token_amount}>{reelbroTokens}</span>
        </p>
        <p>
          Price : <span className={styles.donate_token_amount}>$0.0016</span>
        </p>
      </form>
      {status && <p className={styles.donate_status}>{status} </p>}
    </div>
  );
};
