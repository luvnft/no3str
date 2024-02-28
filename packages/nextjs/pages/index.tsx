import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 w-full sm:w-4/5 md:w-3/4 lg:w-3/6 mx-auto ">
      <MetaHeader />
      <div className="w-full">
        {/* <Image className="mb-5 mx-auto" src="/assets/nostr3.png" width={400} height={400} alt="nostr3" /> */}
        <div className="m-5 mx-auto w-5/6">
          <h1 className="text-8xl text-center mb-5">
            <strong>TIP.</strong>
          </h1>
          <p className="text-xl mb-8 text-center">
             Create a Nostr account using your crypto address and start sending and receiving tips instantly.
          </p>
          <div className="my-10" />
          <h2 className="text-4xl text-left mb-3 font-semibold ">Perks</h2>
          <ul className="pst-disc pst-inside mb-5 text-md">
            <p>Easy and Secure - No complicated setup</p>
            <p>Direct - Tips are sent directly to your wallet </p>
            <p>Support - Spread love online or IRL with a Tip  </p>
            <p>Claim - Claim a Tip securely with a private key</p>
          </ul>
          <div className="my-10" />
          <h2 className="text-4xl text-left mb-3 font-bold">How to Send a Tip</h2>
          <ul className="pst-disc pst-inside mb-5">
            <p>
              <strong>Visit the Tipping URL:</strong> Navigate to the URL provided by the content creator or user. For
              example,{" "}
              <a href="https://tip.luvnft.com/tip/npub1abcd1234/note12345abcd" className="text-blue-600 break-all">
                 tip.luvnft.com/tip/npub1abcd1234/note12345abcd
              </a>
              .
            </p>
            <p>
              <strong>Connect Your Wallet:</strong> On the tipping page, connect your crypto wallet.
            </p>
            <p>
              <strong>Enter Tip Amount:</strong> Choose the amount you wish to tip.
            </p>
            <p>
              <strong>Confirm the Transaction:</strong> Approve the transaction to send your tip directly to the
              recipient’s crypto address.
            </p>
            <p>
              <strong>Case 1:</strong> If the recipient&apos;s pubkey doesn&apos;t have an crypto address stored on Tip.,
              you can send them a private message with a unique password to do the claim of your tip.
            </p>
            <p>
              <strong>Case 2:</strong> If the recipient’s pubkey have an crypto address stored on Tip., tips are directly
              sent to the wallet linked to the receiver pubkey.
            </p>
            <p>
              <strong>Recipient Claims Tip:</strong> The recipient can later claim the tip from the smart contract by
              entering this password.
            </p>
          </ul>
          <div className="my-10" />
          <h2 className="text-4xl text-left mb-3 font-bold">How to Claim a Tip</h2>
          <ul className="pst-disc pst-inside mb-5">
            <p>
              <strong>Access Claim Page:</strong> Visit{" "}
              <a href="https://tip.luvnft.com/claim" className="text-blue-600">
                tip.luvnft.com/claim
              </a>{" "}
              and connect your crypto wallet.
            </p>
            <p>
              <strong>Enter the Unique Key:</strong> If you received a private message, input the provided key in the
              designated field.
            </p>
            <p>
              <strong>Confirm the Transaction:</strong> Approve the transaction in your wallet to receive the tip.
            </p>
          </ul>
          <p className="text-center my-4">
            Learn more about NIP-111:{" "}
            <a href="https://github.com/nostr-protocol/nips/pull/268" className="text-blue-600">
              NIP-111 on GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
