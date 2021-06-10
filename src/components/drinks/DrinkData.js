import { useEffect, useMemo, useState } from "react";
import ingredientsSearch from '../../GraphQL'
import DrinkList from './DrinkList'

const DrinkData= ({searchQuery}) => {

    const queryCheck = useMemo(()=>{
        return searchQuery
    },[searchQuery])


    const [drinks, setDrinks] = useState([])

    useEffect(()=>{

        console.log(1)

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

        getDrinks(queryCheck)

        
    },[queryCheck])


    return ( 
        <div>
            <div>
                <DrinkList drinks={drinks}/>
            </div>
        </div>
     );
}
 
export default DrinkData;