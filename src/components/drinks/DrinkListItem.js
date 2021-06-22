

const DrinkListItem = ({drink, getDrink, glasses}) => {

    const complexityChart = (number) =>{
        if(number <= 2){
            return(
                <div className="flex justify-center items-end">
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                </div>
            )
        }
        if(number <= 4){
            return(
                <div className="flex justify-center items-end">
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                </div>
            )
        }
        if(number <= 5){
            return(
                <div className="flex justify-center items-end">
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                </div>
            )
        }
        if(number <= 6){
            return(
                <div className="flex justify-center items-end">
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-gray-300"/>
                </div>
            )
        }
        if(number > 6){
            return(
                <div className="flex justify-center items-end">
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                    <div className="h-3 w-3 mr-2 rounded-full bg-purple-500"/>
                </div>
            )
        }
    }

    return ( 

        <div key={drink.idDrink} onClick={()=>getDrink(drink.idDrink)}
        className=" w-5/6 my-3 h-24
        flex items-center bg-gray-100 rounded-md border-4">

            {/* left side */}
            <div className="w-2/3 pl-1">



                <div className="h-12 p-1 flex items-center justify-center font-bold 
                text-md xs:text-lg">
                    <p>{drink.strDrink}</p>
                </div>



                <div className="p-1 flex justify-center">
                    <p className="flex items-center mt-1">
                        {complexityChart(drink.drinkInfo.numIngredients)}
                    </p>
                </div>
            </div>



            {/* right side */}
            <div className="h-full w-1/3 flex justify-center items-center">
                <img className="w-16 h-16 p-2 xs:w-20 xs:h-20 xs:p-3 border border-black rounded-full"
                src={glasses[drink.drinkInfo.strGlass]} alt={drink.drinkInfo.strGlass} />
            </div>


        </div>    
     );
}
 
export default DrinkListItem;