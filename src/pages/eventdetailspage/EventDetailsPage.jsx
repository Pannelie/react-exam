import { useParams } from "react-router-dom";
import useEventStore from "../../stores/useEventStore";

function EventDetailsPage() {
  const { id } = useParams();
  const event = useEventStore((state) => state.getEventById(id));

  if (!event) {
    return <p>Eventet hittades inte.</p>;
  }

  return <div></div>;
}

export default EventDetailsPage;
