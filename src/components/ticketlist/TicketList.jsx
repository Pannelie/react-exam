import React from "react";
import "./ticketList.css";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);

  return (
    <div className="ticket__swiper-wrapper">
      <Swiper
        direction="vertical"
        spaceBetween={-140} // överlappningen?
        slidesPerView={1.2} // hur mycket jag visar nästa kort
        centeredSlides={false}
        allowTouchMove={true}
        modules={[Navigation]}
        navigation
        className="ticket__swiper-vertical"
      >
        {purchasedTickets.map((ticket) => (
          <SwiperSlide key={ticket.id}>
            <TicketItem ticket={ticket} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TicketList;
