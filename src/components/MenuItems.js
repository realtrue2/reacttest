import React from 'react'

export default function MenuItems({ items }) {

    const menuList = items.map(item =>
        <li key={item.link}>
           <a href={"#" + item.link}>
               {item.text}
           </a>
        </li>
    )

    return (
        <ul className="menu">
            {menuList}
        </ul>
    )
}