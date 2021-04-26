import { getWalkers, getCities } from "./database.js"
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            const walkerIdNumber = parseInt(walkerId)

            const cities = getCities()
            const findWalker = walkers.find(
                (walker) => {
                    return walker.id === walkerIdNumber
                }
            )
            const findCity = cities.find(
                (city) => {
                    return city.id === findWalker.cityId
                }
            )
                window.alert(`${findWalker.name} services ${findCity.name}.`)
            }
        }
    
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"
    
    return walkerHTML

}

