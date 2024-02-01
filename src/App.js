import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@cloudscape-design/global-styles/index.css"
import './App.css';
import { Home } from "./pages";

function App() {
  let homePageSeen = <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={homePageSeen} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
