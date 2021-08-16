import React from 'react'

export default function Spinner() {
  return (
    <div className="spinnerContainer">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  )
}
