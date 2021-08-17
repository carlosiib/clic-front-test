import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div class="notFound_container">
      <h1>Page not found</h1>
      <p>We can't seem to find the page you are looking for.</p>
      <Link to="/" className="btn btn-primary">Visit Homepage</Link>
    </div>
  )
}
