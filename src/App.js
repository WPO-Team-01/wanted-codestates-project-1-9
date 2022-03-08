import "./App.css";
import ReviewContent from "./components/ReviewDetail/ReviewContent";
import ReviewDetail from "./pages/ReviewDetail/ReviewDetail";
import MainPage from "./pages/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:id" element={<ReviewDetail />}></Route>
          {/* <MainPage />
          <ReviewDetail /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
