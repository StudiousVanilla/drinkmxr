import OptionAlcoholBack from './OptionAlcoholBack'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'

const AlcoholOptions = ({basicAlcohol, toggleAlcohol, toggleAlcoholOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {


    return ( 
        <div className="optionsContainer" id="AlcoholOptions">
            <Searchbar/>
            <Options options={basicAlcohol} toggleIngredient={toggleAlcohol}/>
            <OptionAlcoholBack toggleAlcoholOptions={toggleAlcoholOptions} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra}/>
        </div>
     );
}
 
export default AlcoholOptions;