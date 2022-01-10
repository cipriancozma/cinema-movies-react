import './styles/index.scss';
import {Header} from "./components/Header/Header";
import {Homepage} from "./components/Homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Movie} from "./components/Movie";
import {PageNotFound} from "./components/PageNotFound";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path={"/"} element={<Homepage/>} />
              <Route path={"/:movie"} element={<Movie />}  />
              <Route path={"/*"} element={<PageNotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
