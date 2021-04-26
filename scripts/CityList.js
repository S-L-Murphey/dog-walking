import { getCities } from "./database.js"

//const walkers = getWalkers()
const cityInfo = getCities()


export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cityInfo) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

