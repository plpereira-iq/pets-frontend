import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import Header from './Header';
import { confirm } from "react-confirm-box";  
import 'bootstrap/dist/css/bootstrap.min.css';


const AllPets = () => {

    const [pets, setPets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pets-backend-beta.vercel.app/api/pets")
            .then((allPets) => {
                // console.log(allPets);
                console.log(allPets.data);
                // console.log(allPets.data.Name);
                setPets(allPets.data);
                console.log(pets.Name);
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    },[])

    return (
        
        <div>
            <h1 className={styles.titleh1}>PetShelter</h1>
            <Link to= {"/pets/new"} className={styles.goTo}> Add Pet</Link>
            <h2>These pets are looking for a good home</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.Name}</td>
                            <td>{pet.PetType}</td>
                            <td>
                                <a href={`/pets/${pet._id}/`} className='btn mr-2'>details</a>
                                <a href={`/petsUpdate/${pet._id}/`}className='btn mr-2'>edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;