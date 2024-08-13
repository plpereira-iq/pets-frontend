import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const Header = (props) => {
    const { pageInd } = props;
    return (
        <header className={styles.header}>
            <h1>{pageInd}</h1>
            {
                pageInd === "PetShelter" ?
                <Link className={styles.headerlink} to= {"/pet/new"}> Add Pet</Link>:
                <Link className={styles.headerlink} to= {"/pets/petsUpdate/:id/"}> Update Pet</Link> 
            }
        </header> 
    )
}

export default Header;