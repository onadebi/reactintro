import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home";
import ProductDisplay from "./ProductDisplay";
import ContactLayout from "./pages/layouts/ContactLayout";
import Contact from "./pages/Contact";

//NPM: Node Package Manager

// JSX is a syntax extension for JavaScript. It was written to be used by React. Following is a simple example of JSX:

//USE: Its used to write HTML in React

function App() {
  // The component name => App

  return (
    // The component Body
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductDisplay />} />
          <Route path="*" element={<Home />} />
          <Route path='contact' element={<Contact/>} />
        </Route>


      </Routes>
    </BrowserRouter>
  );

  // Pixels, Percentage %, em, inches, cm, pt, rem, vh, vw, vmin, vmax
}

export default App;
