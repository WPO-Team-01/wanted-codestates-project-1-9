import "./App.css";
import ReviewContent from "./components/ReviewDetail/ReviewContent";
import ReviewDetail from "./pages/ReviewDetail/ReviewDetail";
import MainPage from "./pages/Mainpage";
import UploadReview from "./pages/UploadReview/UploadReview";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <ReviewDetail />
      {/* <UploadReview /> */}
    </div>
  );
}

export default App;
