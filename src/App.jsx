import './App.css';
import SerieComponent from "./components/SerieComponent";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
    const series = [
        { cod: 1, nom: "Friends", cat: "Comedy", img: "friends.png" },
        { cod: 2, nom: "Law & Order", cat: "Drama", img: "law-and-order.png" },
        { cod: 3, nom: "The Big Bang Theory", cat: "Comedy", img: "the-big-bang-theory.png" },
        { cod: 4, nom: "Stranger Things", cat: "Terror", img: "stranger-things.png" },
        { cod: 5, nom: "Dr. House", cat: "Drama", img: "dr-house.png" },
        { cod: 6, nom: "The X-Files", cat: "Drama", img: "the-x-files.png" }
    ];

    return (
        <div className="container mt-3">
            <Header />
            <Menu />
            <h1 className="border-bottom pb-3 mb-3">Series</h1>
            <div className="row">
                {series.map((serie) => (
                    <div key={serie.cod} className="col-md-4 mb-3">
                        <SerieComponent
                            codigo={serie.cod}
                            nombre={serie.nom}
                            categoria={serie.cat}
                            imagen={serie.img}
                        />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App
