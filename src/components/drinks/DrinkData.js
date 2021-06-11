import { useEffect, useState } from 'react'
import Drink from './Drink'

const DrinkData = ({drink, toggleDrinkDisplay}) => {
    

    // these state values will hold all non-null values taken from the ingredient and measures arrays in the drink object
    const [ingredients, setIngredients] = useState([]) 
    const [measures, setMeasures] = useState([]) 

    useEffect(()=>{
        if(drink.strDrink !== undefined){
            setIngredients(drink.ingredients.filter(element=> element != null))

            setMeasures(drink.measures.filter(element=> element != null))
        }
    },[drink])

    return ( 

        <Drink 
        name={drink.strDrink} 
        glass={drink.strGlass} 
        measures={measures} 
        ingredients={ingredients} 
        instructions={drink.strInstructions} 
        toggleDrinkDisplay={toggleDrinkDisplay}/>

     );
}
 
export default DrinkData;