

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra, toggleAlcohol, toggleMixer, toggleExtra, clearIngredients}) => {
    return ( 
        <div className="snap snap-y snap-mandatory
        h-screen w-full overflow-y-scroll overflow-x-hidden">

            <section className="snap-start
            flex flex-col h-screen w-full justify-evenly items-center mt-24">
                <button onClick={clearIngredients}>
                    clear
                </button>
            </section>



            
            <section className="ingredient-page-section bg-alcohol">

                <div 
                className="section-title" 
                onClick={toggleAlcoholOptions}>
                    <div className="flex items-end h-16">
                        <h2 className="text-6xl">Alcohol</h2>
                    </div>
                </div>

                <div className="w-full h-2/5 flex">
                    <div className="w-2/3 flex items-center">
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
                    </div>

                    <div className="w-1/3"
                    onClick={toggleAlcoholOptions}/>
                        
                </div>
             
                <div className="section-arrow"
                onClick={toggleAlcoholOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

            </section>
      
            <section className="ingredient-page-section bg-mixer">
                              
                <div 
                className="section-title" 
                onClick={toggleMixerOptions}>
                    <div className="flex items-end h-16">
                        <h2 className="text-6xl">Mixer</h2>
                    </div>
                </div>

                <div className="w-full h-2/5 flex">
                    <div className="w-2/3 flex items-center">
                            
                            {chosenMixer.length <= 5 && 
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">
                            {chosenMixer.map(ingredient=>
                                <button 
                                onClick={()=>toggleMixer(ingredient)}
                                key={ingredient} 
                                className="section-chosen-ingredients-list-item w-40 bg-mixer">
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

                        {chosenMixer.length > 5 && 
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">

                                <button 
                                onClick={toggleMixerOptions}
                                className="section-chosen-ingredients-list-item
                                w-40
                                bg-mixer">
                                    {chosenMixer[0]} & {chosenMixer.length-1} others
                                    <div className="delete-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                        </div>
                            }

                    </div>

                    <div className="w-1/3"
                    onClick={toggleMixerOptions}/>
                        
                </div>

                <div className="section-arrow"
                onClick={toggleMixerOptions}>

                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 mb-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>

                </div>

            </section>
            
            <section className="ingredient-page-section bg-extra">
                
                <div 
                className="section-title" 
                onClick={toggleExtraOptions}>
                    <div className="flex items-end h-16">
                        <h2 className="text-6xl">Extra</h2>
                    </div>
                </div>

                <div className="w-full h-2/5 flex">
                    
                    <div className="w-2/3 flex items-center">
                            
                            {chosenExtra.length <= 5 && 
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">
                            {chosenExtra.map(ingredient=>
                                <button 
                                onClick={()=>toggleExtra(ingredient)}
                                key={ingredient} 
                                className="section-chosen-ingredients-list-item w-40 bg-extra">
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


                        {chosenExtra.length > 5 && 
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">

                                <button 
                                onClick={toggleExtraOptions}
                                className="section-chosen-ingredients-list-item
                                w-40
                                bg-extra">
                                    {chosenExtra[0]} & {chosenExtra.length-1} others
                                    <div className="delete-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </button>
                        </div>
                            } 

                    </div>

                    <div className="w-1/3"
                    onClick={toggleExtraOptions}/>
                        
                </div>

                <div className="section-arrow"
                onClick={toggleExtraOptions}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 mb-1.5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

            </section>

        </div>
     );
}
 
export default Ingredients;