import "./App.css";

import Header from "./Component/Header";
import { BrowserRouter} from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      
        <div className='App'>
          <Header />
          <Home/>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
