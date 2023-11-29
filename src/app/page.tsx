import MicroIcon from "@/components/atom/icon/micro";
// import Contributor from "@/components/home/contributor";
import Hero from "@/components/home/hero";
import ReadMore from "@/components/home/readmore";
import Sponser from "@/components/home/sponser";
import Team from "@/components/home/team";
import Footer from "@/components/layout/footer";
import React from "react";




export default function Home() {
  return (
    <div className="text-sm space-y-4">
      <Hero />
      <ReadMore />
      <div className="text-center pt-6">
        <h1>Meet The Team</h1>
      </div>
      <Team />
      <div className="text-center pt-6">
        <h1>Contributor</h1>
      </div>
      {/* <Contributor /> */}
      <div className="text-center pt-6">
        <h1>Sponser</h1>
      </div>
      <Sponser />
      <div className="text-center pt-6">
        <h1>Donate</h1>
        <h1>Donation is appreciated at</h1>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <MicroIcon src="/coffee.png" alt="" path="" />
        <h3>Buy me coffe</h3>
        <Footer />
      </div>
    </div>
  );
}
