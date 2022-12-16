import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ResetCSS, Flex, Box, useMatchBreakpoints } from 'uikit'
import PageLayout from 'components/PageContainer/PageLayout';
import Toast from 'components/Toast';
import 'dayjs/locale/en';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useEagerConnect from 'hooks/useEagerConnect';

dayjs.extend(relativeTime);

const Test = lazy(() => import('./views/Test'))

function App() {
  useEagerConnect();

  const [active, setActive] = useState(0)
  const { isXxs, isXs, isSm, isMd } = useMatchBreakpoints();
  
  const isMobile = isXxs || isXs || isSm || isMd;

  return (
    <BrowserRouter>
      <ResetCSS />
      <PageLayout isMobile={isMobile} active={active} setActive={setActive}>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Test />} />
          </Routes>
        </Suspense>
      </PageLayout>
      <Toast />
    </BrowserRouter>
  );
}

export default App;
