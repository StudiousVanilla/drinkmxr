import { Link } from "react-router-dom";

const DrinkList = ({drinks}) => {

    return ( 
        <div>
            <div>
                <button>
                    <Link to='/'>
                        ingredeints
                    </Link>
                </button>
            </div>


            {drinks.length > 0 &&
                <div>
                    {drinks.map(drink=>
                        
                        <div key={drink.idDrink}
                        className="mb-8">
                            <p>{drink.strDrink}</p>
                            <p>{drink.idDrink}</p>
                            <p></p>
                        </div>
                        
                        )}
                </div>
            }

        </div>
     );

}
 
export default DrinkList;