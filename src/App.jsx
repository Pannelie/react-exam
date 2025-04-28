import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import EventPage from "./pages/eventspage/EventsPage";
import OrderPage from "./pages/orderpage/orderPage";
import ErrorPage from "./pages/errorpage/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
