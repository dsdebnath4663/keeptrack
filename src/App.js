import {
  Route,
  Switch,
  Link,
  Routes,
  NavLink,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import HomePage from "./projects/home/HomePage";
import ProjectPage from "./projects/ProjectPage";
import UserAuthenticationContext from "./react advance/hooks/inbuilt/useContext-2/UserAuthenticationContext";
import FormHandler from "./react advance/hooks/custom/useFormInput/FormHandler";
import DataFetch from "./react advance/hooks/custom/useFormInput/DataFetch";
// import Theme from "./react advance/hooks/inbuilt/useContext/Theme";

function App() {
  let location = useLocation();
  return (
    <>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
        <NavLink to="/theme" className="button rounded">
          useContext-2
        </NavLink>
        <NavLink to="/DataFetch" className="button rounded">
          DataFetch
        </NavLink>
      </header>
      <div className="container">
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={{ enter: 400, exit: 200 }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              {/* <Route path="/theme" element={<Theme />} /> */}
              <Route path="/theme" element={<UserAuthenticationContext />} />
              <Route path="/DataFetch" element={<DataFetch />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default App;
