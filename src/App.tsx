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

dayjs.extend(relativeTime);

const Test = lazy(() => import("./views/Test"));
const AddLiquidity = lazy(() => import("./views/AddLiquidity"));

function App() {
  useEagerConnect();

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
            <Route path="/add" element={<AddLiquidity />} />
            <Route
              path="/add/:currencyIdA"
              element={<RedirectOldAddLiquidityPathStructure />}
            />
            <Route
              path="/add/:currencyIdA/:currencyIdB"
              element={<RedirectDuplicateTokenIds />}
            />
          </Routes>
        </Suspense>
      </PageLayout>
      <Toast />
    </HashRouter>
  );
}

export default App;
