import { BrowserRouter, Route, Routes } from "react-router-dom";
import Burnout from "./pages/Burnout";
import Home from "./pages/Home";
import SceneIntro from "./pages/SceneIntro";
import Scene1 from "./pages/Scene1";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-brand-teal/95 text-white font-sans">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="burnout-in-tech" element={<Burnout />}></Route>
          <Route path="burnout-in-tech/intro" element={<SceneIntro />}></Route>
          <Route path="burnout-in-tech/scene-1" element={<Scene1 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
