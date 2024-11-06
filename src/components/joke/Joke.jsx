// Joke.js

import { useState } from "react";
import Button from "../button/Button";
import './Joke.css';

const categories = ["Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];

const Joke = () => {
    const [Joke, setJoke] = useState("");
    const [selectedCategories, setSelectedCategories] = useState(["Programming"]); // default to Programming selected

    const fetchApi = () => {
        const categoriesString = selectedCategories.join(",");
        fetch(`https://sv443.net/jokeapi/v2/joke/${categoriesString}?type=single`)
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };

    const handleCheckboxChange = (category) => {
        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(category)) {
                // Remove the category if it's already selected
                return prevSelected.filter(c => c !== category);
            } else {
                // Add the category if it's not selected
                return [...prevSelected, category];
            }
        });
    };

    return (
        <div className="joke">
            <div className="checkbox-container">
                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>  
        </div>
    );
}

export default Joke;