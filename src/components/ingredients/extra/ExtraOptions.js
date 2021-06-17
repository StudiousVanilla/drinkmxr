import { useEffect } from 'react'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
import extraAutoItems from './extraSearchAutoComplete'

const ExtraOptions = ({basicExtra, toggleExtra, toggleExtraAuto, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenExtra, 'extra')

    })


    return ( 
        <div className="optionsContainer" id="ExtraOptions">

            <div className="relative h-auto">

                <header className="ingredient-header bg-extra">
                    Extras
                </header>

                <div className="instructions-container">

                    {chosenExtra.length <= 0 &&

                        <div className="w-full text-center">
                            <p className="font-bold mb-10 mt-4 text-extra ">
                                Search for an ingredient 
                            </p>
                            <p className="font-bold mb-10 text-extra">
                                or use the handy 'Quick Select' menu
                            </p>

                            <div className="flex justify-center animate-bounce text-extra">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>

                        </div>

                    }


                    {chosenExtra.map(ingredient=>
                    <div className="chosen-ingredient-container" key={ingredient}>
                        <button onClick={()=>toggleExtra(ingredient)}
                        className="ingredient-remove-button bg-extra">
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



                <Searchbar items={extraAutoItems} ingredient={'extras'} toggleIngredientAuto={toggleExtraAuto}/>

                <div className="quickSelect-container border-extra">
                    <p className="quickSelect-text text-extra">
                        Quick Select
                    </p>
                </div>

                <Options options={basicExtra} toggleIngredient={toggleExtra}/>

            </div>
        </div>
     );
}
 
export default ExtraOptions;