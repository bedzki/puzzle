
// :: Images
import { Logo } from "images"; 

// :: Components
import Button from "./components/Button/Button";

const App = () => {
  return (
    <main className="page-container bg-black-100">
      <section className="grid place-items-center">
        <Logo />
        <Button name="Hello" color="red"/>
        <Button name="Hello" color="transparent" /> 
      </section>
    </main>
  );
};

export default App;
