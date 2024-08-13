const deletePetReq = (petId) => {
    axios.delete(`http://localhost:8000/api/pets/${petId}`)
    .then(res =>{
        console.log(res);
        setPets(pets.filter(pet => pet._id !== petId))
    
        }
    )
    .catch(err => console.log(err))
}
const deletePet = async (petId) => {
    const result = await confirm(`Are you sure you want adopt this pet?`);
    if (result) {
        console.log("You click yes!");
        deletePetReq(petId);
        return;
    }
    console.log("You click No!");
}
<button className={styles.delete} onClick={(e) => {deletePirate(pet._id)}}>edit</button>

const handlePet = (id) => {
    const petUrl = "/pets/" + id;
navigate(petUrl);
}
const handlePetEdit = (id) => {
const petUrlEdit = "/petsUpdate/" + id;
navigate(petUrlEdit);
}

                    <button className={styles.view} onClick={(e) => handlePet(pet._id)}>details</button>
                    <button className={styles.view} onClick={(e) => handlePetEdit(pet._id)}>edit</button>