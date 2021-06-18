import { Link } from 'react-router-dom';
import shaker from '../../Icons/shaker.svg'

const BottomBar = ({toggleOptions, chosenAlcohol, chosenMixer, chosenExtra}) => {

    return ( 
        <div id="BottomBar"
        className="fixed bottom-0 left-0 z-10 w-screen h-12
        flex justify-center items-center border-t-2 border-black
        md:hidden bg-gray-100">

            
            <div className="relative flex justify-center items-center">

                <div id="bottomBtn"
                className="rounded-full h-24 w-24 mb-14
                 flex justify-center items-center
                 border-4 border-black 
                 bg-white z-30">
                     <Link to="/drinks">
                        <div
                        id="searchBtn" 
                        className="flex items-center animate-smallShaker">
                            <img src={shaker} alt="Cocktail Shaker" 
                            className="w-16 h-16"/>
                        </div>
                    </Link>
                        <div 
                        onClick={toggleOptions}
                        id="optionBackBtn"
                        className="w-max m-0 hide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                        </div>
                </div> 


                {chosenAlcohol.length > 0 &&
                    <span className="absolute -top-2 z-30
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white font-bold text-sm
                    bg-alcohol">
                        {chosenAlcohol.length}
                    </span>
                }
                {chosenMixer.length > 0 &&
                    <span className="absolute left-0 z-30
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white font-bold text-sm
                    bg-mixer">
                        {chosenMixer.length}
                    </span>
                }
                {chosenExtra.length > 0 &&
                    <span className="absolute right-0 z-30
                    w-5 h-5
                    flex justify-center items-center rounded-lg
                    text-white font-bold text-sm
                    bg-extra">
                        {chosenExtra.length}
                    </span>
                }  

            </div>


                


        </div>
     );
}
 
export default BottomBar;