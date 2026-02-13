import { useEffect, useState } from "react";
import Logo from "./logo";

export default function TicketPage({ data }) {
  const { image, fullName, email, username } = data;
  const [ticketId, setTicketId] = useState(10000);
  const year = new Date().getFullYear();

  function generateTicketId() {
    return (Math.random() * (20000 - 10000) + 10000).toFixed(0);
  }

  useEffect(() => {
    setTicketId(generateTicketId);
  }, []);

  return (
    <>
      <section className="text-center">
        <h1 className="mx-auto mt-8 max-w-2xl text-[26px] leading-tight text-primary font-bold xs:text-3xl sm:text-4xl md:mt-10 md:text-5xl">
          Congrats,{" "}
          <span className="capitalize text-gradient">{fullName}!</span> Your
          ticket is ready.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-tight text-primary-300 sm:text-xl">
          We've emailed your ticket to{" "}
          <span className="text-secondary-500/80">{email}</span> and will send
          updates in the run up to the event.
        </p>
      </section>

      <section className="mx-auto mt-16 relative max-w-96 sm:max-w-md md:max-w-lg">
        <img
          src="/images/pattern-ticket.svg"
          alt="ticket-pattern"
          className="w-full h-full"
        />
        <div className="absolute inset-0 h-full">
          <div className="flex w-full h-full items-center justify-between">
            <div className="h-full flex flex-col justify-between p-4 xs:p-6">
              <div className="place-items-start">
                <div>
                  <Logo />
                </div>
                <p className="mt-1 ml-9 text-xs text-primary-300 xs:text-sm sm:ml-12 sm:text-base">
                  Jan 31, {year} / Jebrael, HR
                </p>
              </div>

              <div className="flex items-end gap-3">
                <div>
                  <img
                    src={image}
                    alt={fullName}
                    width={40}
                    height={40}
                    className="size-10 object-cover rounded xs:size-14 sm:size-16"
                  />
                </div>
                <div>
                  <p className="capitalize font-medium xs:text-lg sm:text-xl md:text-2xl">
                    {fullName}
                  </p>
                  <p className="text-xs text-primary-300 xs:text-sm sm:text-base md:text-lg">
                    @{username}
                  </p>
                </div>
              </div>
            </div>

            <div className="rotate-90 xs:p-1 sm:p-3">
              <p className="text-lg text-primary-500 sm:text-xl md:text-2xl">
                #{ticketId}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
