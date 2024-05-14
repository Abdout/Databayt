import React from "react";
import Hero from "@/component/home/hero";
import Sponser from "@/component/home/sponsor";
import Contributor from "@/component/home/contributor";
import Service from "@/component/home/service";
import Client from "@/component/home/client";
import Contribute from "@/component/home/contribute";


export default function Home() {
  return (
    <div className="text-sm space-y-4">
      <Hero />
      <Service />
      <Client />
      <Contribute />
      <Contributor />
      <Sponser />
    </div>
  );
}
