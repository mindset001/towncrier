import Image from "next/image";
import Footer from "./Components/Footer";
import Landing from "./Landing/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Landing/>
     <Footer/>
    </main>
  );
}
