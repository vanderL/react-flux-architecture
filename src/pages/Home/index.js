import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

export default function Home() {
    return (
        <div>
            <h1>Olá Brasil! Sou a Home</h1>
            <Link to='/cart'> Carrinho </Link>
        </div>
    )
}