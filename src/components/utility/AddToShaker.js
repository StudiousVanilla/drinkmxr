

const AddToShaker = ({chosenIngredient,toggleOptions,backgroundColor}) => {

    // just slides back
    const handleBack = () =>{
        toggleOptions()
    }

    // scrolls back to shaker when an item is added
    const handleAdd = () =>{
        toggleOptions()
        const scrollToTop = () =>{ document.querySelector("#main-container").scrollTo(0,0) }
        scrollToTop()
    }

    return ( 
        <div className="w-screen" id={`addShaker${backgroundColor}`}>
            <button className={`bg-${backgroundColor} h-16 w-full`}>

                {chosenIngredient.length === 0 &&
                   <div className="flex justify-center items-center text-white text-3xl font-semibold" onClick={handleBack}>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <p>Back</p>
                   </div>
                }

                {chosenIngredient.length > 0 &&
                   <div className="flex justify-center items-center" onClick={handleAdd}>
                        <p className="text-white text-3xl font-semibold">+ Add to Shaker</p>
                    </div>
                }


            </button>


        </div>
     );
}
 
export default AddToShaker;