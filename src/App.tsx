import { Routes, Route } from "react-router"
import { Mapper } from "./LayoutMapper/Mapper"
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Projects } from "./pages/Projects"
export const App = () => {
  return (
    <Routes>
      <Route element={<Mapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}