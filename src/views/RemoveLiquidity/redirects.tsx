import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "views/AddLiquidity/redirects";

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

function RedirectOldRemoveLiquidityPathStructure() {
  const params = useParams();
  const { tokens } = params;

  if (!OLD_PATH_STRUCTURE.test(tokens)) {
    return <Redirect to="/liquidity" />;
  }
  const [currency0, currency1] = tokens.split("-");

  return <Redirect to={`/remove/${currency0}/${currency1}`} />;
}
export default RedirectOldRemoveLiquidityPathStructure;
