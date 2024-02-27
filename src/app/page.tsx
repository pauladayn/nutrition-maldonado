import Navbar from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <div className="flex-col min-h-2 bg-scroll bg-auto bg-center hero">
        <Navbar />
      </div>
      <Footer />
    </main>
  );
}
