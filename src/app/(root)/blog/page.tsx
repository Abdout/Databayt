
import React from "react";
import { Icon } from '@iconify/react';
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import Side from "@/component/atom/bar/side";
import { SIDENAV_ITEMS } from "@/constant/dash";
import { dashboard } from "@/constant/bar/dashboard";

const Blog = () => {
  return (
    <div>
      <Header />
      <Side item={SIDENAV_ITEMS}/>
      <Side item={dashboard}/>
      <Footer />
    </div>
  );
};

export default Blog;
