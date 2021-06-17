import { Link } from "react-router-dom"

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra, toggleAlcohol, toggleMixer, toggleExtra, clearIngredients}) => {
    return ( 
        <div className="snap snap-y snap-mandatory
        h-screen w-full overflow-y-scroll overflow-x-hidden">

            <section className="snap-start
            flex flex-col h-screen w-full justify-evenly items-center mt-24">
                <button
                className="ingredientBtn bg-black " >
                    <Link to="/drinks">
                        Search
                    </Link>
                </button>
                <button onClick={clearIngredients}>
                    clear
                </button>
            </section>



            
            <section className="ingredient-page-section 
            relative flex-col p-8  
            bg-alcohol">


                <div 
                className="ingredientBtn pt-9 h-full flex
                 bg-alcohol" 
                onClick={toggleAlcoholOptions}>
                    <div className="flex items-end h-16">
                        <h2 className="text-6xl">Alcohol</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>


                    {chosenAlcohol.length <= 5 && 
                <div className="section-ingredients-list-container
                h-1/2 w-max
                 ">
                    {chosenAlcohol.map(ingredient=>
                        <button 
                        onClick={()=>toggleAlcohol(ingredient)}
                        key={ingredient} 
                        className="section-chosen-ingredients-list-item
                        w-40
                        bg-alcohol">
                            {ingredient}
                            <div className="delete-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )}
                </div>
                    }  


                {chosenAlcohol.length > 5 && 
                <div className="section-ingredients-list-container
                h-1/2 w-max
                 ">

                        <button 
                        onClick={toggleAlcoholOptions}
                        className="section-chosen-ingredients-list-item
                        w-40
                        bg-alcohol">
                            {chosenAlcohol[0]} & {chosenAlcohol.length-1} others
                            <div className="delete-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                </div>
                    } 





            </section>
      
            <section className="ingredient-page-section bg-mixer">
                <button 
                className="ingredientBtn bg-mixer" 
                onClick={toggleMixerOptions}>
                    Mixer
                </button>
                <div className="section-ingredients-list-container">
                    {chosenMixer.length > 0 && 
                    chosenMixer.map(ingredient=>
                        <button 
                        onClick={()=>toggleMixer(ingredient)}
                        key={ingredient} 
                        className="section-chosen-ingredients-list-item bg-mixer">
                            {ingredient}
                            <div className="delete-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )
                    }  
                </div>
            </section>
            
            <section className="ingredient-page-section bg-extra">
                <button 
                className="ingredientBtn bg-extra" 
                onClick={toggleExtraOptions}>
                    Extra
                </button>
                <div className="section-ingredients-list-container">
                    {chosenExtra.length > 0 && 
                    chosenExtra.map(ingredient=>
                        <button 
                        onClick={()=>toggleExtra(ingredient)}
                        key={ingredient} 
                        className="section-chosen-ingredients-list-item bg-extra">
                            {ingredient}
                            <div className="delete-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )
                    }  
                </div>      
            </section>

        </div>
     );
}
 
export default Ingredients;