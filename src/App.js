import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <ChakraProvider>
      <div className="overlay">
        <div className="App">
          <NavBar accounts={accounts} setAccounts={setAccounts} />
          <MainMint accounts={accounts} setAccounts={setAccounts} />
        </div>
        <div className="moving-background"></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
