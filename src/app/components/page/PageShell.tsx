import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import WhatsAppWidget from "../WhatsappWidget";

/* Every inner page: the same header, the same footer, the same WhatsApp
   button, so a page is only ever its own content. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <WhatsAppWidget phoneNumber="+18683181079" message="Hi, I would like to enquire about your services!" />
      <Footer />
    </div>
  );
}
