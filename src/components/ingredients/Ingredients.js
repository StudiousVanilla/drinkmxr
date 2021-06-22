import { useRef } from "react";
import BottomBar from "../utility/BottomBar";

const Ingredients = ({ toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra, toggleAlcohol, toggleMixer, toggleExtra, toggleInstructions, toggleOptions, clearAlcohol, clearMixer, clearExtra}) => {

    const shakerRef = useRef(null)
    const alcoholRef = useRef(null)
    const mixerRef = useRef(null)
    const extraRef = useRef(null)

    const shakerScroll = () => shakerRef.current.scrollIntoView({ behavior: "smooth" })
    const alcoholScroll = () => alcoholRef.current.scrollIntoView({ behavior: "smooth"})
    const mixerScroll = () => mixerRef.current.scrollIntoView({ behavior: "smooth" })
    const extraScroll = () => extraRef.current.scrollIntoView({ behavior: "smooth" })

    const shakerString = (chosenIngredients) => {
        if(chosenIngredients.length > 2){
            return `${chosenIngredients[0]} & ${chosenIngredients.length-1} others`
        }
        if(chosenIngredients.length === 2){
            return `${chosenIngredients[0]} & ${chosenIngredients.length-1} other`
        }
        if(chosenIngredients.length === 1){
            return `${chosenIngredients[0]}`
        }
    }

    return (
        <div className="snap snap-y snap-mandatory
        h-full w-full overflow-y-scroll fixed top-0 left-0" id="main-container">

            <section className="snap-end bg-gray-800
            flex flex-col h-full w-full justify-end items-center px-4" ref={shakerRef}>

                <div className="h-1/4 mt-6 flex justify-center items-center bg-none">
                    <p className="text-5xl font-bold text-white">
                        Drink
                        <span className="text-alcohol">M</span>
                        <span className="text-mixer">X</span>
                        <span className="text-extra">R</span>
                    </p>
                </div>

                {/* welcome message or list of ingredients */}
                {(chosenAlcohol.length + chosenMixer.length + chosenExtra.length) === 0 &&
                    <div className="text-white text-xl">
                        <ul className="text-center">
                            <li className="mb-1">Pick your ingredeints.</li>
                            <li className="mb-1">Find the perfect drink.</li>
                            <li className="mb-1">Enjoy!</li>
                        </ul>
                    </div>
                }

                {(chosenAlcohol.length + chosenMixer.length + chosenExtra.length) > 0 &&
                    <div className="text-white text-md xs:text-lg -mt-6 h-44">
                        <p className="mb-3 font-light text-center">Your Shaker contains:</p>
                        <ul className="text-center">
                            {chosenAlcohol.length > 0 &&
                            <li className="mb-2 pl-1 pr-2 py-1 xs:pl-4 xs:pr-2 xs:py-1 rounded-full
                            text-black font-semibold
                            bg-alcohol">
                                <button onClick={clearAlcohol} 
                                className="w-full flex items-center justify-between font-semibold">
                                    {shakerString(chosenAlcohol)}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-4 text-white mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                            }

                            {chosenMixer.length > 0 &&
                            <li className="mb-2 pl-4 pr-2 py-1 rounded-full
                            text-black font-semibold
                            bg-mixer">
                                <button onClick={clearMixer} 
                                className="w-full flex items-center justify-between font-semibold">
                                    {shakerString(chosenMixer)}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-4 text-white mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>        
                                </button>
                            </li>
                            }

                            {chosenExtra.length > 0 &&
                            <li className="mb-2 pl-4 pr-2 py-1 rounded-full
                            text-black
                            bg-extra">
                                <button onClick={clearExtra} 
                                className="w-full flex items-center justify-between font-semibold">
                                    {shakerString(chosenExtra)}
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="h-4 w-4 ml-4 text-white mt-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>  
                            }   
                        </ul>
                    </div>
                }


                <div className="w-full h-1/3 xs:h-1/2 flex justify-start items-center">
                    <div className="h-3/4 w-full flex justify-evenly items-center">
                        <button className="h-20 w-20 xs:h-24 xs:w-24 rounded-md bg-alcohol" onClick={alcoholScroll}>
                            <p className="text-xxs">Add</p>
                            <p className="text-lg xs:text-xl font-semibold">Alcohol</p>
                        </button>
                        <button className="h-20 w-20 xs:h-24 xs:w-24 rounded-md bg-mixer" onClick={mixerScroll}>
                            <p className="text-xxs">Add</p>
                            <p className="text-lg xs:text-xl font-semibold">Mixer</p>
                        </button>
                        <button className="h-20 w-20 xs:h-24 xs:w-24 rounded-md bg-extra" onClick={extraScroll}>
                            <p className="text-xxs">Add</p>
                            <p className="text-lg xs:text-xl font-semibold">Extras</p>
                        </button>
                    </div>
                </div>

                {/* instructions */}
                <div className="flex w-full text-white text-xl h-10 justify-end items-end mb-8 -mt-2">
                    <button onClick={toggleInstructions}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div
                        className=" rounded-full text-xl font-bold justify-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>

                {(chosenAlcohol.length+chosenMixer.length+chosenExtra.length) > 0 &&
                    <BottomBar toggleOptions={toggleOptions} chosenAlcohol={chosenAlcohol} chosenMixer={chosenMixer} chosenExtra={chosenExtra} />
                }


            </section>

            <section className="ingredient-page-section bg-alcohol" ref={alcoholRef}>

                <div onClick={toggleAlcoholOptions} className="h-3/5 flex justify-center items-end">
                    <button className="h-60 w-60 xs:w-72 xs:h-72 rounded-full border text-white border-white flex flex-col justify-center items-center focus:outline-none focus:ring focus:border-blue-300 noSelect">
                        <p className="text-lg mb-1">Choose your</p>
                        <p className="text-5xl">Alcohol</p>
                    </button>
                </div>


                <div className="w-full h-2/5 flex flex-col justify-center items-center pt-5 mb-10">

                    {chosenAlcohol.length > 0 &&
                        <p className="text-white mb-4">Your alcohols:</p>
                    }

                    {chosenAlcohol.length <= 3 &&
                        <div className="section-ingredients-list-container">
                            {chosenAlcohol.map(ingredient =>
                                <button
                                    onClick={() => toggleAlcohol(ingredient)}
                                    key={ingredient}
                                    className="
                                    section-chosen-ingredients-list-item
                                     bg-white">
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

                    {chosenAlcohol.length > 3 &&
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">

                            <button
                                onClick={clearAlcohol}
                                className="section-chosen-ingredients-list-item
                                bg-white">
                                {chosenAlcohol[0]} & {chosenAlcohol.length - 1} others
                                <div className="delete-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    }

                    <button onClick={shakerScroll}
                        className="section-chosen-ingredients-list-item
                    text-white mt-4 text-center justify-center">
                        Back to shaker
                    </button>

                </div>


            </section>

            <section className="ingredient-page-section bg-mixer" ref={mixerRef}>

                <div className="h-3/5 flex justify-center items-end"
                    onClick={toggleMixerOptions}>
                    <button className="h-60 w-60 xs:w-72 xs:h-72 rounded-full border text-white border-white flex flex-col justify-center items-center focus:outline-none focus:ring focus:border-blue-300 noSelect">
                        <p className="text-lg mb-1">Choose your</p>
                        <p className="text-5xl">Mixer</p>
                    </button>
                </div>


                <div className="w-full h-2/5 flex flex-col justify-center items-center pt-5 mb-10">

                    {chosenMixer.length > 0 &&
                        <p className="text-white mb-4">Your mixers:</p>
                    }

                    {chosenMixer.length <= 3 &&
                        <div className="section-ingredients-list-container">
                            {chosenMixer.map(ingredient =>
                                <button
                                    onClick={() => toggleMixer(ingredient)}
                                    key={ingredient}
                                    className="section-chosen-ingredients-list-item
                                    bg-white">
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

                    {chosenMixer.length > 3 &&
                        <div className="section-ingredients-list-container
                        h-1/2 w-max">

                            <button
                                onClick={clearMixer}
                                className="section-chosen-ingredients-list-item
                                bg-white">
                                {chosenMixer[0]} & {chosenMixer.length - 1} others
                                <div className="delete-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    }

                    <button onClick={shakerScroll}
                        className="section-chosen-ingredients-list-item
                    text-white mt-4 text-center justify-center">
                        Back to shaker
                    </button>

                </div>


            </section>

            <section className="ingredient-page-section bg-extra" ref={extraRef}>

                <div className="h-3/5 flex justify-center items-end"
                    onClick={toggleExtraOptions}>
                    <button className="h-60 w-60 xs:w-72 xs:h-72 rounded-full border text-white border-white flex flex-col justify-center items-center focus:outline-none focus:ring focus:border-blue-300 noSelect">
                        <p className="text-lg mb-1">Choose your</p>
                        <p className="text-5xl">Extras</p>
                    </button>
                </div>


                <div className="w-full h-2/5 flex flex-col justify-center items-center pt-5 mb-10">

                    {chosenExtra.length > 0 &&
                        <p className="text-white mb-4">Your extras:</p>
                    }

                    {chosenExtra.length <= 3 &&
                        <div className="section-ingredients-list-container">
                            {chosenExtra.map(ingredient =>
                                <button
                                    onClick={() => toggleExtra(ingredient)}
                                    key={ingredient}
                                    className="section-chosen-ingredients-list-item
                                    bg-white">
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

                    {chosenExtra.length > 3 &&
                        <div className="section-ingredients-list-container
                        h-1/2 w-max
                        ">

                            <button
                                onClick={clearExtra}
                                className="section-chosen-ingredients-list-item
                                bg-white">
                                {chosenExtra[0]} & {chosenExtra.length - 1} others
                                <div className="delete-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    }

                    <button onClick={shakerScroll}
                        className="section-chosen-ingredients-list-item
                    text-white mt-4 text-center justify-center">
                        Back to shaker
                    </button>

                </div>


            </section>

        </div>
    );
}

export default Ingredients;