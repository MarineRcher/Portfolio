import {Route, Routes} from 'react-router-dom';

//import css
import './Style/App.css';

//import page
import HomePage from "./Page/HomePage.tsx";
import Project from "./Page/Project.tsx";
import Competences from "./Page/Competences.tsx";
import Veille from "./Page/Veille.tsx";
import Parcours from "./Page/Parcours.tsx";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projets" element={<Project />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/parcours" element={<Parcours />} />
        </Routes>
    </>
  )
}
export default App;
