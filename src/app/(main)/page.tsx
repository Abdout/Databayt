import Header from "@/components/Home/Header";
import Read from "@/components/Home/ReadMore";
import Hero from "@/components/Home/Hero";
import Team from "@/components/Home/TeamCard";
import Mobile from "@/components/Home/Mobile";
import Footer from "@/components/Home/Footer";
import CentiInupt from "@/components/Atom/Input/Centi";
import CentiText from "@/components/Atom/Text/Centi";
import Contributor from "@/components/Home/ContributorCard";
import Sponser from "@/components/Home/SponserCard";
import MicroText from "@/components/Atom/Text/Micro";
import MicroIcon from "@/components/Atom/Icon/Micro";

export default function Home() {
  
  return (
    <div className="space-y-4">
      <Header />
      <Hero />
      <Read />
      <div className="text-center pt-6">
        <CentiText text="Meet The Team" />
      </div>
      <Team />
      <div className="text-center pt-6">
        <CentiText text="Contributor" />
      </div>
      <Contributor />
      <div className="text-center pt-6">
        <CentiText text="Sponser" />
      </div>
      <Sponser />
      <div className="text-center pt-6">
        <CentiText text="Donate" />
        <MicroText text="Donation is appreciated at"/>
      </div>
      <div className="flex gap-2 items-center justify-center">
      <MicroIcon src="/coffee.png" alt="" path=""/>
      <CentiText text="Buy me coffee"/>

      </div>
      
      <Footer />
    
    </div>
  );
}
