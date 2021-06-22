import { useEffect, useState } from "react"
import DrinksNav from '../utility/DrinksNav'

const Drink = ({name, glass, measures, ingredients, instructions, toggleDrinkDisplay, conversions, conversionsArray, glasses}) => {


    // used to give ingredient divs unique keys in the case of dupliacte values adn to select the corresponding measure from the measure array
    let IngredientKeyNum = -1

    const [tidyIngredients, setTidyIngredients] = useState([])
    const [tidyMeasures, setTidyMeasures] = useState([])

    useEffect(()=>{
        

        // Not sure which to use, needs more experimenting

        setTidyIngredients(ingredients.filter(ingredeint=> ingredeint !== ''))

        const convertedMeasures = measures.map(measure =>{
            // checks to see if measure is part of conversionsArray
            // then replaces measure with relevant vauel from conversins object
            if(conversionsArray.includes(measure.trim().replace(/\s+/, ""))){
                return conversions[measure.trim().replace(/\s+/, "")]
            }
            else {
                return measure
            }
        })

        setTidyMeasures(convertedMeasures.filter(measure=> measure !== ''))

        // setTidyIngredients(ingredients)
        // setTidyMeasures(measures)


    }, [ingredients, measures, conversionsArray, conversions])


    return ( 

        <div className="h-full fixed top-0 left-full z-0 flex-col
        ease-in duration-500 transform translate-x-0 bg-gray-800" 
        id="drinkDisplay">

            <div className="w-screen overflow-scroll">               
                <DrinksNav/>
                {ingredients.length > 0 && 
                <div>
                    <div className="mb-6 px-6 py-4 text-3xl text-center font-bold text-white">
                        <p>{name}</p>
                    </div>
                    <div className="w-36 h-36 xs:w-40 xs:h-40 mx-auto mb-4 flex justify-center items-center rounded-full
                    bg-white">
                        <img className="h-20 w-20 xs:h-24 xs:w-24"
                        src={glasses[glass]} alt={glass} />
                    </div>
                    <div className="mb-5
                    text-center text-base font-light italic text-white">
                        <p>{glass}</p>
                    </div>
                    <div className="w-4/5 pt-3 flex flex-col justify-center items-center mx-auto bg-gray-800">
                        {/* ingredients */}
                        {tidyIngredients.map(ingredient=>{
                            // used to give measures a unique key
                            IngredientKeyNum++
                            return(
                                <div
                                key={`ingredient - ${IngredientKeyNum}`}
                                className="h-16 w-full mb-3  flex justify-between items-center rounded-lg bg-white">
                                    <p className="font-bold px-5 text-left">{ingredient}</p>
                                    <p className="px-5 font-semibold">{tidyMeasures[IngredientKeyNum]}</p>
                                </div>)
                        })}
                    </div>
                    <div className="w-4/5 mx-auto mt-6 mb-16">
                        <p className="mb-4 text-center text-white text-xl font-bold">Instructions</p>
                        <p className="text-lg text-white">{instructions}</p>
                    </div>
                </div>
                }
                <div onClick={toggleDrinkDisplay} 
                className="h-12 mb-12 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 p-3 rounded-full border border-white text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </div>  
            </div>
        </div>
     );
}
 
export default Drink;