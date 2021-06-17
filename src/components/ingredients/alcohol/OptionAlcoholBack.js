
const OptionAlcoholBack = ({toggleAlcoholOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {

    

    return ( 
        <div className="sticky bottom-0 left-0 z-10 w-full h-12
        flex justify-start items-center pl-4 
        md:hidden bg-gray-50">
            <div id="OptionAlcoholBack" 
            onClick={toggleAlcoholOptions}
            className="flex justify-start items-center w-1/2">
                <div className="w-max m-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div className="flex w-2/3 justify-evenly">
                {chosenAlcohol.length > 0 &&
                    <span className="
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white text-sm
                    bg-alcohol">
                        {chosenAlcohol.length}
                    </span>
                }
                {chosenMixer.length > 0 &&
                    <span className="
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white text-sm
                    bg-mixer">
                        {chosenMixer.length}
                    </span>
                }
                {chosenExtra.length > 0 &&
                    <span className=" 
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white text-sm
                    bg-extra">
                        {chosenExtra.length}
                    </span>
                }
            </div>

        </div>
     );
}
 
export default OptionAlcoholBack;