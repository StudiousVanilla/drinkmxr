
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

        if(data.errors){
            return null
        }
        else{
            console.log(data)
            return data
        }

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
                strInstructions
                ingredients
                measures
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
