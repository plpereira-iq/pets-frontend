import React, { useState} from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';

const UpdatePet = () => {
    const {id} = useParams();
    const [petData, setPetData] = useState({
        Name: '',
        PetType: '',
        Description: '',
        SkillOne: '',
        SkillTwo: '',
        SkillTree: ''
    });

    useEffect(() => {
        // Cargar los datos actuales de la mascota
        axios.get(`http://localhost:8000/api/pets/` + id)
            .then(response => {
                setPetData(response.data);
            })
            .catch(error => {
                console.error('Error al cargar los datos de la mascota:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setPetData({
            ...petData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/` + id, petData)
            .then(response => {
                console.log('Mascota actualizada:', response.data);
            })
            .catch(error => {
                console.error('Error al actualizar la mascota:', error);
            });
    };


    return (
        <div>
            <h1>Petshelter</h1>
            <Link to="/pets">Back to home</Link>
            <h2>Edit {petData.Name}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Nombre:</label>
                    <input
                        type="text"
                        id="Name"
                        name="Name"
                        value={petData.Name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="PetType">Tipo de Mascota:</label>
                    <input
                        type="text"
                        id="PetType"
                        name="PetType"
                        value={petData.PetType}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Description">Descripción:</label>
                    <input
                        type="text"
                        id="Description"
                        name="Description"
                        value={petData.Description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <h3>Skill (opcional)</h3>
                    <div>
                    <label htmlFor="SkillOne">Skill 1:</label>
                    <input
                        type="text"
                        id="SkillOne"
                        name="SkillOne"
                        value={petData.SkillOne}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="SkillTwo">Skill 2:</label>
                    <input
                        type="text"
                        id="SkillTwo"
                        name="SkillTwo"
                        value={petData.SkillTwo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="SkillTree">Skill 3:</label>
                    <input
                        type="text"
                        id="SkillTree"
                        name="SkillTree"
                        value={petData.SkillTree}
                        onChange={handleChange}
                    />
                </div>
                </div>
                
                <button type="submit">Edit Pet</button>
            </form>
        </div>
    );
};

export default UpdatePet;