import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
