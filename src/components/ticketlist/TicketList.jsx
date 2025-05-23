import React from "react";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./ticketList.css";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);
  console.log(purchasedTickets);

  return (
    <div className="ticket__swiper-wrapper">
      {Object.keys(purchasedTickets).length === 0 ? (
        <p className="message message--margin-auto">Du har inga biljetter ännu.</p>
      ) : (
        <>
          <Swiper
            effect="slide"
            grabCursor={true}
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="ticket__swiper"
          >
            {Object.values(purchasedTickets)
              .flat()
              .map((ticket) => {
                return (
                  <SwiperSlide key={ticket.ticketId} className="ticket__swiper-slide">
                    <TicketItem ticket={ticket} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="ticket__swiper-buttons">
            <button className="swiper-button-prev" aria-label="previous ticket"></button>
            <button className="swiper-button-next" aria-label="next ticket"></button>
          </div>
        </>
      )}
    </div>
  );
}

export default TicketList;
