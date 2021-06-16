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

    const conversions = {
        '1/4oz' :'10ml',
        '1/3oz' :'10ml',
        '1/2oz' :'15ml',
        '2/3oz' :'20ml',
        '3/4oz' :'20ml',
        '0.75oz' :'20ml',
        '1oz' :'35ml',
        '11/3oz' :'40ml',
        '11/2oz' :'40ml',
        '12/3oz' :'50ml',
        '2oz' :'70ml',
        '3oz' :'100ml',
        '4oz' :'120ml',
        '5oz' :'150ml',
        '6oz' :'180ml',
        '7oz' :'200ml',
        '8oz' :'230ml',
        '9oz' :'260ml',
        '10oz' :'300ml',
        '11oz' :'325ml',
        '12oz' :'350ml',
        '1jigger' :'45ml',
        '2jigger' :'100ml',
        '2jiggers' :'100ml',
        '1fifth':'750ml',
        '1fifths':'1500ml',
        '2fifth':'1500ml',
        '2 fifths':'1500ml',
        '3fifth':'2250ml',
        '3fifths':'2250ml',
        '4fifth':'3000ml',
        '4fifths':'3000ml',
        '1/4cup':'60ml',
        '1/3cup':'80ml',
        '1/2cup':'120ml',
        '2/3cup':'160ml',
        '3/4cup':'180ml',
        '1cup':'250ml',
        '11/2 cup':'350ml',
        '2cup':'475ml',
        '2cups':'475ml',
        '3cup':'700ml',
        '3cups':'700ml',
        '1/4gal':'1L',
        '1/3gal':'1.25L',
        '1/2gal':'1.75L',
        '2/3gal':'2.5L',
        '3/4gal':'2.75L',
        '1gal':'3.5L',
        '11/2gal':'5.5L',
        '2gal':'7.5L',
        '1/4qt':'230ml',
        '1/3qt':'300ml',
        '1/2qt':'475ml',
        '2/3qt':'625ml',
        '3/4qt':'700ml',
        '1qt':'900ml',
        '11/2qt':'1400ml',
        '2qt':'1850ml',
    }

    const conversionsArray = [
    '1/4oz',
    '1/3oz',
    '1/2oz',
    '2/3oz',
    '3/4oz',
    '0.75oz',
    '1oz',
    '11/3oz',
    '11/2oz',
    '12/3oz',
    '2oz',
    '3oz',
    '4oz',
    '5oz',
    '6oz',
    '7oz',
    '8oz',
    '9oz',
    '10oz',
    '11oz',
    '12oz',
    '1jigger',
    '2jigger',
    '2jiggers',
    '1fifth',
    '1fifths',
    '2fifth',
    '2 fifths',
    '3fifth',
    '3fifths',
    '4fifth',
    '4fifths',
    '1/4cup',
    '1/3cup',
    '1/2cup',
    '2/3cup',
    '3/4cup',
    '1cup',
    '11/2cup',
    '2cup',
    '2cups',
    '3cup',
    '3cups',
    '1/4gal',
    '1/3gal',
    '1/2gal',
    '2/3gal',
    '3/4gal',
    '1gal',
    '11/2gal',
    '2gal',
    '1/4qt',
    '1/3qt',
    '1/2qt',
    '2/3qt',
    '3/4qt',
    '1qt',
    '11/2qt',
    '2qt']

    return ( 

        <Drink 
        name={drink.strDrink} 
        glass={drink.strGlass} 
        measures={measures} 
        ingredients={ingredients} 
        instructions={drink.strInstructions} 
        toggleDrinkDisplay={toggleDrinkDisplay}
        conversions={conversions}
        conversionsArray={conversionsArray}
        />
     );
}
 
export default DrinkData;