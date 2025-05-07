import React from "react";
import "./ticketList.css";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
// import { Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
// import "swiper/css/pagination";
import "swiper/css/navigation";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);
  console.log(purchasedTickets);

  return (
    <div className="ticket__swiper-wrapper">
      {purchasedTickets.length === 0 ? (
        //-----------------------------------------ändra class----------------
        <p className="message">Du har inga biljetter ännu.</p>
      ) : (
        <>
          <Swiper
            effect="slide"
            grabCursor={true}
            modules={[Navigation, EffectCards]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="ticket__swiper"
          >
            {Object.values(purchasedTickets)
              .flat()
              .map((ticket) => (
                <SwiperSlide key={ticket.ticketId} className="ticket__swiper-slide">
                  <TicketItem ticket={ticket} />
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="ticket__swiper-buttons">
            <button className="swiper-button-prev"></button>
            <button className="swiper-button-next"></button>
          </div>
        </>
      )}
    </div>
  );
}

export default TicketList;
