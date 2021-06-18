const Warning = () => {

    return ( 
        <div className="fixed top-0 z-30 w-full flex justify-center text-lg py-4 px-1 text-black bg-gray-200">
            <span className="flex items-center mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            </span>
            <p>
                Fewer Ingredients = Better Results
            </p>
        </div>
     );
}
 
export default Warning;