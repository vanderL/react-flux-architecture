import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdRemoveCircleOutline, MdDelete, MdAddCircleOutline } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../util/format'

import * as CartActions from '../../store/modules/cart/action';

function Cart({ cart, removeFromCart, updateAmount, total }) {
    function incrementAmount(product) {
        updateAmount(product.id, product.amount + 1);
    }

    function decrementAmount(product) {
        updateAmount(product.id, product.amount - 1);
    }


    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBOTOTAL</th>
                        <th />
                    </tr>
                </thead>

                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                            <img 
                                src={product.image} 
                                alt={product.title}
                            />
                            </td>
                            <td>
                                <strong>{product.name}</strong>
                                <span>{product.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => decrementAmount(product)}>
                                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                                    </button>
                                    <input type="number" readOnly value={product.amount}/>
                                    <button type="button" onClick={() => incrementAmount(product)}>
                                        <MdAddCircleOutline size={20} color="#7159c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    onClick={() => removeFromCart(product.id)}
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button" > Finalizar pedido </button>
            
                <Total>
                    <span>TOTAL</span>
                    <strong> {total} </strong>
                </Total>
            </footer>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.map( product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
    })),
    total: formatPrice(
        state.cart.reduce((total, product) => {
            return total + product.amount * product.price;
        }, 0)
    )
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);