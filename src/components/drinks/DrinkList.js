import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shaker from '../../Icons/shaker.svg'

const DrinkList = ({drinks, getDrink, glasses, searchQuery}) => {

    // used to diplay search query if there are no drink results
    const [queryArray, setQueryArray] = useState([])

    useEffect(()=>{
        setQueryArray(searchQuery.replace('_', ' ').split(','))
    }, [searchQuery])
    

    // moves waiting animation off screen
    const AnimationOff = () => {
        const container = document.querySelector('#animationContainer')
        container.classList.toggle('slideInLeft')
    }

    const borderColor = (strAlcoholic) => {
        console.log(strAlcoholic)
        if(strAlcoholic === 'Alcoholic'){
            return "alcohol"
        }
        else{
            return "mixer"
        }
    }


    // checks to see if the drinks prop has been populated with data fetched from api, and when it has the waiting naimation is removed 

    
    useEffect(()=>{
        const checkDataRecieved = () =>{
                if(drinks.length > 0){
                    setTimeout(()=>{
                        AnimationOff()
                    }, [1000])
                }
        }
        checkDataRecieved()
    }, [drinks])

    return ( 
        <div className="h-full">


            {/* container for loading animation */}

            <div className="
            fixed top-0 right-0 h-screen w-screen bg-blue-400
            flex justify-center items-center" id="animationContainer">
                <div className="
                relative w-full h-1/3
                flex justify-center items-center">
                    <img src={shaker} alt="Cocktail shaker"
                    className="w-4/5 rounded-full p-5 animate-shaker" />
                </div>
            </div>
            
            <button className="m-5 ingredientBtn bg-alcohol">
                <Link to='/'>
                    back
                </Link>
            </button>

            {drinks !== "No drinks" &&
                <div className=" flex flex-col justify-center items-center
                bg-gray-700">

                    {drinks.map(drink=>

                    <div key={drink.idDrink} 
                    className="flex flex-col items-center w-3/4 my-4 py-2 bg-gray-100 rounded-md border-4">

                        <div onClick={()=>getDrink(drink.idDrink)}
                        className="w-full flex justify-start py-2 pl-2 text-xl font-bold">
                            <p>{drink.strDrink}</p>
                        </div>
                        <div className="w-full flex">
                            <div className="w-3/5 flex flex-col justify-center items-center">
                                <p>complexity:</p>
                                <p>{drink.drinkInfo.numIngredients}</p>
                            </div>
                            <div className="flex justify-center items-end w-2/5">
                                <img className="w-12 h-12"
                                src={glasses[drink.drinkInfo.strGlass]} alt={drink.drinkInfo.strGlass} />
                            </div>
                        </div>
                    </div>    

                        
                        )}
                </div>
            }

            {drinks === "No drinks" && 
            <div>

                {queryArray[0] !== '' &&
                <div>
                    We couldn't find any drinks that contained:
                    {queryArray.map(string=><p key={string}>{string}</p>)}
                    {/* hints for users based on number of ingredients chosen */}
                    {queryArray.length > 3 &&
                    <div>
                        <p>Try using fewer ingredients</p>
                    </div>
                    }
                    {/* hints for users based on number of ingredients chosen */}
                    {queryArray.length <= 3 &&
                    <div>
                        <p>Try using different ingredients</p>
                    </div>
                    }
                </div>   
                }

                {queryArray[0] === '' &&
                    <div>
                        <p>No ingredients chosen. Go back and select an ingredeint or two and try again</p>
                    </div>
                }


                
                

                <button className="m-5 ingredientBtn bg-black">
                    <Link to="/">
                        back
                    </Link>
                </button>

            </div>
            }

        </div>
     );

}
 
export default DrinkList;