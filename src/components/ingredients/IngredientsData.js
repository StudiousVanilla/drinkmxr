import { useState } from 'react';
import Ingredients from './Ingredients'
import IngredientSearch from './IngredientSearch'

const IngredientForm = () => {

    const updateIngredientStlye = (id) =>{
        const ingredient = document.querySelector(`#${id.split(' ').join('')}`)
        ingredient.classList.toggle('ingredientGridItemAltColors')
    }

    const [chosenAlcohol, setChosenAlcohol] = useState([])
    
    const addAlcohol = (alcohol) => {
        // gets chosen alcohol array
        const newChosenAlcohol = chosenAlcohol.slice()
        // adds new alcohol to array
        newChosenAlcohol.push(alcohol)
        // state is updated using a 'Set' so that duplicates are removed
        setChosenAlcohol([...new Set(newChosenAlcohol)])
    }

    const removeAlcohol = (alcohol) => {
        const newChosenAlcohol = chosenAlcohol.filter(item => item !== alcohol)
        setChosenAlcohol(newChosenAlcohol)
    }

    const toggleAlcohol = (alcohol) => {
        if(chosenAlcohol.includes(alcohol)){
            removeAlcohol(alcohol)
        }
        else{
            addAlcohol(alcohol)
        }
        updateIngredientStlye(alcohol)
    };



    const basicAlcohol = [
        'Amaretto',
        'Aperol',
        'Bourbon',
        'Brandy',
        'Champagne',
        'Cognac',
        'Cointreau',
        'Gin',
        'Jagermeister',
        'Kahlua',
        'Prosecco',
        'Port',
        'Red Wine',
        'Rum',
        'Sambuca',
        'Peach Schnapps',
        'Scotch',
        'Sherry',
        'Southern Comfort',
        'Tequila',
        'Triple Sec',
        'Dry Vermouth',
        'Vodka',
        'Irish Whiskey']

        
    return (
        <div>
            <div className="mt-5 container mx-auto">
                <Ingredients basicAlcohol={basicAlcohol} chosenAlcohol={chosenAlcohol} toggleAlcohol={toggleAlcohol} />
            </div>
            <IngredientSearch/>
        </div>

    );
}

export default IngredientForm;