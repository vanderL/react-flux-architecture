import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
      <Container>
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
          <Cart to="/cart">
              <div>
                  <strong> Meu carinho</strong>
                  <span>3 unidades</span>
                  <MdShoppingBasket size="36" color="#fff" />
              </div>

          </Cart>
      </Container>
  );
}
