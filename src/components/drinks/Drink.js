const Drink = ({name, glass, measures, ingredients, instructions, toggleDrinkDisplay, }) => {


    // used to give measures a unique key
    let keyNum = 0


    return ( 

        <div 
        className="fixed top-0 left-full z-0 
        ease-in duration-500 transform translate-x-0
        h-full
        flex-col bg-purple-100" 
        id="drinkDisplay">


            <div className="w-screen h-2/4 bg-yellow-200">

                <div onClick={toggleDrinkDisplay} className="m-5 ingredientBtn bg-mixer">
                    back
                </div>


                {ingredients.length > 0 && 
                <div>
                    <p>{name}</p>
                    <p>{glass}</p>
                    <div className="w-full flex justify-center bg-green-100 min-h-full pt-3">
                        <div className="flex flex-col justify-start items-center w-1/2 ">
                            {ingredients.map(ingredient=>
                            <p
                            key={ingredient} 
                            className="mb-4">
                                {ingredient}
                            </p>
                            )}
                        </div>
                        <div className="flex flex-col justify-start items-center w-1/2 ">
                            {measures.map(measure=>{

                                // used to give measures a uinque key
                                keyNum++

                                return (<p key={`measure - ${keyNum}`}
                                className="mb-4">
                                    {measure}
                                </p>)
                                })
                            }
                            
                        </div>
                    </div>
                    <p>{instructions}</p>
                </div>
                }
                
            </div>
        </div>
     );
}
 
export default Drink;