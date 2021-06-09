const Searchbar = () => {
    return ( 
        <div className="w-screen p-4 mt-16">
            <div className="relative sm:w-96 md:mx-16 flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-2 right-2 z-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" 
                className="h-10 w-96 md:full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-gray-100" placeholder="Search alcohol..." />
            </div>
        </div> 
    );
}
 
export default Searchbar;