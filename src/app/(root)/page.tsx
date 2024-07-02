import RecentArticles from "@/components/root/article/recent";
import Contact from "@/components/root/contact/ui";
import Event from "@/components/root/event/event";
import Hero from "@/components/root/hero/ui";
import Paper from "@/components/root/paper/ui";
import Media from "@/components/root/video/ui";
import "@theme-toggles/react/css/DarkSide.css";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-10">
        <Paper />
        <Media />
        <RecentArticles />
        <Event />
        <Contact />
      </div>
    </>
  );
}
