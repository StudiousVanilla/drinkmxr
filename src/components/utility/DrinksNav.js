import { Link } from "react-router-dom";

const DrinksNav = () => {
    return ( 
        <nav className="w-full flex justify-evenly pt-10 mb-10 text-xs xs:text-base text-white">
            <button className=" border-2 w-5/12  px-1 pb-1 rounded-full border-white">
                <Link to='/'>
                    Back to Shaker
                </Link>
            </button>
            <button className=" border-2 w-5/12 px-1 pb-1 rounded-full border-white">
                <a href='https://www.drinkmxr.com/'>
                    Start Fresh
                </a>
            </button>
        </nav>
     );
}
 
export default DrinksNav 