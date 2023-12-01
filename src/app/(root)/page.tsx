import React from "react";
import Hero from "@/components/home/hero";
import ReadMore from "@/components/home/readmore";
import Sponser from "@/components/home/sponser";
import Team from "@/components/home/team";
import Footer from "@/components/layout/footer";
import Contributor from "@/components/home/contributor";
import MdIcon from "@/components/atom/icon/md";

export default function Home() {
  return (
    <div className="text-sm space-y-4">
      <Hero />
      <ReadMore />
      <div className="text-center pt-6">
        <h2>Meet The Team</h2>
      </div>
      <Team />
      <div className="text-center pt-6">
        <h2>Contributor</h2>
      </div>
      <Contributor />
      <div className="text-center pt-6">
        <h2>Sponser</h2>
      </div>
      <Sponser />
      <div className="text-center pt-6">
        <h2>Donate</h2>
        <p>Donation is appreciated at</p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <MdIcon src="/coffee.png" alt="" path="" />
        <h2>Buy me coffe</h2>
        <Footer />
      </div>
    </div>
    
  );
}
