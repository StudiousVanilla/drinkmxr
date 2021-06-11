import { Link } from "react-router-dom";

const DrinkList = ({drinks, getDrink}) => {

    return ( 
        <div className="relative">
            <div className=" mb-5">
                <button>
                    <Link to='/'>
                        ingredeints
                    </Link>
                </button>
            </div>


            {drinks.length > 0 &&
                <div>
                    {drinks.map(drink=>
                        <div 
                        key={drink.idDrink}
                        onClick={()=>getDrink(drink.idDrink)}
                        className="mb-8">
                            <p>{drink.strDrink}</p>
                            <p>{drink.idDrink}</p>
                            <p>{drink.drinkInfo.strGlass}</p>
                            <p>{drink.drinkInfo.strAlcoholic}</p>
                            <p>Ingredients: {drink.drinkInfo.numIngredients}</p>
                        </div>
                        
                        )}
                </div>
            }

        </div>
     );

}
 
export default DrinkList;