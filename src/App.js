import "./App.css";
import { Navbar } from "./components";
import { HomePage, RecordPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<RecordPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
