import { useEffect, useState } from "react"

const Drink = ({name, glass, measures, ingredients, instructions, toggleDrinkDisplay, conversions, conversionsArray}) => {


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

        <div 
        className="fixed top-0 left-full z-0 
        ease-in duration-500 transform translate-x-0
        h-full
        flex-col bg-purple-100" 
        id="drinkDisplay">


            <div className="w-screen bg-yellow-200 overflow-scroll">
                

                <div onClick={toggleDrinkDisplay} className="m-5 ingredientBtn bg-mixer">
                    back
                </div>


                {ingredients.length > 0 && 
                <div>
                    <p>{name}</p>
                    <p>{glass}</p>
                    <div className="w-full flex justify-center bg-green-100 min-h-full pt-3">
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
                
            </div>
        </div>
     );
}
 
export default Drink;