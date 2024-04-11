import React, {useState} from 'react';

function Lesson13MyComponent(){

    const [foods, setFood]=useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFood(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder='Enter food name'></input>

            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Lesson13MyComponent;