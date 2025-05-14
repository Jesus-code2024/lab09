import SerialComponent from "./components/SerialComponent";

function App() {
    return (
        <div className="container mt-3">
            <h1 className="border-bottom pb-3 mb-3">Series</h1>
            <div className="row">
                <div className="col-md-4">
                    <SerialComponent />
                </div>
                <div className="col-md-4">
                    <SerialComponent />
                </div>
                <div className="col-md-4">
                    <SerialComponent />
                </div>
            </div>
        </div>
    );
}

export default App;