import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Burnout from "./pages/Burnout"
import Home from "./pages/Home"
import PersonalLayout from "./components/PersonalLayout"
import PersonalCollection from "./pages/PersonalCollection"
import SceneIntro from "./pages/SceneIntro"
import Scene1 from "./pages/Scene1"

const BurnoutLayout = () => (
  <div className="min-h-screen bg-brand-teal/95 text-white font-sans">
    <Outlet />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersonalLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog"
            element={<PersonalCollection collection="blog" />}
          />
          <Route
            path="/travel"
            element={<PersonalCollection collection="travel" />}
          />
        </Route>
        <Route element={<BurnoutLayout />}>
          <Route path="burnout-in-tech" element={<Burnout />}></Route>
          <Route path="burnout-in-tech/intro" element={<SceneIntro />}></Route>
          <Route path="burnout-in-tech/scene-1" element={<Scene1 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
