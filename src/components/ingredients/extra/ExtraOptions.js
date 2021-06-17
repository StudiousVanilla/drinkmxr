import { useEffect } from 'react'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
import OptionBack from '../../utility/OptionBack'
import extraAutoItems from './extraSearchAutoComplete'

const ExtraOptions = ({basicExtra, toggleExtra, toggleExtraOptions, toggleExtraAuto, chosenAlcohol, chosenMixer, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenExtra, 'extra')

    })


    return ( 
        <div className="optionsContainer mt-6 pt-7" id="ExtraOptions">
            <Searchbar items={extraAutoItems} ingredient={'extras'} toggleIngredientAuto={toggleExtraAuto}/>
            <Options options={basicExtra} toggleIngredient={toggleExtra}/>
            <OptionBack toggleOptions={toggleExtraOptions} id={"OptionExtraBack"} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default ExtraOptions;