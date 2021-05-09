import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';

function Header({ cartSize }) {
  return (
      <Container>
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
          <Cart to="/cart">
              <div>
                  <strong> Meu carinho</strong>
                  <span>{cartSize} unidades</span>
                  <MdShoppingBasket size="36" color="#fff" />
              </div>

          </Cart>
      </Container>
  );
}
 export default connect(state => ({
   cartSize: state.cart.length,
 }))(Header);