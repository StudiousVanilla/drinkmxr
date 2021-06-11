

const Drink = ({toggleDrinkDisplay, drink}) => {

    return ( 
        <div 
        className="fixed top-0 left-full z-0 
        ease-in duration-500 transform translate-x-0
        h-full
        flex-col bg-purple-100" 
        id="drinkDisplay">
            <div className="w-screen h-2/4 bg-yellow-200">
                <div onClick={toggleDrinkDisplay} className="mb-10">
                    back
                </div>
                <div onClick={()=>console.log(drink)}>
                    <p>{drink.idDrink}</p>
                    <p>{drink.strDrink}</p>
                    <p>{drink.strGlass}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Drink;