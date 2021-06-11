import { useEffect, useState } from "react";
import {ingredientsSearch, drinkSearch} from '../../GraphQL'
import DrinkList from './DrinkList'
import DrinkData from './DrinkData'

const DrinksData= ({searchQuery}) => {

    
    // list of drinks
    const [drinks, setDrinks] = useState([])

    // fetches drinks based on search query
    useEffect(()=>{

        // fetches drinks from backend using graphQL and searchQuery 
        const getDrinks = async (query) =>{
            // uses new/formatted searchQuery to fetch drink datat
            const newDrinks = await ingredientsSearch(query)

            if( newDrinks !== null){

                // sorts drinks by number o0f ingredients
                const sortDrinks = newDrinks.data.drinks.sort((a,b) => 
                a.drinkInfo.numIngredients - b.drinkInfo.numIngredients)

                // interval set to give drink shaker animation time if data fetch successful / fast
                setInterval(()=>{
                // sets drinks State to new sorted array
                setDrinks(sortDrinks)
                },3000)

            }
            else{
                console.log('nope')
            }
    
            
    
            
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
        <div className="h-full">
            <DrinkList drinks={drinks} getDrink={getDrink}/>
            <DrinkData  drink={drink} toggleDrinkDisplay={toggleDrinkDisplay}/>
        </div>
     );
}
 
export default DrinksData;