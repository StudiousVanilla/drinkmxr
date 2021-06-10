
const ingredientsSearch = async (ingredientString) =>{

        const query = 
        `query ($ingredients: String){
            drinks(ingredients: $ingredients){
                strDrink
                idDrink
                drinkInfo{
                    strAlcoholic
                    strGlass
                    numIngredients
                }
            }
        }`

        const variables = {ingredients:ingredientString}
    

    try {
        const json = await fetch(`https://api-practice-backend.herokuapp.com/graphql`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:  JSON.stringify({query,variables})
        })

        const data = await json.json()
        return data


    } catch (error) {
        console.log(`error is : ${error}`);
    }
}
 
export default ingredientsSearch;
