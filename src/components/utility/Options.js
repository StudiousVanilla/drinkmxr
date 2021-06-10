
const Options = ({options, toggleIngredient}) => {
    return ( 
        <div className="container m-auto w-full pt-5 mb-10">
            <div className="w-full ingredientGrid">
                {options.map(ingredient=> 
                    <div 
                    onClick={()=>toggleIngredient(ingredient)}
                    key={ingredient} 
                    className="ingredientGridItem"
                    id={ingredient.split(' ').join('')}>
                        {ingredient}
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Options;