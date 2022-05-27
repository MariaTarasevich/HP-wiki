// import React from "react";

// const charData = () => {
//     fetch('https://hp-api.herokuapp.com/api/characters')
//     .then((res) => res.json())
//     .then((json) => {
//         charData = [...json]
//     })
// }

// export const Context = React.createContext(charData);
import { createContext } from "react";

export const Context = createContext();