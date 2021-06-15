import { useEffect } from 'react'
import OptionExtraBack from './OptionExtraBack'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
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
            <OptionExtraBack toggleExtraOptions={toggleExtraOptions} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra} />
        </div>
     );
}
 
export default ExtraOptions;