import React, { FC, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AddLiquidity from './index'

interface RedirectProps {
  to: string;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
};

export function RedirectToAddLiquidity() {
  return <Redirect to="/add/" />
}

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40}|BNB)-(0x[a-fA-F0-9]{40}|BNB)$/
export function RedirectOldAddLiquidityPathStructure() {
  const params = useParams();
  const currencyIdA = params.currencyIdA;
  const match = currencyIdA.match(OLD_PATH_STRUCTURE)
  if (match?.length) {
    return <Redirect to={`/add/${match[1]}/${match[2]}`} />
  }

  return <AddLiquidity  />
}

export function RedirectDuplicateTokenIds() {
  const params = useParams();
  const currencyIdA = params.currencyIdA;
  const currencyIdB = params.currencyIdB;
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/add/${currencyIdA}`} />
  }
  return <AddLiquidity  />
}
