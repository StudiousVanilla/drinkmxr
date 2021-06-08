import { Link } from "react-router-dom";



const Layout = (props) => {
    return (
    <div className="'w-screen flex justify-evenly pt-4 text-purple-300">
        <Link to="/">
            <button className="btn h-8">home</button>
        </Link>
        <Link to="/ingredients">
            <button className="btn h-8">ingredients</button>
        </Link>
    </div>
    );
}
 
export default Layout;