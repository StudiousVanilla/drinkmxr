const AddToShaker = ({chosenIngredient,toggleOptions,backgroundColor}) => {
    return ( 
        <div onClick={toggleOptions}
                className="sticky z-40 bottom-0 left-0 w-screen">
            <button className={`bg-${backgroundColor} h-16 w-full`}>

                {chosenIngredient.length === 0 &&
                   <div className="flex justify-center items-center">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <p>Back</p>
                   </div>
                }

                {chosenIngredient.length > 0 &&
                   <div className="flex justify-center items-center">
                        <p className="text-white text-3xl font-semibold">Add to Shaker</p>
                    </div>
                }


            </button>


        </div>
     );
}
 
export default AddToShaker;