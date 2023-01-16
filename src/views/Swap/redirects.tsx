import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

interface RedirectProps {
  to: string | any;
}

const Redirect: React.FC<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
};

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly() {
  const location = useLocation();

  return <Redirect to={{ ...location, pathname: "/swap" }} />;
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSwap() {
  const params = useParams();

  const { outputCurrency } = params;
  const location = useLocation();
  const { search } = location;
  return (
    <Redirect
      to={{
        ...location,
        pathname: "/swap",
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=${outputCurrency}`
            : `?outputCurrency=${outputCurrency}`,
      }}
    />
  );
}
