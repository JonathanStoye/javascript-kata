import React from 'react'


export const Books = ( { books } ) => {
  return (
    <section>
      <h1>Books</h1>
      <p>{ books || 'No books found' }</p>
    </section>
  )
}

export default Books