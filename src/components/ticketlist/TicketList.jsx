import React from "react";
import "./ticketList.css";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);
  console.log(purchasedTickets);

  return (
    <div className="ticket__swiper-wrapper">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Pagination]}
        pagination={{ clickable: true }}
        className="ticket__swiper"
      >
        {purchasedTickets.map((ticket) => (
          <SwiperSlide key={ticket.id} className="ticket__swiper-slide">
            <TicketItem ticket={ticket} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TicketList;
