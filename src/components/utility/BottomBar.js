import { Link } from 'react-router-dom';
import shaker from '../../Icons/shaker.svg'

const BottomBar = ({toggleOptions}) => {

    return ( 
        <div id="BottomBar"
        className="z-10 w-screen h-16 xs:h-bot pb-1
        flex justify-center items-center border-t-2 border-black
        md:hidden bg-gray-100">

            
            <div className="relative flex justify-center items-center">

                <div id="bottomBtn"
                className="rounded-full h-24 w-24 mb-14
                xs:h-24 xs:w-24 xs:mb-20
                 flex justify-center items-center
                 border-4 border-black 
                 bg-white z-30">
                     <Link to="/drinks">
                        <button
                        id="searchBtn" 
                        className="flex items-center animate-smallShaker">
                            <img src={shaker} alt="Cocktail Shaker" 
                            className="w-16 h-16 xs:w-20 xs:h-20"/>
                        </button>
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

                <p className=" hidden xs:block absolute top-24 text-lg font-bold">Shake!</p>
            </div>
        </div>
     );
}
 
export default BottomBar;