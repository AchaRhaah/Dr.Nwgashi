import "./App.css";
import { Navbar } from "./components";
import { HomePage, RecordPage, UpdateRecords, Login } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/records" element={<RecordPage />} />
          <Route path="/update_records/:id" element={<UpdateRecords />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
