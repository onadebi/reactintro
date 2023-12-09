import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductDisplay from "./ProductDisplay";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // Pixels, Percentage %, em
}

export default App;
