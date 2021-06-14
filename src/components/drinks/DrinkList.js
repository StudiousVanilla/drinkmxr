import { useEffect } from "react";
import { Link } from "react-router-dom";
import shaker from '../../Icons/shaker.svg'

const DrinkList = ({drinks, getDrink, glasses}) => {

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
        <div className="h-full">


            {/* container for loading animation */}
            <div className="
            fixed top-0 right-0 h-screen w-screen bg-blue-400
            flex justify-center items-center" id="animationContainer">
                <div className="
                relative w-full h-1/3
                flex justify-center items-center">
                    <img src={shaker} alt="Cocktail shaker"
                    className="absolute bottom-0 w-4/5 rounded-full p-5 animate-shaker" />
                </div>
            </div>
            
            <button className="m-5 ingredientBtn bg-alcohol">
                <Link to='/'>
                    back
                </Link>
            </button>

            {drinks.length > 0 &&
                <div className="bg-gray-50">

                    {drinks.map(drink=>

                    <div key={drink.idDrink} className="flex items-center">

                        <div 
                        onClick={()=>getDrink(drink.idDrink)}
                        className="mb-8 w-1/2">
                            <p>{drink.strDrink}</p>
                            <p>{drink.idDrink}</p>
                            <p>{drink.drinkInfo.strGlass}</p>
                            <p>{drink.drinkInfo.strAlcoholic}</p>
                            <p>Ingredients: {drink.drinkInfo.numIngredients}</p>
                        </div>
                        <div className="mb-8 w-1/2">
                            <img className="w-12"
                            src={glasses[drink.drinkInfo.strGlass]} alt={drink.drinkInfo.strGlass} />
                        </div>
                    </div>    

                        
                        )}
                </div>
            }

        </div>
     );

}
 
export default DrinkList;