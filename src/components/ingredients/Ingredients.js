

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra, toggleAlcohol, toggleMixer, toggleExtra, toggleInstructions, clearIngredients}) => {
    return ( 
        <div className="snap snap-y snap-mandatory
        h-screen w-full overflow-y-scroll overflow-x-hidden">

            <div onClick={clearIngredients} 
            className="absolute right-4 top-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <section className="snap-start bg-gray-800
            flex flex-col h-screen w-full justify-start items-center p-4">

                <div className="h-2/6 flex justify-center items-center bg-none">
                    <p className="text-5xl font-bold text-white">
                        Drink
                        <span className="text-alcohol">M</span>
                        <span className="text-mixer">X</span>
                        <span className="text-extra">R</span> 
                    </p>
                </div>

                <div className="">
                    <div className="text-white text-2xl">
                        <ol className="list-decimal">
                            <li className="mb-6">Pick your ingredeints</li>
                            <li className="mb-6">Find a drink</li>
                            <li className="mb-6">Enjoy!</li>
                        </ol>
                    </div>
                </div>

                <div className="flex w-full">
                    {/* Just a positional div */}
                    <div className="w-3/4 flex justify-start items-end">
                    </div>
                    <div onClick={toggleInstructions}
                    className="flex w-1/4 text-white text-xl h-48 justify-end items-end">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div
                        className=" rounded-full text-xl font-bold justify-self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>   
                </div>

                
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