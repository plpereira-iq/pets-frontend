import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./style.module.css"
import Header from './Header';
import { Link } from 'react-router-dom';
import { Card, CardContent} from "@mui/material";


const OnePet = (props) => {

    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [Name, setName] = useState(pet.Name); 
    const [PetType, setPetType] = useState(pet.PetType);
    const [Description, setDescription] = useState(pet.Description);
    const [SkillOne, setSkillOne] = useState(pet.SkillOne);
    const [SkillTwo, setSkillTwo] = useState(pet.SkillTwo);
    const [SkillTree, setSkillTree] = useState(pet.SkillTree);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then(res => {
                console.log(res.data.Name);
                setName(res.data.Name);
                setPetType(res.data.PetType);
                setDescription(res.data.Description);
                setSkillOne(res.data.SkillOne);
                setSkillTwo(res.data.setSkillTwo);
                setSkillTree(res.data.setSkillTree);
                // setLoaded(true);
            })
    }, [])
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

    return (
        <div>
            <h1>Petshelter</h1>
            <Link to= {"/pets"}> back to home</Link>
            <h2>Details about {Name}</h2>
            <button className={styles.delete} onClick={(e) => {deletePet(pet._id)}}>Adopt to {Name}</button>
            <div>
                        <div>
                            <div className={styles.card}>
                                <div>
                                    <h2>About</h2>
                                    <p>Type: {PetType}</p>
                                    <p>Description: {Description}</p>
                                    <div className={styles.content}>
                                    <p>Skills: {SkillOne}, {SkillTwo}, {SkillTree}</p>
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default OnePet;