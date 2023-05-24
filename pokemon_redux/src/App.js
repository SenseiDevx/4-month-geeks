import {Route, Routes} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";
import Busket from "./components/Busket/Busket";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path='/about/:id' element={<AboutPage/>}/>
                <Route path='/busket' element={<Busket/>}/>
            </Routes>
        </>
    );
}

export default App;