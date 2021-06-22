import shaker from '../../Icons/shaker.svg'

const Instructions = ({toggleInstructions}) => {



    return ( 
        <div className="optionsContainer w-screen" id="Instructions">


            <div className="relative h-full w-full text-xl">

                <header className="w-full flex justify-center text-2xl p-3 mb-4 text-black font-bold">
                    Instructions
                </header>

                <div onClick={toggleInstructions}
                className="w-full flex flex-col flex-wrap h-2/3 justify-evenly items-evenly bg-white text-xl">
                        <div className="w-full flex justify-evenly items-center px-1 mb-2">
                            <p className="w-2/3 px-1 pb-5 border-b border-alcohol">
                                1. Scroll the categories
                            </p>
                                <div className="relative h-16 w-12">
                                    <div className="absolute w-10 h-14 flex justify-center items-center bg-extra">
                                        <div className="w-5 h-5 rounded-full border border-white"/>
                                    </div>
                                    <div className="absolute animate-scrollUp3 w-10 h-14 flex justify-center items-center bg-mixer">
                                        <div className="w-5 h-5 rounded-full border border-white"/>
                                    </div>
                                    <div className="absolute animate-scrollUp2 w-10 h-14 flex justify-center items-center bg-alcohol">
                                        <div className="w-5 h-5 rounded-full border border-white"/>
                                    </div>
                                    <div className="absolute animate-scrollUp1 w-10 h-14 flex justify-center items-center  bg-gray-700">
                                        <div className="w-6 h-6">
                                            <img src={shaker} alt="Cocktail shaker" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-full w-16 h-20 right-1  bg-white"/>
                                    <div className="absolute w-10 h-14 border-4 border-black"/>
                                </div>
                        </div>

                        <div className="w-full flex justify-evenly items-center px-1 mb-2">
                            <p className="w-2/3 px-1 pb-5 border-b border-mixer">
                                2. Add ingredients 
                            </p>
                            <div className="p-1 rounded-lg animate-backgroundColorCycle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            
                        </div>

                        <div className="w-full flex justify-evenly items-center px-1">
                            <p className="w-2/3 px-1 pb-5 border-b border-extra">
                                3. Tap the Shaker
                            </p>
                            <div>
                                <img src={shaker} alt="Cocktail shaker" className="animate-smallShaker" />
                            </div>          
                        </div>    
                </div>

                <div onClick={toggleInstructions}
                className="h-20 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    className="h-16 w-16 p-4 border border-black rounded-full animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </div>



            </div>
        </div>
     );
}
 
export default Instructions;