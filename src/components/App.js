// create your App component here
import {useState, useEffect} from "react";

function App() {
    const [currentImage, setImage] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => setImage(data));
    }, []);

    

    if (!currentImage) return <p>Loading</p>


    return (
        <div>
            <img src={currentImage.message} alt="A Random Dog"></img>
        </div>
    )


}

export default App;