import React, { lazy, Suspense, useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { ResetCSS, Flex, Box, useMatchBreakpoints } from "uikit";
import PageLayout from "components/PageContainer/PageLayout";
import Toast from "components/Toast";
import "dayjs/locale/en";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import useEagerConnect from "hooks/useEagerConnect";
import "antd/dist/reset.css";
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
} from "views/AddLiquidity/redirects";
import { RedirectToSwap } from "views/Swap/redirects";
import { usePollBlockNumber } from "state/block/hooks";
import { useFetchAdditionalRates } from "state/farms/hook";
import RedirectOldRemoveLiquidityPathStructure from "views/RemoveLiquidity/redirects";

dayjs.extend(relativeTime);

const Test = lazy(() => import("./views/Test"));
const AddLiquidity = lazy(() => import("./views/AddLiquidity"));
const Swap = lazy(() => import("./views/Swap"));
const Liquidity = lazy(() => import("./views/Liquidity"));
const RemoveLiquidity = lazy(() => import("./views/RemoveLiquidity"));
const PoolFinder = lazy(() => import('./views/PoolFinder'))

function App() {
  usePollBlockNumber();
  useEagerConnect(); // 自动连接有bug
  // usePollCoreFarmData()
  useFetchAdditionalRates();
  const [active, setActive] = useState(0);
  const { isXxs, isXs, isSm, isMd } = useMatchBreakpoints();

  const isMobile = isXxs || isXs || isSm || isMd;

  return (
    <HashRouter>
      <ResetCSS />
      <PageLayout isMobile={isMobile} active={active} setActive={setActive}>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/find" element={<PoolFinder />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/swap/:outputCurrency" element={<RedirectToSwap />} />

            <Route path="/add" element={<AddLiquidity />} />
            <Route
              path="/add/:currencyIdA"
              element={<RedirectOldAddLiquidityPathStructure />}
            />
            <Route
              path="/add/:currencyIdA/:currencyIdB"
              element={<RedirectDuplicateTokenIds />}
            />
            <Route
              path="/remove/:tokens"
              element={<RedirectOldRemoveLiquidityPathStructure />}
            />
            <Route
              path="/remove/:currencyIdA/:currencyIdB"
              element={<RemoveLiquidity />}
            />
            <Route path="/liquidity" element={<Liquidity />} />
          </Routes>
        </Suspense>
      </PageLayout>
      <Toast />
    </HashRouter>
  );
}

export default App;
