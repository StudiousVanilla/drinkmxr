import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ingredientsSearch from '../../GraphQL'

const DrinkData= ({chosenAlcohol, chosenMixer, chosenExtra}) => {

    // sets State to an array of arrays
    const [ingredientsArray] = useState([chosenAlcohol, chosenMixer, chosenExtra])

    const [searchQuery, setSearchQuery] = useState('')

    const [drinks, setDrinks] = useState([''])
    
    // removes any array that has a length of 0 (empty array)
    const tidyIngredientsArray = (array) =>{
        const tidyArray = array.filter(ingredient => ingredient.length > 0)
        return tidyArray
    }
    
    const updateSearchQuery = () =>{
        setSearchQuery(tidyIngredientsArray(ingredientsArray)
                        .join(',').replace(/\s/gi,'_'))
    }

    const graphQLTest = async () =>{
        const newDrinks = await ingredientsSearch(searchQuery)
        const sortDrinks = newDrinks.data.drinks.sort((a,b) => 
        a.drinkInfo.numIngredients - b.drinkInfo.numIngredients)
        setDrinks(sortDrinks)
    }


    useEffect(()=>{
        updateSearchQuery()
    })

    return ( 
        <div>
            <button>
                <Link to="/">
                    ingredients
                </Link>
            </button>
            <button onClick={()=>console.log(drinks)}>
                log
            </button>
            <button onClick={graphQLTest}>
                graphql
            </button>
        </div>
     );
}
 
export default DrinkData;