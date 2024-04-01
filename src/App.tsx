import { AppStateProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

import containers from "./context/state";
import { Header } from "./components";
import Routing from "./routing";
import { Suspense } from "react";

function App() {
  return (
    <AppStateProvider containers={containers}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </Suspense>
    </AppStateProvider>
  );
}

export default App;
