import { Link } from "react-router-dom"

const Ingredients = ({toggleAlcoholOptions, toggleMixerOptions, toggleExtraOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {
    return ( 
        <div className="fixed h-screen w-full flex flex-col justify-evenly items-center">
            
            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="w-24 px-3 py-2 rounded-full text-xl flex justify-center items-center bg-alcohol text-white " 
                onClick={toggleAlcoholOptions}>
                    Alcohol
                </button>
                <p>{chosenAlcohol}</p>
            </div>

            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="w-24 px-3 py-2 rounded-full text-xl flex justify-center items-center bg-mixer text-white" 
                onClick={toggleMixerOptions}>
                    Mixer
                </button>
                <p>{chosenMixer}</p>
            </div>

            <div className="flex flex-col h-1/3 w-full justify-evenly items-center">
                <button 
                className="w-24 px-3 py-2 rounded-full text-xl flex justify-center items-center bg-extra text-white" 
                onClick={toggleExtraOptions}>
                    Extra
                </button>
                <p>{chosenExtra}</p>
            </div>

            <button>
                <Link to="/drinks">
                    Search
                </Link>
            </button>


        </div>
     );
}
 
export default Ingredients;