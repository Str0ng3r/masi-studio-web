import './App.css';
import { Main } from './components/firstScreen/main';
import { Header } from './components/header/header'
import { Perevaga } from './components/perevagi/perevagi';
import { Plan } from './components/plan/plan';
import { Footer } from './components/footer/footer';
function App() {
  return (
    <div className="App">
          <Header></Header>
          <Main></Main>
          <Perevaga></Perevaga>
          <Plan></Plan>
          <Footer></Footer>
    </div>
  );
}

export default App;
