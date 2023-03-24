import "./app.css";
import "./appMobile.css"
import {Routes, Route} from "react-router-dom"
import Accueil from "./pages/Accueil/accueil"
import APropos from "./pages/APropos/apropos"
import FicheLogement from "./pages/FicheLogement/ficheLogement"
import Erreur from "./pages/Erreur/erreur"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"

function App() {
    return (
        <div className="Feuille">
            <section className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/apropos" element={<APropos />} />
                    <Route path='/ficheLogement/:id' element={<FicheLogement />} />
                    <Route path='/*' element={<Erreur />} />
                </Routes>
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default App;