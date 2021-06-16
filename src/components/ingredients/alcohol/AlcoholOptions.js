import { useEffect } from 'react'
import OptionAlcoholBack from './OptionAlcoholBack'
import alcoholAutoItems from './alcoholSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'


const AlcoholOptions = ({basicAlcohol, toggleAlcohol, toggleAlcoholOptions, toggleAlcoholAuto,  chosenAlcohol, chosenMixer, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenAlcohol, 'alcohol')

    })


    return ( 
        <div className="optionsContainer mt-6 pt-7" id="AlcoholOptions">
            <Searchbar items={alcoholAutoItems} ingredient={'alcohol'} toggleIngredientAuto={toggleAlcoholAuto} chosenIngredients={chosenAlcohol}/>
            <Options options={basicAlcohol} toggleIngredient={toggleAlcohol}/>
            <OptionAlcoholBack toggleAlcoholOptions={toggleAlcoholOptions} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default AlcoholOptions;