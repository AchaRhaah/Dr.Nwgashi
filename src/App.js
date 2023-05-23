import "./App.css";
import { HomePage, RecordPage, UpdateRecords, SignUp, Login } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/addUser"  element={<SignUp />} />

          <Route path="/dashboard" exact element={<HomePage />} />
          <Route path="/records" element={<RecordPage />} />
          <Route path="/update_records/:id" element={<UpdateRecords />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
