import { useEffect } from 'react'
import mixerAutoItems from './mixerSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'


const MixerOptions = ({basicMixer, toggleMixer, toggleMixerAuto, chosenMixer, maintainOptionStyling, toggleMixerOptions}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenMixer, 'mixer')

    })


    return ( 
        <div className="optionsContainer" id="MixerOptions">

            <div className="relative h-auto">

                <header className="ingredient-header bg-mixer">
                    Mixer
                </header>

                <div className="instructions-container">

                    {chosenMixer.length <= 0 &&

                        <div className="w-full text-center">
                            <p className="font-bold mb-10 mt-4 text-mixer ">
                                Search for an ingredient 
                            </p>
                            <p className="font-bold mb-10 text-mixer">
                                or use the handy 'Quick Select' menu
                            </p>

                            <div className="flex justify-center animate-bounce text-mixer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>

                        </div>

                    }


                    {chosenMixer.map(ingredient=>
                    <div className="chosen-ingredient-container w-full mb-4 xs:w-1/2  xs:mb-8" key={ingredient}>
                        <button onClick={()=>toggleMixer(ingredient)}
                        className="ingredient-remove-button bg-mixer">
                            {ingredient}
                            <span className="ml-4 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    )}
                </div>
            
            
            
                <Searchbar items={mixerAutoItems} ingredient={'mixers'} toggleIngredientAuto={toggleMixerAuto}/>
                
                <div className="quickSelect-container border-mixer">
                    <p className="quickSelect-text text-mixer">
                        Quick Select
                    </p>
                </div>
                
                
                <Options options={basicMixer} toggleIngredient={toggleMixer}/>

                <button onClick={toggleMixerOptions}>back</button>

            </div>
        </div>
     );
}
 
export default MixerOptions;