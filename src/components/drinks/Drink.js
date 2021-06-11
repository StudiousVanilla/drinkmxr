

const Drink = ({toggleDrinkDisplay, drink}) => {

    return ( 
        <div className=" bg-purple-200 w-screen h-screen sticky top-1 left-1">
            <div className="">
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