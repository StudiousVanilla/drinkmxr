const IngredientSearch = () => {
    return ( 
        <footer className="bg-black w-screen fixed inset-x-0 bottom-0 flex justify-center items-center h-10 border-t-2 border-white">
            <div className="bg-white p-2 mb-3 rounded-full h-11 w-11 flex justify-center items-center border-2 border-black btn text-lg h-11 w-11">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </div>
        </footer>
     );
}
 
export default IngredientSearch;