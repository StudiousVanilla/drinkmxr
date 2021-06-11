import OptionMixerBack from './OptionMixerBack'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'

const MixerOptions = ({basicMixer, toggleMixer, toggleMixerOptions, chosenMixer, chosenAlcohol, chosenExtra}) => {


    return ( 
        <div className="optionsContainer mt-6 pt-7" id="MixerOptions">
            <Searchbar/>
            <Options options={basicMixer} toggleIngredient={toggleMixer}/>
            <OptionMixerBack toggleMixerOptions={toggleMixerOptions} chosenMixer={chosenMixer} chosenAlcohol={chosenAlcohol} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default MixerOptions;