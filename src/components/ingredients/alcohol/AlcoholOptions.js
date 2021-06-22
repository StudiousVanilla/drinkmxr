import { useEffect } from 'react'
import alcoholAutoItems from './alcoholSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
import AddToShaker from '../../utility/AddToShaker'



const AlcoholOptions = ({basicAlcohol, toggleAlcohol, toggleAlcoholAuto,  chosenAlcohol, maintainOptionStyling, toggleAlcoholOptions, clearAlcohol}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenAlcohol, 'alcohol')

    })


    return ( 
        <div className="optionsContainer" id="AlcoholOptions">


            <div className="relative h-full flex flex-col justify-between">
                <header className="ingredient-header bg-alcohol">
                    Alcohol
                </header>

                {/* fewer than 2 chosen ingredients */}
                {chosenAlcohol.length <= 2 &&
                <div className="ingredients-container w-full flex flex-wrap h-16 justify-start items-start">           
                    {chosenAlcohol.map(ingredient=>
                    <div className="chosen-ingredient-container flex justify-center items-center w-1/2" key={ingredient}>             
                            <button onClick={()=>toggleAlcohol(ingredient)}
                            className=" ingredient-remove-button flex justify-between items-center
                            w-1/2 min-w-max rounded-full pl-2 pr-2 py-1 my-2 bg-alcohol">
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
                }

                {/* more than 2 chosen ingredeints */}
                {chosenAlcohol.length > 2 &&
                <div className="ingredients-container w-full flex flex-wrap h-16 justify-center items-start">           
                    <div className="chosen-ingredient-container flex justify-center items-center w-1/2">             
                            <button onClick={()=>clearAlcohol()}
                            className=" ingredient-remove-button flex justify-between items-center
                            w-full min-w-max rounded-full pl-2 pr-2 py-1 my-2 bg-alcohol">
                                {chosenAlcohol[0]} & {chosenAlcohol.length-1} others
                                <span className="ml-4 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                    </div>
                </div>
                }
                
                <div className="quickSelect-container border-alcohol">
                    <p className="quickSelect-text text-alcohol">
                        Quick Select
                    </p>
                </div>

                <Options options={basicAlcohol} toggleIngredient={toggleAlcohol}/>
                
                <Searchbar items={alcoholAutoItems} ingredient={'alcohol'} toggleIngredientAuto={toggleAlcoholAuto}/>

                <AddToShaker chosenIngredient={chosenAlcohol} backgroundColor={'alcohol'} toggleOptions={toggleAlcoholOptions}/>
                
            </div>
        </div>
     );
}
 
export default AlcoholOptions;