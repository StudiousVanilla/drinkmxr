const GraphqlTest = () => {

    const graphQLquery = async () =>{

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

            const variables = {ingredients:"vodka,gin", id: "15849"}
        

        try {
            const json = await fetch(`https://api-practice-backend.herokuapp.com/graphql`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:  JSON.stringify({query,variables})
            })

            const data = await json.json()
            console.log(data)
            return data


        } catch (error) {
            console.log(`error is : ${error}`);
        }
    }


    return ( 

        <div onClick={graphQLquery}>
            graphQL test
        </div>

     );
}
 
export default GraphqlTest;
