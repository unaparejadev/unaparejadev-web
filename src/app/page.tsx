import PersonalInfo from "@/components/PersonalInfo";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PersonalInfo />
      <section id="twitch-section">Twitch</section>
    </main>
  );
};

export default Home;
