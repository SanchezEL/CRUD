import React from 'react'


export default function CarDetails() {
  return (
    <div>
      <ul>
        <li>{this.props.match.params.id.brand}</li>
        <li>{this.props.match.params.id.model}</li>
        <li>{this.props.match.params.id.year}</li>
        <li>{this.props.match.params.id.color}</li>
      </ul>
    </div>
  )
}
