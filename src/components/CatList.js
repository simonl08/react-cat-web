import React from "react"
import { Cat } from './Cat';

export const CatList = ({list}) => {
  return (
    <div className="catContainer">
      {
        list.map((item, index) => (
          <Cat name={item.name} price={item.price} key={index} image={item.url} />
        ))
      }
    </div>
  )
}