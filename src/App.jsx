import { SipProvider } from "./components/SipContext";
import InputForm from "./components/InputForm";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
const App = () =>{
  return(
    <SipProvider>
      <div className="app">
        <Navbar />
        <h1>SIP Calculator</h1>
        <InputForm />
        <Result />
      </div>
    </SipProvider>
  )
}

export default App;