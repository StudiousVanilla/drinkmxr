
const Options = ({options, toggleIngredient}) => {
    return ( 
        <div className="container mx-auto w-full mb-2 h-auto sm:w-5/6 lg:w-3/5">
            <div className="w-full ingredientGrid">
                {options.map(ingredient=> 
                    <button 
                    onClick={()=>toggleIngredient(ingredient)}
                    key={ingredient} 
                    className="ingredientGridItem"
                    id={ingredient.split(' ').join('_')}>
                        {ingredient}
                    </button>
                )}
            </div>
        </div>
     );
}
 
export default Options;