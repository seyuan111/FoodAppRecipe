import React from 'react'

const Navbar = ({value,loading,handleSubmit,onChange}) => {
  return (
    <form onSubmit={handleSubmit}>
        <input 
            value={value}
            disabled={loading}
            onChange={onChange}
            placeholder="Recipes"
            className="form-control"
        />
        <input
            disabled={loading || !value}
            type="submit"
            className="btn"
            value="Search"
        />
    </form>
  )
}

export default Navbar