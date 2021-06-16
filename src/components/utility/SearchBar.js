import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Searchbar = ({ingredient, items, toggleIngredientAuto, chosenIngredients}) => {

  // resets search bar alue to ''
  const resetValue = () =>{
    const inputBar = document.querySelector('.sc-bxivhb > input')
    inputBar.value = null
  }

  const handleOnSelect = (item) => {
    console.log(item)
    toggleIngredientAuto(item.name)
  }

  

  let placeholder = `Search ${ingredient}...`

  return ( 
      <div className="w-screen p-4 mt-16 flex justify-start z-20">
          <div className="w-full px-2">
              <ReactSearchAutocomplete
              items={items}
              onSelect={handleOnSelect}
              placeholder={placeholder}
              maxResults = {5}
              onFocus={resetValue}
              />
          </div>
      </div> 
  );
}
 
export default Searchbar;