import { Link } from "react-router-dom"

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {
    return ( 
        <div className="fixed h-screen w-full flex flex-col justify-evenly items-center">
            
            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="ingredientBtn bg-alcohol" 
                onClick={toggleAlcoholOptions}>
                    Alcohol
                </button>
                <p>{chosenAlcohol}</p>
            </div>

            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="ingredientBtn bg-mixer" 
                onClick={toggleMixerOptions}>
                    Mixer
                </button>
                <p>{chosenMixer}</p>
            </div>

            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="ingredientBtn bg-extra" 
                onClick={toggleExtraOptions}>
                    Extra
                </button>
                <p>{chosenExtra}</p>
            </div>

            <button
            className="ingredientBtn bg-black m-4" >
                <Link to="/drinks">
                    Search
                </Link>
            </button>


        </div>
     );
}
 
export default Ingredients;