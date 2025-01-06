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
      <main className="flex-1 flex flex-col mt-20 ">
        <StudyInChina />
        <Programs />
        <ChooseProgram />
        <ApplySection />
        <PopularCities />
        <Testimonials />
        <JoinCommunity />
        {/* Add WhatsApp Widget */}
       <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I will like to Enquire about your Services!" />
      </main>

     {/* Footer with adjustable height */}
     <Footer height="300px" />
    </div>
  );
}


