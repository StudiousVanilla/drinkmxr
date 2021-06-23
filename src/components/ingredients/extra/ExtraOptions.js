import { useEffect } from 'react'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'
import extraAutoItems from './extraSearchAutoComplete'
import AddToShaker from '../../utility/AddToShaker'

const ExtraOptions = ({basicExtra, toggleExtra, toggleExtraAuto, chosenExtra, maintainOptionStyling, toggleExtraOptions, clearExtra}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenExtra, 'extra')

    })


    return ( 
        <div className="optionsContainer" id="ExtraOptions">

<div className="relative h-full flex flex-col justify-between">
                <header className="ingredient-header bg-extra">
                    Extra
                </header>

                {/* fewer than 2 chosen ingredients */}
                {chosenExtra.length <= 2 &&
                <div className="sm:hidden ingredients-container w-full flex flex-wrap h-16 justify-start items-start">           
                    {chosenExtra.map(ingredient=>
                    <div className="chosen-ingredient-container flex justify-center items-center w-1/2" key={ingredient}>             
                            <button onClick={()=>toggleExtra(ingredient)}
                            className=" ingredient-remove-button flex justify-between items-center
                            w-1/2 min-w-max rounded-full pl-2 pr-2 py-1 my-2 bg-extra">
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
                {chosenExtra.length > 2 &&
                <div className="sm:hidden ingredients-container w-full flex flex-wrap h-16 justify-center items-start">           
                    <div className="chosen-ingredient-container flex justify-center items-center w-1/2">             
                            <button onClick={()=>clearExtra()}
                            className=" ingredient-remove-button flex justify-between items-center
                            w-full min-w-max rounded-full pl-2 pr-2 py-1 my-2 bg-extra">
                                {chosenExtra[0]} & {chosenExtra.length-1} others
                                <span className="ml-4 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                    </div>
                </div>
                }
                
                <div className="sm:w-full sm:flex sm:justify-center sm:items-center">


                    <div className="sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-full">
                        <div className="quickSelect-container border-extra">
                            <p className="quickSelect-text text-extra">
                                Quick Select
                            </p>
                        </div>
                        <Options options={basicExtra} toggleIngredient={toggleExtra}/>
                    </div> 

                      {/* big screen only */}
                    <div className="hidden sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center sm:mr-4">
                        <div className="w-full flex flex-wrap justify-start items-start">           
                            {chosenExtra.map(ingredient=>
                            <div className="flex justify-center items-center h-full w-1/2" key={ingredient}>             
                                <button onClick={()=>toggleExtra(ingredient)}
                                className=" ingredient-remove-button flex justify-between items-center
                                w-1/2 min-w-max rounded-full pl-2 pr-2 py-1 my-2 sm:text-sm sm:w-2/6 bg-extra">
                                    {ingredient}
                                    <span className="ml-4 sm:ml-2 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            )}
                        </div>
                    </div>

                </div>
                
                <Searchbar items={extraAutoItems} ingredient={'extra'} toggleIngredientAuto={toggleExtraAuto}/>

                <AddToShaker chosenIngredient={chosenExtra} backgroundColor={'extra'} toggleOptions={toggleExtraOptions}/>
                
            </div>
            
        </div>
     );
}
 
export default ExtraOptions;