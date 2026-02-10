import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayered from "./Components/NavbarLayered";
import HomeLayered from "./Pages/HomeLayered";
import Bio from "./Pages/Bio";
import Criticism from "./Pages/Criticism";
import Painting from "./Pages/Painting";
import PaintingGallery from "./Pages/PaintingGallery";
import PaintingDetail from "./Pages/PaintingDetail";
import DigitalArt from "./Pages/DigitalArt";
import DigitalGallery from "./Pages/DigitalGallery";
import DigitalDetail from "./Pages/DigitalDetail";
import Photography from "./Pages/Photography";
import PhotographyGallery from "./Pages/PhotographyGallery";
import PhotographyDetail from "./Pages/PhotographyDetail";
import TShirts from "./Pages/TShirts";
import TShirtsGallery from "./Pages/TShirtsGallery";
import TShirtsDetail from "./Pages/TShirtsDetail";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarLayered />
        <Routes>
          <Route path="/" element={<HomeLayered />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/criticism" element={<Criticism />} />
          <Route path="/painting" element={<Painting />} />
          <Route path="/painting-gallery" element={<PaintingGallery />} />
          <Route path="/painting-gallery/:id" element={<PaintingDetail />} />
          <Route path="/digital-art" element={<DigitalArt />} />
          <Route path="/digital-gallery" element={<DigitalGallery />} />
          <Route path="/digital-gallery/:id" element={<DigitalDetail />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography-gallery" element={<PhotographyGallery />} />
          <Route path="/photography-gallery/:id" element={<PhotographyDetail />} />
          <Route path="/tshirts" element={<TShirts />} />
          <Route path="/tshirts-gallery" element={<TShirtsGallery />} />
          <Route path="/tshirts-gallery/:id" element={<TShirtsDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
