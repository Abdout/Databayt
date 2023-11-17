import Header from "@/components/Header/Header";
import Read from "@/components/Text/Read";
import Hero from "@/components/Hero/Home";
import Team from "@/components/Card/Team";
import Mobile from "@/components/Nav/Mobile";
import Footer from "@/components/Nav/Footer";
import CentiInupt from "@/components/Input/Centi";
import CentiText from "@/components/Text/Centi";
import Contributor from "@/components/Card/Contributor";
import Sponser from "@/components/Card/Sponser";
import MicroText from "@/components/Text/Micro";
import MicroIcon from "@/components/Icon/Micro";

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
