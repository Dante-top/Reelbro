import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import styles from "./walletbutton.module.scss";

export const WalletConnectButton = () => {
  const { publicKey, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  return publicKey ? (
    <button onClick={disconnect} className={styles.walletConnect}>
      Disconnect Wallet
    </button>
  ) : (
    <button onClick={() => setVisible(true)} className={styles.walletConnect}>
      Connect Wallet
    </button>
  );
};
