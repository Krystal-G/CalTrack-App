import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import Login from "./pages/Login";
import Error from "./pages/Error";
import SharedLayout from "./components/SharedLayout";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Tracker />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
