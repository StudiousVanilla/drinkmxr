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
        <div className="h-full bg-gray-800 ">


            {/* container for loading animation */}

            <div className="
            fixed top-0 right-0 h-screen w-screen bg-blue-400
            flex justify-center items-center z-20" id="animationContainer">
                <div className="
                relative w-full h-1/3
                flex justify-center items-center">
                    <img src={shaker} alt="Cocktail shaker"
                    className="w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4 rounded-full p-5 animate-shaker" />
                </div>
            </div>
            


            {drinks !== "No drinks" &&


                <div className="flex flex-col justify-center items-center mb-20 bg-gray-800 sm:w-1/2 sm:items-center">

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
                    <p className="px-5 text-xl xs:text-2xl text-center text-white">
                        Didn't find any drinks with:
                    </p>
                    
                    <div className="w-4/5 pt-3 flex flex-col justify-center items-center mx-auto bg-gray-800 sm:w-2/5 md:w-1/3 lg:w-1/4">
                        {queryArray.map(string=>
                        <div key={string}
                        className="h-12 xs:h-16 w-full mb-3  flex justify-between items-center rounded-lg bg-white">
                            <p className="font-bold px-5 text-left text-xl">
                                {/* replaces - with ' ' */}
                                {string.replace(/_/g, ' ')}
                            </p>
                        </div>
                        )}
                    
                        {/* hints for users based on number of ingredients */}
                        {queryArray.length > 3 &&
                        <div className="pt-2 mb-2 xs:pt-4 text-xl text-white">
                            <p>Try using fewer ingredients</p>
                        </div>
                        }
                        {/* hints for users based on number of ingredients */}
                        {queryArray.length <= 3 &&
                        <div className="pt-2 mb-2 text-xl text-white">
                            <p>Try using different ingredients</p>
                        </div>
                        }
                    </div>
                </div>   
                }

                {queryArray[0] === '' &&
                    <div className="pt-8 text-xl text-white">
                        <p>No ingredients chosen. Go back and select an ingredeint or two and try again</p>
                    </div>
                }


                <div className="w-full pb-4 sm:my-7 flex justify-center bg-gray-800">
                        <Link to="/">
                            <button className="relative border border-white p-5 rounded-full animate-pulse z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                </svg>
                            </button>
                        </Link>
                </div>
            </div>
            }
        </div>
     );

}
 
export default DrinkList;