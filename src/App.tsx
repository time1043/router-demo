import { Route, Routes } from "react-router";
import About from "./components/About";
import BasicLayout from "./components/BasicLayout";
import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
