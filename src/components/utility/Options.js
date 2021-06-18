
const Options = ({options, toggleIngredient}) => {
    return ( 
        <div className="container m-auto w-full mb-32 h-auto">
            <div className="w-full ingredientGrid">
                {options.map(ingredient=> 
                    <div 
                    onClick={()=>toggleIngredient(ingredient)}
                    key={ingredient} 
                    className="ingredientGridItem"
                    id={ingredient.split(' ').join('_')}>
                        {ingredient}
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Options;