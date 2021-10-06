import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Header from './components/Header'
import Footer from './components/Footer'
import Message from './components/Message'
import Counter from './components/Counter'
import HookCounter from './components/HookCounter'
import TextHook from './components/TextHook'
import ArrayHook from './components/ArrayHook'

function App() {
  return (
    <div className="App">
      <Header/>
      <Greet name="Bruce" wife="Helen">
        <button>Action</button>
      </Greet>
      <Greet name="Lipton" wife="Kristien"/>
      <Welcome/>
      <Hello/>
      <Message/>
      <Counter/>
      <Footer/>
      <HookCounter/>
      <TextHook/>
      <ArrayHook/>

    </div>
  );
}
export default App;
