"use client";
import React from "react";
import * as Style from "./module.styled";
import HomeHeader from "@/components/home-header";

import { Layout, Divider } from "antd";

const HomeContainer = () => {
  return (
    <Layout className={Style.appLayout}>
      <HomeHeader />
      <Divider />
    </Layout>
  );
};

export default HomeContainer;
