const Ingredients = ({basicAlcohol, chosenAlcohol, toggleAlcohol}) => {


    return ( 
        <div className="flex justify-center md:justify-start w-full mb-24">
            <div className="w-11/12 p-3 ingredientGrid">
                {basicAlcohol.map(ingredient=> 

                    <div 
                    onClick={()=>toggleAlcohol(ingredient)}
                    key={ingredient} 
                    className="ingredientGridItem"
                    id={ingredient.split(' ').join('')}>
                        {ingredient}
                    </div>

                )}
            </div>
            <div className="hidden md:w-3/5 md:p-3 
            md:grid md:gap-1 md:grid-cols-4 md:grid-rows-6 
            md:text-center md:text-sm
            lg:text-base
            xl:w-2/4 xl:text-lg
            2xl:text-xl">
                {chosenAlcohol.map(ingredient=> 
                    <div 
                    onClick={()=>toggleAlcohol(ingredient)}
                    key={`chosen+${ingredient}`} 
                    className="ingredientGridItem">
                        {ingredient}
                    </div>
                )}               
            </div>
        </div>

     );
}
 
export default Ingredients;