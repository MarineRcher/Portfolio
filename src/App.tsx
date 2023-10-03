import {Route, Routes} from 'react-router-dom';

//import css
import './Style/App.css';

//import page
import HomePage from "./Page/HomePage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  )
}

export default App;
