
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

const drinkSearch = async (idString)=>{

    const query = 
        `query ($id: String){
            drink(id: $id){
                strDrink
                idDrink
                strGlass
                strMeasure1
                strMeasure2
                strMeasure3
                strMeasure4
                strMeasure5
                strMeasure6
                strMeasure7
                strMeasure8
                strMeasure9
                strMeasure10
                strMeasure11
                strMeasure12
                strMeasure13
                strMeasure14
                strMeasure15
                strIngredient1
                strIngredient2
                strIngredient3
                strIngredient4
                strIngredient5
                strIngredient6
                strIngredient7
                strIngredient8
                strIngredient9
                strIngredient10
                strIngredient11
                strIngredient12
                strIngredient13
                strIngredient14
                strIngredient15
                strInstructions
            }
        }`

        const variables = {id:idString}

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
 
export {ingredientsSearch, drinkSearch};
