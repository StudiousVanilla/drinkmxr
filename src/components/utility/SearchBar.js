import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Searchbar = ({ingredient, items, toggleIngredientAuto, chosenIngredients}) => {

  // resets search bar alue to ''
  const resetValue = () =>{
    const inputBar = document.querySelector('.sc-bxivhb > input')
    inputBar.value = null

  }

  const hideBottom = () =>{
    const bottomBar = document.querySelector('#BottomBar')
    bottomBar.classList.toggle('hidden')
  }

  const handleOnSelect = (item) => {
    console.log(item)
    toggleIngredientAuto(item.name)
  }

  

  let placeholder = `Search ${ingredient}...`

  return ( 
      <div className="w-screen px-4 py-0 mt-0 xs:py-2 xs:mt-2 flex justify-start z-30 bg-white">
          <div className="w-full px-2 mb-44 z-20" onFocus={hideBottom} onBlur={hideBottom}>
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