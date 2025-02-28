import React, { useState } from 'react'

function Nav({setSearchValue}) { 
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearchValue(inputValue);
    setInputValue("");
  }

  return (
   <>
<nav className="p-4 w-auto">
  <ul className="flex flex-wrap gap-12 items-center justify-center">
    <li className="text-2xl text-blue-600">Weather App</li>
    <li className="ml-auto">
      <input type="text"  className="bg-gray-400 p-2 border-none rounded-lg text-center hover:bg-gray-600"
  value={inputValue} placeholder='Enter a city name'   onChange={(e) => setInputValue(e.target.value)}/>
      <button className="bg-blue-600 mx-1 py-1 px-3 text-center rounded-3xl text-xl text-white hover:bg-blue-800" onClick={handleSearch}>Search</button></li>
  </ul>
</nav>
  
   </>
  )
}

export default Nav
