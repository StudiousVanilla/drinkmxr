import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Searchbar = ({ingredient, items, toggleIngredientAuto}) => {

  // resets search bar alue to ''
  const resetValue = () =>{
    const inputBar = document.querySelector('.sc-bxivhb > input')
    inputBar.value = null

  }

  // uses ingredient name passed from each fo the three categories to grab the correct elements
  const hideBottom = (ingredient) =>{
    const bottomBar = document.querySelector(`#addShaker${ingredient}`)
    bottomBar.classList.toggle('hidden')

    const searchBar = document.querySelector(`#searchBar${ingredient}`)
    searchBar.classList.toggle('mb-44')
  }

  // adds ingredient to relevant chosenIngredient array
  const handleOnSelect = (item) => {
    toggleIngredientAuto(item.name)
  }

  // placeholder for searc bar input
  let placeholder = `Search ${ingredient}s...`

  return ( 
      <div className="w-screen px-4 py-0 mt-0 xs:py-2 xs:mt-2 flex justify-start z-30 bg-white">
          <div className="w-full px-2 mb-6 z-20" id={`searchBar${ingredient}`} onFocus={()=>hideBottom(ingredient)} onBlur={()=>hideBottom(ingredient)}>
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