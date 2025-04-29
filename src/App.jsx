import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import EventsPage from "./pages/eventspage/EventsPage";
import EventDetailsPage from "./pages/eventdetailspage/EventDetailsPage";
import OrderPage from "./pages/orderpage/orderPage";
import ErrorPage from "./pages/errorpage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
