// Ext
import Aos from "aos";
import "aos/dist/aos.css";

// Routing
import { Route, Routes } from "react-router-dom";

// Layout
import Layout from "./components/Layout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SectorPage from "./pages/SectorPage";
import EventsPage from "./pages/EventsPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";

// Style
import "./styles/app.scss";
import SingleBlogPage from "./pages/SingleBlogPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="sectors" element={<SectorPage />} />
          <Route path="events/:slug" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="get-involved" element={<GetInvolvedPage />} />
          <Route path="blog/:slug" element={<SingleBlogPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
