import "./App.css";
import ReviewContent from "./components/ReviewDetail/ReviewContent";
import ReviewDetail from "./pages/ReviewDetail/ReviewDetail";
import MainPage from "./pages/Mainpage";
import UploadReview from './pages/UploadReview/UploadReview';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/item/:selectId' element={<ReviewDetail />} />
          <Route path='/review' element={<UploadReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
