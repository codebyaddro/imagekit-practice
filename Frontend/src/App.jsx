import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Upload from './pages/Upload';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/feed" element={<Home/>} />
          <Route path="/upload" element={<Upload/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App