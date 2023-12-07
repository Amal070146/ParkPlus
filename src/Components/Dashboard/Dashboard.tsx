import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { HeaderNav } from "../Navbar/HeaderNav";

type Props = {};

export const Dashboard = (props: Props) => {
  return (
    <div>
      <HeaderNav title="Dashboard"/>
      <Navbar />
    </div>
  );
};
