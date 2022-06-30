import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/:countryName" element={<CountryPage/>}/>
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
