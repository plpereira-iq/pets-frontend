import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "./style.module.css"


const AddPet = (props) => {

    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [PetType, setPetType] = useState("");
    const [SkillOne, setSkillOne] = useState("");
    const [SkillTwo, setSkillTwo] = useState("");
    const [SkillTree, setSkillTree] = useState("");
    const [errors, setError] = useState({});

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/pets', {
            Name,
            PetType,
            Description,
            SkillOne,
            SkillTwo,
            SkillTree
        })
        .then((res) => {
            console.log(`you have added the pet ${Name}`)
            navigate('/pets')
        })
        .catch((err) => {
            console.log(err.response.data)
            console.log(`there was this problem with adding ${Name}: ${err}`)
            setError(err.response.data.errors)
            
        })
        
    }

    return (
    <div>
        <h1>Petshelter</h1>
        <Link to= {"/pets"}> back to home</Link>
        <h2>Know a Pet needing a home?</h2>
        <form className={styles.card} onSubmit={handleSubmit}>
            <div className={styles.formcolumn}>
                <label>Pet name:</label>
                <input type='text' value = {Name} onChange = {(e) => setName(e.target.value)} />
                {
                    errors.Name ?
                    <span>**{errors.Name.message}</span>:
                    null
                }

                <label>Pet type:</label>
                <input type='text' value = {PetType} onChange = {(e) => setPetType(e.target.value)} />

                <label>Description:</label>
                <input type='text' value = {Description} onChange = {(e) => setDescription(e.target.value)} />

<div>
    <h3>Skills (optional):</h3>
    <label>Skill 1:</label>
                <input type='text' value = {SkillOne} onChange = {(e) => setSkillOne(e.target.value)} />
                <label>Skill 2:</label>
                <input type='text' value = {SkillTwo} onChange = {(e) => setSkillTwo(e.target.value)} />
                <label>Skill 3:</label>
                <input type='text' value = {SkillTree} onChange = {(e) => setSkillTree(e.target.value)} />

</div>
            </div>
            <input className={styles.addpetbtn} type='submit' value='Add Pet'/>
        </form>
    </div>
    )
}

export default AddPet;