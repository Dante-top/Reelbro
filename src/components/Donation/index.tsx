import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";
import { useState } from "react";
import styles from "./donation.module.scss";

const DEPOSIT_WALLET = new PublicKey(
  process.env.REACT_APP_DONATE_ADDRESS || "",
);

export const DonateForm = () => {
  const { connection } = useConnection();
  const tokenPrice = 0.0016; // Example token price in USD
  const { publicKey, sendTransaction } = useWallet();

  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!publicKey) return;

    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    console.log("lamports: ", lamports);
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: DEPOSIT_WALLET,
        lamports,
      }),
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      setStatus(`✅ Transaction sent! Signature: ${signature}`);
      // ⬇ Send donation record to backend
      // const response = await fetch(
      //   process.env.REACT_APP_API_URL + "donations",
      //   {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({
      //       wallet: publicKey.toBase58(),
      //       amount: parseFloat(amount),
      //       signature,
      //     }),
      //   },
      // );
      // console.log("response: ", response);
    } catch (err) {
      setStatus("❌ Transaction failed: " + (err as Error).message);
    }
  };

  if (!publicKey) {
    return (
      <p className={styles.donate_status}>
        Please connect your wallet to make a donation.
      </p>
    );
  }

  return (
    <div className={styles.donate_content}>
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
          $REELBRO Receive :{" "}
          <span className={styles.donate_token_amount}>
            {(parseFloat(amount) / tokenPrice).toFixed(2)}
          </span>
        </p>
        <p>
          Price : <span className={styles.donate_token_amount}>$0.0016</span>
        </p>
      </form>
      {status && <p className={styles.donate_status}>{status} </p>}
    </div>
  );
};
