import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Hero from "./Home/sections/Hero";
import Departure from "./Home/sections/Departure";
import Programs from "./Home/sections/Programs";
import Openings from "./Home/sections/Openings";
import Itinerary from "./Home/sections/Itinerary";
import Arrival from "./Home/sections/Arrival";
import Voices from "./Home/sections/Voices";
import Board from "./Home/sections/Board";
import WhatsAppWidget from "./components/WhatsappWidget";

/* The homepage is one flight, Lagos to Beijing, and the sections are laid
   along it: departure at the top, arrival two thirds down, the seat at the
   end. The globe behind the page (see components/three/Flight) is turned by
   the same scroll position that brings each of these into view. */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Departure />
        <Programs />
        <Openings />
        <Itinerary />
        <Arrival />
        <Voices />
        <Board />
        <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I will like to Enquire about your Services!" />
      </main>
      <Footer />
    </div>
  );
}
