import { useEffect } from 'react'
import alcoholAutoItems from './alcoholSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'



const AlcoholOptions = ({basicAlcohol, toggleAlcohol, toggleAlcoholAuto,  chosenAlcohol, maintainOptionStyling, toggleAlcoholOptions}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenAlcohol, 'alcohol')

    })


    return ( 
        <div className="optionsContainer" id="AlcoholOptions">


            <div className="relative h-auto">

                <header className="ingredient-header bg-alcohol">
                    Alcohol
                </header>

                <div className="instructions-container">

                    {/* instructions */}
                    {chosenAlcohol.length <= 0 &&

                        <div className="w-full text-center">
                            <p className="font-bold mb-10 mt-4 text-alcohol ">
                                Search for an ingredient 
                            </p>
                            <p className="font-bold mb-10 text-alcohol">
                                or use the handy 'Quick Select' menu
                            </p>

                            <div className="flex justify-center animate-bounce text-alcohol">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>

                        </div>

                    }

                    {/* ingredients */}
                    {chosenAlcohol.map(ingredient=>
                    <div className="chosen-ingredient-container w-full xs:w-1/2  xs:mb-8" key={ingredient}>
                        <button onClick={()=>toggleAlcohol(ingredient)}
                        className="ingredient-remove-button bg-alcohol">
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


                <Searchbar items={alcoholAutoItems} ingredient={'alcohol'} toggleIngredientAuto={toggleAlcoholAuto} chosenIngredients={chosenAlcohol}/>

                
                <div className="quickSelect-container border-alcohol">
                    <p className="quickSelect-text text-alcohol">
                        Quick Select
                    </p>
                </div>


                <Options options={basicAlcohol} toggleIngredient={toggleAlcohol}/>

                <div onClick={toggleAlcoholOptions}>back</div>
            </div>
        </div>
     );
}
 
export default AlcoholOptions;