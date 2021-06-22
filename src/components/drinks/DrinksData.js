import { useEffect, useState } from "react";
import {ingredientsSearch, drinkSearch} from '../../GraphQL'
import DrinkList from './DrinkList'
import DrinkData from './DrinkData'
import DrinksNav from "../utility/DrinksNav";
import { balloon, beer, cocktail, coffee, collins, coup, flute, highball, hurricane, jar, martini, mug, NnN, pint, pitcher, punch, shot, snifter, wine, whiskey } from "../utility/Glasses";


const DrinksData= ({searchQuery}) => {

    
    // list of drinks
    const [drinks, setDrinks] = useState([])

    // fetches drinks based on search query
    useEffect(()=>{
       

        // fetches drinks from backend using graphQL and searchQuery 
        const getDrinks = async (query) =>{

            if(query === ''){
                setDrinks("No drinks")
            }
            else{
                // uses new/formatted searchQuery to fetch drink datat
                const newDrinks = await ingredientsSearch(query)
    
                if( newDrinks !== null){
    
                    // sorts drinks by number o0f ingredients
                    const sortDrinks = newDrinks.data.drinks.sort((a,b) => 
                    a.drinkInfo.numIngredients - b.drinkInfo.numIngredients)
    
                    
                    // sets drinks State to new sorted array
                        setDrinks(sortDrinks)
    
                }
                else{
                    // if no drinks are found
                    setDrinks("No drinks")
                }
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

    // used to display correct drink icon
    const glasses = {
        'Pitcher': pitcher,
        'Pousse cafe glass': hurricane,
        'Cordial glass': hurricane,
        'Hurricane glass': hurricane,
        'Parfait glass': hurricane,
        'Pint glass': pint,
        'Margarita/Coupette glass': coup,
        'Margarita glass': coup,
        'Coupe Glass': coup,
        'Whiskey Glass': whiskey,
        'Whiskey sour glass': whiskey,
        'Old-fashioned glass': whiskey,
        'Old-Fashioned glass': whiskey,
        'Brandy snifter': snifter,
        'Balloon Glass': balloon,
        'Nick and Nora Glass': NnN,
        'Cocktail glass': cocktail,
        'Cocktail Glass': cocktail,
        'Coffee mug': mug,
        'Coffee Mug': mug,
        'Copper Mug': mug,
        'White wine glass': wine,
        'Wine Glass': wine,
        'Martini Glass': martini,
        'Collins Glass': collins,
        'Collins glass': collins,
        'Champagne flute': flute,
        'Champagne Flute': flute,
        'Highball glass': highball,
        'Highball Glass': highball,
        'Jar': jar,
        'Mason jar': jar,
        'Beer pilsner': beer,
        'Beer Glass':beer,
        'Beer mug': beer,
        'Irish coffee cup': coffee,
        "Punch Bowl": punch,
        "Punch bowl": punch,
        "Shot Glass": shot,
        "Shot glass": shot,
    }


    return ( 
        <div className="h-full bg-gray-800">
            <DrinksNav/>
            <DrinkList glasses={glasses} drinks={drinks} getDrink={getDrink} searchQuery={searchQuery}/>
            <DrinkData  drink={drink} toggleDrinkDisplay={toggleDrinkDisplay}/>
        </div>
     );
}
 
export default DrinksData;