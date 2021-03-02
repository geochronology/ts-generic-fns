import React from 'react'

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;

}

export function SearchInput(props: ISearchInputProps) {

  const { setSearchQuery } = props

  return (

    <>
      <label htmlFor="search" className="mt-3">Search! Try me!</label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        onChange={e => setSearchQuery(e.target.value)}
      />
    </>
  )
}