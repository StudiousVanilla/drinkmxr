import shaker from '../../Icons/shaker.svg'

const Instructions = ({toggleInstructions}) => {



    return ( 
        <div className="optionsContainer w-screen" id="Instructions">


            <div className="relative h-full text-xl">

                <header className="w-full flex justify-center text-2xl p-3 mb-4 text-black font-bold">
                    Instructions
                </header>

                <div onClick={toggleInstructions}
                className="w-full flex flex-col flex-wrap h-2/3 justify-evenly items-evenly bg-white text-xl">
                        <div className="w-full flex justify-evenly items-center px-1 mb-2">
                            <p className="w-2/3 px-1 pb-5 border-b border-alcohol">
                                Scroll to select each category
                            </p>
                                <div className="relative h-16 w-12">
                                    <div className="absolute w-10 h-14 bg-extra"/>
                                    <div className="absolute animate-scrollUp3 w-10 h-14 bg-mixer"/>
                                    <div className="absolute animate-scrollUp2 w-10 h-14 bg-alcohol"/>
                                    <div className="absolute animate-scrollUp1 w-10 h-14  bg-gray-700"/>
                                    <div className="absolute bottom-full w-16 h-20 right-1  bg-white"/>
                                    <div className="absolute w-10 h-14 border-4 border-black"/>
                                </div>
                        </div>

                        <div className="w-full flex justify-evenly items-center px-1 mb-2">
                            <p className="w-2/3 px-1 pb-5 border-b border-mixer">
                                Tap the arrow to return to the main page
                            </p>
                            <div className="p-3 bg-white rounded-full border-2 border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                </svg>
                            </div>
                            
                        </div>

                        <div className="w-full flex justify-evenly items-center px-1">
                            <p className="w-2/3 px-1 pb-5 border-b border-extra">
                                Press the shaker when you're ready to search
                            </p>
                            <div>
                                <img src={shaker} alt="Cocktail shaker" className="animate-smallShaker" />
                            </div>
                            
                        </div>    

                        <div className="w-full flex justify-evenly items-center px-1">
                            <p className="w-2/3 px-1 ">
                                Clear all your chosen ingredients
                            </p>
                            <div className="p-2 rounded-full bg-gray-700 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            
                        </div>  

                </div>



            </div>
        </div>
     );
}
 
export default Instructions;