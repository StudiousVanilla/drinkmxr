import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Ingredients from './Ingredients'
import AlcoholOptions from './alcohol/AlcoholOptions'
import MixerOptions from './mixer/MixerOptions'
import ExtraOptions from './extra/ExtraOptions'
import DrinksData from '../drinks/DrinksData'



const IngredientsData = () => {

    // alcohol

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

    const updateAlcoholStlye = (id) =>{
        const ingredient = document.querySelector(`#${id.split(' ').join('')}`)
        ingredient.classList.toggle('alcoholAltColors')
    }

    const toggleAlcohol = (alcohol) => {
        if(chosenAlcohol.includes(alcohol)){
            removeAlcohol(alcohol)
        }
        else{
            addAlcohol(alcohol)
        }
        updateAlcoholStlye(alcohol)
    };

    const toggleAlcoholOptions = () =>{
        const alcoholOptions = document.querySelector('#AlcoholOptions')
        alcoholOptions.classList.toggle('slideInLeft')
        const backOption = document.querySelector('#OptionAlcoholBack')
        backOption.classList.toggle('reveal')
    }

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

    // mixers

    const [chosenMixer, setChosenMixer] = useState([])
    
    const addMixer = (mixer) => {
        // gets chosen alcohol array
        const newChosenMixer = chosenMixer.slice()
        // adds new alcohol to array
        newChosenMixer.push(mixer)
        // state is updated using a 'Set' so that duplicates are removed
        setChosenMixer([...new Set(newChosenMixer)])
    }

    const removeMixer = (mixer) => {
        const newChosenMixer = chosenMixer.filter(item => item !== mixer)
        setChosenMixer(newChosenMixer)
    }

    const updateMixerStlye = (id) =>{
        const ingredient = document.querySelector(`#${id.split(' ').join('')}`)
        ingredient.classList.toggle('mixerAltColors')
    }

    const toggleMixer = (mixer) => {
        if(chosenMixer.includes(mixer)){
            removeMixer(mixer)
        }
        else{
            addMixer(mixer)
        }
        updateMixerStlye(mixer)
    };

    const toggleMixerOptions = () =>{
        const mixerOptions = document.querySelector('#MixerOptions')
        mixerOptions.classList.toggle('slideInLeft')
        const backOption = document.querySelector('#OptionMixerBack')
        backOption.classList.toggle('reveal')
    }

    const basicMixer =[
        'Apple Juice',
        'Carbonated Water',
        'Club Soda',
        'Coca-Cola',
        'Coffee',
        'Cranberry Juice',
        'Elderflower Cordial',
        'Espresso',
        'Ginger Ale',
        'Ginger Beer',
        'Grapefruit Juice',
        'Ice',
        'Iced Tea',
        'Lemonade',
        'Lemon-lime Soda',
        'Milk',
        'Orange Juice',
        'Pineapple Juice',
        'Seven Up',
        'Soda Water',
        'Tea',
        'Tomato Juice',
        'Tonic Water',
        'Water' 
    ]


    // extras

    const [chosenExtra, setChosenExtra] = useState([])
    
    const addExtra = (extra) => {
        // gets chosen alcohol array
        const newChosenExtra = chosenExtra.slice()
        // adds new alcohol to array
        newChosenExtra.push(extra)
        // state is updated using a 'Set' so that duplicates are removed
        setChosenExtra([...new Set(newChosenExtra)])
    }

    const removeExtra = (extra) => {
        const newChosenExtra = chosenExtra.filter(item => item !== extra)
        setChosenExtra(newChosenExtra)
    }

    const updateExtraStlye = (id) =>{
        const ingredient = document.querySelector(`#${id.split(' ').join('')}`)
        ingredient.classList.toggle('extraAltColors')
    }

    const toggleExtra = (extra) => {
        if(chosenExtra.includes(extra)){
            removeExtra(extra)
        }
        else{
            addExtra(extra)
        }
        updateExtraStlye(extra)
    };

    const toggleExtraOptions = () =>{
        const extraOptions = document.querySelector('#ExtraOptions')
        extraOptions.classList.toggle('slideInLeft')
        const backOption = document.querySelector('#OptionExtraBack')
        backOption.classList.toggle('reveal')
    }

    const basicExtra =[
        'Extra1',
        'Extra2',
        'Extra3',
        'Extra4',
        'Extra5',
        'Extra6',
        'Extra7',
        'Extra8',
        'Extra9',
        'Extra10',
        'Extra11',
        'Extra12',
        'Extra13',
        'Extra14',
        'Extra15',
        'Extra16',
        'Extra17',
        'Extra18',
        'Extra19',
        'Extra20',
        'Extra21',
        'Extra22',
        'Extra23',
        'Extra24' 
    ]

    
    // ingredientArray is sued to0 generate searchQuery
    const [ingredientsArray, setIngredientsArray] = useState([])

    useEffect(()=>{

        setIngredientsArray([chosenAlcohol, chosenMixer, chosenExtra])

    }, [chosenAlcohol, chosenMixer, chosenExtra])


    // searchQuery used by DrinkData to fetch from API
    const [searchQuery, setSearchQuery] = useState('test')


    // updates searchQuery 
    useEffect(()=>{

        // removes any empty arrays from array of arrays [alcohol, meixer, extra]
        const tidyIngredientsArray = (array) =>{            
            const tidyArray = array.filter(ingredient => ingredient.length > 0)
            return tidyArray
        }

        // sets new SearchQuery by combining all the elements in the ingredients array into a string
        const updateSearchQuery = (array) =>{
            return tidyIngredientsArray(array).join(',').replace(/\s/gi,'_')
        }

        setSearchQuery(updateSearchQuery(ingredientsArray))

    },[ingredientsArray])


 

        
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    
                    <div className="relative mx-auto w-screen overflow-x-hidden">
                    <Ingredients 
                    toggleAlcoholOptions={toggleAlcoholOptions}
                    toggleMixerOptions={toggleMixerOptions}
                    toggleExtraOptions={toggleExtraOptions}
                    chosenAlcohol={chosenAlcohol}
                    chosenMixer={chosenMixer}
                    chosenExtra={chosenExtra}
                    />
                    
                    <AlcoholOptions 
                    basicAlcohol={basicAlcohol} 
                    toggleAlcohol={toggleAlcohol} 
                    toggleAlcoholOptions={toggleAlcoholOptions}
                    chosenAlcohol={chosenAlcohol}
                    chosenMixer={chosenMixer}
                    chosenExtra={chosenExtra}
                    />

                    <MixerOptions 
                    basicMixer={basicMixer} 
                    toggleMixer={toggleMixer} 
                    toggleMixerOptions={toggleMixerOptions}
                    chosenAlcohol={chosenAlcohol}
                    chosenMixer={chosenMixer}
                    chosenExtra={chosenExtra}
                    />

                    <ExtraOptions 
                    basicExtra={basicExtra} 
                    toggleExtra={toggleExtra} 
                    toggleExtraOptions={toggleExtraOptions}
                    chosenAlcohol={chosenAlcohol}
                    chosenMixer={chosenMixer}
                    chosenExtra={chosenExtra}
                    />
                </div>
                </Route>
                <Route exact path='/drinks'>
                    <DrinksData searchQuery={searchQuery}/>
                </Route>
            </Switch>
        </Router>
            

    );
}

export default IngredientsData;