import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./components/context/MovieContext";
import HomePage from "./components/pages/HomePage";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;