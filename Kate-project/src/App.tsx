import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Registr } from "./pages/Registration";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./navigation/protectionRoute";

function App() {
  /*  const [count, setCount] = useState(0) */

  return (
    <>
      {/* отображение на странице - все, что хотим отобразить в принципе */}
      <Routes>
        <Route path="/Registr" element={<Registr />} />{" "}
        {/* порядок открытия страниц */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
