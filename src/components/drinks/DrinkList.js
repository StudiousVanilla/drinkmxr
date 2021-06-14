import { Link } from "react-router-dom";
// import whiskey from '../../Icons/whiskey.svg'

const DrinkList = ({drinks, getDrink, glasses}) => {

    return ( 
        <div className="h-full">
            
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