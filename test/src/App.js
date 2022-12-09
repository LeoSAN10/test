import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { MainPage } from "./Pages/MainPage/MainPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import "./App.css";
import { InfoPage } from "./Pages/InfoPage/InfoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
        <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={ROUTES.INFO_PAGE} element={<InfoPage />} />
        <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
