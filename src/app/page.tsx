import PersonalInfo from "@/components/PersonalInfo";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id="hero-section">Hero</section>
      <PersonalInfo />
      <section id="twitch-section">Twitch</section>
    </main>
  );
};

export default Home;
