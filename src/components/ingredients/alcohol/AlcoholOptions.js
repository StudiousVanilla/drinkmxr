import { useEffect } from 'react'
import OptionAlcoholBack from './OptionAlcoholBack'
import alcoholAutoItems from './alcoholSearchAutoComplete'
import Searchbar from '../../utility/SearchBar'
import Options from '../../utility/Options'


const AlcoholOptions = ({basicAlcohol, toggleAlcohol, toggleAlcoholOptions, toggleAlcoholAuto,  chosenAlcohol, chosenMixer, chosenExtra, maintainOptionStyling}) => {

    useEffect(()=>{
        // 're-highlights' chosen ingrtedients from the previous search
        maintainOptionStyling(chosenAlcohol, 'alcohol')

    })


    return ( 
        <div className="optionsContainer" id="AlcoholOptions">

            <div className="relative h-auto">
                <header className="w-full flex justify-center text-2xl p-3 bg-alcohol text-white mb-16">Alcohol</header>
                <div className="w-full flex flex-col flex-wrap h-44 justify-start items-start">

                    {chosenAlcohol.length <= 0 &&

                        <div className="w-full text-center">
                            <p className="text-alcohol font-bold mb-10 mt-4">
                                Search for an ingredient 
                            </p>
                            <p className="text-alcohol font-bold mb-10">
                                or use the handy 'Quick Select' menu
                            </p>

                            <div className="flex justify-center text-alcohol animate-bounce">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                </svg>
                            </div>

                        </div>

                    }


                    {chosenAlcohol.map(ingredient=>
                    <div className="w-1/2 flex justify-center items-center mb-4" key={ingredient}>
                        <button onClick={()=>toggleAlcohol(ingredient)}
                        className=" flex justify-between items-center
                        w-1/2 min-w-max rounded-2xl pl-2 pr-1 py-0.5 bg-alcohol">
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
                <div className="pb-1 mx-3 py-2  border-b border-alcohol w-max">
                    <p className="text-lg text-alcohol font-bold">Quick Select</p>
                </div>
                <Options options={basicAlcohol} toggleIngredient={toggleAlcohol}/>
                <OptionAlcoholBack toggleAlcoholOptions={toggleAlcoholOptions} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra}/>
            </div>
        </div>
     );
}
 
export default AlcoholOptions;