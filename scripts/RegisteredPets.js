import { getPets, getWalkers } from "./database.js"



const pets = getPets()



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")
            const petIdNumber = parseInt(petId)

            const walkers = getWalkers()

            const foundPet = pets.find(
                (pet) => {
                    return pet.id === petIdNumber
                }
            )

            const foundWalker = walkers.find(
                (walker) => {
                    return walker.id === foundPet.walkerId;
                }
            )
            window.alert(`${foundPet.name} is being walked by ${foundWalker.name}`)
        }
    }

)
export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

