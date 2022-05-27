export const getFavList = () => {
    return localStorage.getItem('favList') ? JSON.parse(localStorage.getItem('favList')) : []
}

export const addToFav = (char, favList) => {
    favList.push(char)
    localStorage.setItem('favList', JSON.stringify(favList))
}

export const deleteFromFav = (charName) => {
    const chars = JSON.parse(localStorage.getItem('favList'))
    chars.map(({ name }) => {
        for (let i = 0; i < chars.length; i++) {
            if (name == charName) {
                chars.splice(i, 1)
            }
        }

    })
    localStorage.removeItem('favList')
    localStorage.setItem('favList', JSON.stringify(chars))
}