import { useEffect, useState } from "react";
import {ingredientsSearch, drinkSearch} from '../../GraphQL'
import DrinkList from './DrinkList'
import Drink from './Drink'

const DrinkData= ({searchQuery}) => {


    
    // list of drinks
    const [drinks, setDrinks] = useState([])

    // fetches drinks based on search query
    useEffect(()=>{

        // fetches drinks from backend using graphQL and searchQuery 
        const getDrinks = async (query) =>{
            // uses new/formatted searchQuery to fetch drink datat
            const newDrinks = await ingredientsSearch(query)
    
            // sorts drinks by number o0f ingredients
            const sortDrinks = newDrinks.data.drinks.sort((a,b) => 
            a.drinkInfo.numIngredients - b.drinkInfo.numIngredients)
    
            // sets drinks State to new sorted array
            setDrinks(sortDrinks)
        }

        getDrinks(searchQuery)

        
    },[searchQuery])



    // **************



    // single drink
    const [drink, setDrink] = useState('')

    // slides in 'single drink' info panel 
    const toggleDrinkDisplay = () =>{
        const drinkDisplay = document.querySelector('#drinkDisplay')
        drinkDisplay.classList.toggle('slideInLeft')
    }

    const getDrink = async (id) =>{

        const drinkData = await drinkSearch(id)

        const newDrink = drinkData.data.drink

        setDrink(newDrink)

        toggleDrinkDisplay()

    }


    
    




   


    return ( 
        <div className="relative mx-auto w-screen overflow-x-hidden">
                <DrinkList 
                drinks={drinks} 
                getDrink={getDrink}
                />
            <div className="optionsContainer" id="drinkDisplay">
                <Drink 
                drink={drink}
                toggleDrinkDisplay={toggleDrinkDisplay}/>
            </div>
        </div>
     );
}
 
export default DrinkData;