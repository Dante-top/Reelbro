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
  "G7NH5m3gcLBHEExa7wu7fU3dfFtcGB38sD2SdB7wEYXm",
);

export const DonateForm = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!publicKey) return;

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
      setStatus(`✅ Transaction sent! Signature: ${signature}`);
    } catch (err) {
      setStatus("❌ Transaction failed: " + (err as Error).message);
    }
  };

  if (!publicKey) {
    return (
      <p className="mt-4 text-gray-600">
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
            placeholder="e.g. 0.5"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border px-3 py-2 rounded-md w-full mb-3"
          />
          <button type="submit" className={styles.donate_button}>
            Donate
          </button>
        </div>
      </form>
      {status && <p className="text-sm">{status}</p>}
    </div>
  );
};
