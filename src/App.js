import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "react-bootstrap/esm/Container";
import "./App.css";
import About from "./components/About";
import Navigation from "./components/Nav";

function App() {
  return (
      <Container>
    <div>
      <Navigation />
      <main>
        <About />
      </main>
    </div>
    </Container>
  );
}

export default App;
