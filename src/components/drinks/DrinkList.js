import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shaker from '../../Icons/shaker.svg'
import DrinkListItem from "./DrinkListItem";

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
        <div className="h-full bg-gray-800">


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
            


            {drinks !== "No drinks" &&


                <div className="flex flex-col justify-center items-center mb-20 bg-gray-800">

                    {drinks.map(drink=>
                        <DrinkListItem drink={drink} getDrink={getDrink} glasses={glasses}/>
                    )}

                    <div className="w-full h-16"/>

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