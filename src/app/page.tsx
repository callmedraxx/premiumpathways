import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Programs from "./Home/Sections/Programs/programs";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ApplySection from "./Home/Sections/Apply/apply";
import ChooseProgram from "./Home/Sections/ChooseProgram/choose";
import StudyInChina from "./Home/Sections/First/Study";
import PopularCities from "./Home/Sections/Popular/popular";
import Testimonials from "./Home/Sections/Testimonials/Testimonial";
import JoinCommunity from "./Home/Sections/Join/Join";
import WhatsAppWidget from "./components/WhatsappWidget";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8 p-8 sm:p-20">
        <StudyInChina />
        {/*<Programs /> */}
        <ChooseProgram />
        <ApplySection />
        <PopularCities />
        <Testimonials />
        <JoinCommunity />
        {/* Add WhatsApp Widget */}
       <WhatsAppWidget phoneNumber="9876543210" message="Hi, I need help!" />
      </main>

     {/* Footer with adjustable height */}
     <Footer height="300px" />
    </div>
  );
}


