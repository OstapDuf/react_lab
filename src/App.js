
import './App.css';
import { Footer } from './footer/footer';
import {Header} from "./header/header"
import { Card, DownButton } from './main/downer';
import { Upper } from './main/upper';



function App() {
  return (
      <>
      <Header/>
      <Upper/>
      <Card></Card>
      <DownButton></DownButton>
      <Footer></Footer>
      </>
    );
}

export default App;
