import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


/* Function whose responsibility is to find the walker assigned to a pet. It takes an object and a list. It then iterates 
through that list, and if the primary key of the object in that list matches the foreign key in the initial object
that list object get stored in an intially null variable, now a list of objects. */
const findWalker = (pet, allWalker) => {
    let petWalker = []

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

/* Function whose responsibility is to find the city of the walker assigned to a pet. It takes an object and a list. It then iterates 
through that list, and if the primary key of the object in that list matches the foreign key in the initial object
that list object get stored in an intially null variable, now a list of objects. */
const cityFinder = (walker, allCities) => { 
    let walkerCity = []

    for (const city of allCities) {
        if (city.id === walker.cityId) {
            walkerCity = city
        }
    }
    return walkerCity
}



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)/* currentPetWalker is just the result of iterating through pets and running the 
        findWalker function, after each iteration and running the individual result is stored in currentPetWalker and used in the HTML */
        const currentWalkerCity = cityFinder(currentPetWalker , cities)/*why currentPetWalker works? currentPetWalker is an object of the 
        matching primary and foreign keys of the objects of walkers and pets lists. CityFinder iterates through cities and matches the id 
        with currentPetWalker.cityId and returns those that match  */
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by ${currentPetWalker.name} in ${currentWalkerCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

