

const OptionBack = ({toggleOptions, chosenIngredients}) => {

    

    return ( 
        <button className="OptionBack" 
        id="OptionAlcoholBack" 
        onClick={toggleOptions}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
            {chosenIngredients.length > 0 &&
                <span className="absolute -top-1 left-14 
                w-5 h-5
                flex justify-center items-center rounded-lg
                text-white text-sm
                bg-red-400">
                    {chosenIngredients.length}
                </span>
            }
        </button>
     );
}
 
export default OptionBack;