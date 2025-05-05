import React from "react";
import "./ticketList.css";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);
  console.log(purchasedTickets);

  return (
    <div className="ticket__swiper-wrapper">
      <Swiper
        slidesPerView={1.4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        modules={[Pagination]}
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
