

const OptionAlcoholBack = ({toggleAlcoholOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {

    

    return ( 
        <button className="OptionBack" 
        id="OptionAlcoholBack" 
        onClick={toggleAlcoholOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            {chosenAlcohol.length > 0 &&
                <span className="absolute -top-1 left-14 
                w-5 h-5
                flex justify-center items-center rounded-lg
                text-white text-sm
                bg-alcohol">
                    {chosenAlcohol.length}
                </span>
            }
            {chosenMixer.length > 0 &&
                <span className="absolute -bottom-1 left-14 
                w-5 h-5
                flex justify-center items-center rounded-lg
                text-white text-sm
                bg-mixer">
                    {chosenMixer.length}
                </span>
            }
            {chosenExtra.length > 0 &&
                <span className="absolute -bottom-1 -left-2 
                w-5 h-5
                flex justify-center items-center rounded-lg
                text-white text-sm
                bg-extra">
                    {chosenExtra.length}
                </span>
            }
        </button>
     );
}
 
export default OptionAlcoholBack;