import { getPets, getWalkers } from "./database.js"



const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            for (const pet of pets) {

                if (pet.id == parseInt(petId)) {
                    
                    const getPetWalkers = walkers.filter(walker => walker.petId === pet.id);

                    const foundWalkerName = getPetWalkers.find(item => item.name === wa)
                    
                    //const found = getPetWalkers.find(element => element.name )

                    window.alert(`${pet.name} is being walked by ${foundWalkerName.name}`)
                }
            }
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

