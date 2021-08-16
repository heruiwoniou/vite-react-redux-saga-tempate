import React from "react";
import { Link } from "@reach/router";

const Base: React.FC<RouterPageProps> = ({ children }) => (
  <div>
    <h1>layout-base</h1>
    <nav>
      <Link to="/home">Home</Link>
      |
      <Link to="/dashboards">Dashboards</Link>
    </nav>
    {children}
  </div>
);

export default Base;
