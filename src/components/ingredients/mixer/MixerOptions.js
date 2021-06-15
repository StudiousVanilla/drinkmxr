import { useEffect } from 'react'
import OptionMixerBack from './OptionMixerBack'
import mixerAutoItems from './mixerSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'

const MixerOptions = ({basicMixer, toggleMixer, toggleMixerOptions, toggleMixerAuto, chosenMixer, chosenAlcohol, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenMixer, 'mixer')

    })


    return ( 
        <div className="optionsContainer mt-6 pt-7" id="MixerOptions">
            <Searchbar items={mixerAutoItems} ingredient={'mixers'} toggleIngredientAuto={toggleMixerAuto}/>
            <Options options={basicMixer} toggleIngredient={toggleMixer}/>
            <OptionMixerBack toggleMixerOptions={toggleMixerOptions} chosenMixer={chosenMixer} chosenAlcohol={chosenAlcohol} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default MixerOptions;