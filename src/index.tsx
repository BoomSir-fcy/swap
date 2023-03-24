import React, { ReactNode, useMemo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Providers from "./Providers";
import ApplicationUpdater from "./state/application/updater";
import ListsUpdater from "./state/lists/updater";
import MulticallUpdater from "./state/multicall/updater";
import TransactionUpdater from "./state/transactions/updater";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { BLOCKED_ADDRESSES } from "config/constants";

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
}
function Blocklist({ children }: { children: ReactNode }) {
  const { account } = useActiveWeb3React();
  const blocked: boolean = useMemo(
    () => Boolean(account && BLOCKED_ADDRESSES.indexOf(account) !== -1),
    [account]
  );
  if (blocked) {
    return <div>Blocked address</div>;
  }
  return <>{children}</>;
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Updaters />
      <Blocklist>
        <App />
      </Blocklist>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
