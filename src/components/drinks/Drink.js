import { useEffect, useState } from "react"
import DrinksNav from '../utility/DrinksNav'

const Drink = ({name, glass, measures, ingredients, instructions, toggleDrinkDisplay, conversions, conversionsArray, glasses}) => {


    // used to give ingredients and measures unique keys in the case of dupliacte values
    let MeasureKeyNum = 0
    let IngredientKeyNum = 0

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

                    <div className="
                    text-center text-base font-light italic text-white">
                        <p>{glass}</p>
                    </div>






                    <div className="w-full flex justify-center bg-gray-800 min-h-full pt-3">
                        
                        {/* ingredients */}
                        <div className="flex flex-col justify-start items-center w-3/5 ">
                            {tidyIngredients.map(ingredient=>{
                                // used to give measures a unique key
                                IngredientKeyNum++
                                return(
                                    <div
                                    key={`ingredient - ${IngredientKeyNum}`}
                                    className="h-16 flex justify-center items-center">
                                        <p>{ingredient}</p>
                                    </div>
                                )
                            })}
                        </div>
                        
                        {/* measures */}
                        <div className="flex flex-col justify-start items-center w-2/5 ">
                            {tidyMeasures.map(measure=>{
                                // used to give measures a unique key
                                MeasureKeyNum++
                                return (
                                <div key={`measure - ${MeasureKeyNum}`}
                                className="h-16 flex justify-center items-center">
                                    <p>{measure}</p>
                                </div>)
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="my-3 p-3">
                        <p>{instructions}</p>
                    </div>
                </div>
                }





                <div onClick={toggleDrinkDisplay} className="m-5 ingredientBtn bg-mixer">
                    back up
                </div>
                
            </div>
        </div>
     );
}
 
export default Drink;