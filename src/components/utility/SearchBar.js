import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Searchbar = ({ingredient, items, toggleIngredientAuto}) => {
    
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)

        toggleIngredientAuto(item.name)
        
      }

      const resetValue = () =>{
        const inputBar = document.querySelector('.sc-bxivhb > input')
        inputBar.style.backgroundColor = `red`
      }

      let placeholder = `Seacrh ${ingredient}...`

    return ( 
        <div className="w-screen p-4 mt-16 flex justify-start z-20">
            <div className="w-full px-2">
                <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                placeholder={placeholder}
                maxResults = {5}
                onClick={resetValue}
                />
            </div>
        </div> 
    );
}
 
export default Searchbar;