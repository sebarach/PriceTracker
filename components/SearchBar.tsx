"use client"

let handleSubmit = () =>{}

const SearchBar = () => {
  return (
    <form 
    className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}
    >

    <input
    type="text"
    placeholder="Ingrese producto"
    className="searchbar-input"
    />

    <button 
    className="searchbar-btn"
    type="submit"
    >
        Buscar
    </button>
    
    </form>
  )
}

export default SearchBar