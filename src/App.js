import AboutUS from "./Pages/AboutUS";
import { React } from "react";
import GlobalStyles from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import Projects from "./Pages/Projects";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails";
import { AnimatePresence } from "framer-motion";
import Bank from "./Pages/Bank";
import Frontend from "./Pages/Frontend";

function App() {
  const Location = useLocation();
  console.log(Location);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={Location} key={Location.pathname}>
          <Route path="/" exact>
            <AboutUS />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/bank" exact>
            <Bank />
          </Route>
          <Route path="/frontend" exact>
            <Frontend />
          </Route>
          {/* <Route path="/work/:id">
            <MovieDetails />
          </Route> */}

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
