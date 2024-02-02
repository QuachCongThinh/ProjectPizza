import "./style/all.scss";
import RenderRouter from "./routes";
import HeaderContact from "./pages/HeaderContact/headerContact";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Footer from "./pages/Footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderContact />
        <Navbar />
      </header>
      <RenderRouter />
      <footer>
        <Footer />
        <BackToTop />
      </footer>
    </div>
  );
}

export default App;
