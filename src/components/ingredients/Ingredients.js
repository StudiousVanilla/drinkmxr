import { Link } from "react-router-dom"

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra, toggleAlcohol, toggleMixer, toggleExtra, clearIngredients}) => {
    return ( 
        <div className="snap snap-y snap-mandatory
        h-screen w-full overflow-y-scroll overflow-x-hidden">
            
            <section className="snap-start
            flex flex-col h-screen w-full justify-evenly items-center bg-alcohol">
                <button 
                className="ingredientBtn bg-alcohol mb-10" 
                onClick={toggleAlcoholOptions}>
                    Alcohol
                </button>
                <div className="flex flex-col">
                    {chosenAlcohol.length <= 2 && 
                    chosenAlcohol.map(ingredient=>
                        <button 
                        onClick={()=>toggleAlcohol(ingredient)}
                        key={ingredient} 
                        className="mb-2 w-40 mx-w-44 flex justify-between items-center bg-alcohol px-1 pl-2 rounded-xl">
                            {ingredient}
                            <div className="flex justify-center items-center bg-white rounded-full w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )
                    }
                    {chosenAlcohol.length > 2 && 
                        <button 
                        onClick={toggleAlcoholOptions}
                        className="mb-2 w-48 mx-w-44 flex justify-between items-center bg-alcohol px-0.5 py-0.5 pl-2 rounded-2xl">
                            {chosenAlcohol[0]} & {chosenAlcohol.length} others
                            <div className="flex justify-center items-center bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    }
                </div>
            </section>
      
            <section className="snap-start
            flex flex-col h-screen w-full justify-evenly items-center bg-mixer">
                    <button 
                    className="ingredientBtn bg-mixer mb-10" 
                    onClick={toggleMixerOptions}>
                        Mixer
                    </button>
                    <div className="flex flex-col mt-10 -mb-44">
                    {chosenMixer.length <= 2 && 
                    chosenMixer.map(ingredient=>
                        <button 
                        onClick={()=>toggleMixer(ingredient)}
                        key={ingredient} 
                        className="mb-2 w-40 mx-w-44 flex justify-between items-center bg-mixer px-1 pl-2 rounded-xl">
                            {ingredient}
                            <div className="flex justify-center items-center bg-white rounded-full w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )
                    }
                    {chosenMixer.length > 2 && 
                        <button 
                        onClick={toggleMixerOptions}
                        className="mb-2 w-48 mx-w-44 flex justify-between items-center bg-mixer px-0.5 py-0.5 pl-2 rounded-2xl">
                            {chosenMixer[0]} & {chosenMixer.length} others
                            <div className="flex justify-center items-center bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    }
                </div>
                </section>
            
            <section className="snap-start
            flex flex-col h-screen w-full justify-evenly items-center bg-extra">
                    <button 
                    className="ingredientBtn bg-extra mb-10" 
                    onClick={toggleExtraOptions}>
                        Extra
                    </button>
                    <div className="flex flex-col mt-10 -mb-44">
                    {chosenExtra.length <= 2 && 
                    chosenExtra.map(ingredient=>
                        <button 
                        onClick={()=>toggleExtra(ingredient)}
                        key={ingredient} 
                        className="mb-2 w-40 mx-w-44 flex justify-between items-center bg-extra px-1 pl-2 rounded-xl">
                            {ingredient}
                            <div className="flex justify-center items-center bg-white rounded-full w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                        )
                    }
                    {chosenExtra.length > 2 && 
                        <button 
                        onClick={toggleExtraOptions}
                        className="mb-2 w-48 mx-w-44 flex justify-between items-center bg-extra px-0.5 py-0.5 pl-2 rounded-2xl">
                            {chosenExtra[0]} & {chosenExtra.length} others
                            <div className="flex justify-center items-center bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    }
                    </div>
                </section>
            
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

        </div>
     );
}
 
export default Ingredients;