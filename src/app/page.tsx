import PersonalInfo from "@/components/PersonalInfo";
import Hero from "@/components/Hero";
import Twitch from "@/components/Twitch";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PersonalInfo />
      <Twitch />
    </main>
  );
};

export default Home;
