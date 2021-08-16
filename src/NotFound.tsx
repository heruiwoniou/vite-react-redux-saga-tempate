import { Redirect } from "@reach/router";
import React from "react";

const NotFound: React.FC<RouterPageProps> = () => <div>Not Found Page</div>;
export const NotFoundRedirect: React.FC<{ from: string, default: boolean }> = ({ from }) => <Redirect from={from} to="/404" noThrow />;

export default NotFound;
