import React from 'react'
import "./SearchBar.css"

export default function SearchBar({
  value,
  isLoading,
  handleSubmit,
  onChange

}) {
  return (
    <form onSubmit={handleSubmit}>
      <input className="form-control"
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        value={value}/>
      <input className="btn"
        disabled={isLoading || !value}
        type="submit"
        value="Search"
        />
    </form>

  )
}
