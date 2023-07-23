import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="hero-section">Hero</section>
      <section id="personal-section">Personal Information</section>
      <section id="twitch-section">Twitch</section>
    </main>
  );
}
