// WalletContextProvider.tsx
import { FC, ReactNode, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";

require("@solana/wallet-adapter-react-ui/styles.css");

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  // const network: WalletAdapterNetwork = WalletAdapterNetwork.Mainnet; // Explicitly type network
  const endpoint = useMemo(
    () =>
      "https://solana-mainnet.g.alchemy.com/v2/woMLihqGlAm9QBQQK0rDHmrmSMTNzkZd",
    [],
  );

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
