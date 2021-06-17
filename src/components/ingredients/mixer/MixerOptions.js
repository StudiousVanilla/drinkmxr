import { useEffect } from 'react'
import mixerAutoItems from './mixerSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
import OptionBack from '../../utility/OptionBack'

const MixerOptions = ({basicMixer, toggleMixer, toggleMixerOptions, toggleMixerAuto, chosenMixer, chosenAlcohol, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenMixer, 'mixer')

    })


    return ( 
        <div className="optionsContainer mt-6 pt-7" id="MixerOptions">
            <Searchbar items={mixerAutoItems} ingredient={'mixers'} toggleIngredientAuto={toggleMixerAuto}/>
            <Options options={basicMixer} toggleIngredient={toggleMixer}/>
            <OptionBack toggleOptions={toggleMixerOptions} id={"OptionMixerBack"} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default MixerOptions;