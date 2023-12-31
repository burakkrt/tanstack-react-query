"use client";
import React from "react";
import * as Style from "./module.styled";
import HomeHeader from "@/components/home-header";
import HomeDynamicContent from "@/components/museums";

import { Layout, Divider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const HomeContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout className={Style.appLayout}>
        <HomeHeader />
        <Divider />
        <HomeDynamicContent />
      </Layout>
    </QueryClientProvider>
  );
};

export default HomeContainer;
