import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TicketPage from "./components/ticketPage";
import Logo from "./components/logo";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  return (
    <>
      <main className="min-h-screen px-5 pt-8 pb-24 sm:pt-10 md:pt-12">
        <section>
          <Logo />
        </section>

        {/* FORM */}
        {step === 1 ? (
          <Form setStep={setStep} setData={setData} />
        ) : (
          <TicketPage data={data} />
        )}
      </main>
    </>
  );
}

export default App;
