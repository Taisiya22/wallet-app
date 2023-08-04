
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Form } from "../components/Form/Form";
import { Container, MainWrapp } from "./App.styled";


function App() {
  return (
    <Container>
      <Header />
      <MainWrapp>
        <Form />
      </MainWrapp>
      <Footer />
    </Container>
  );
}

export default App;
