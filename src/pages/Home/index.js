import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img 
                    src="https://static.netshoes.com.br/produtos/tenis-olympikus-hobby-feminino/06/D22-2978-006/D22-2978-006_zoom2.jpg?ts=1567444589&ims=326x" 
                    alt="Tênis"
                />
                <strong>Texto demasiadamente gigantesco, justamente para testar o alinhamento e o encaixe e verificar conflito com o button</strong>
                <span> R$ 79,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff"/>
                    </div>
                    
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img 
                    src="https://static.netshoes.com.br/produtos/tenis-olympikus-hobby-feminino/06/D22-2978-006/D22-2978-006_zoom2.jpg?ts=1567444589&ims=326x" 
                    alt="Tênis"
                />
                <strong>Belo Tenis</strong>
                <span> R$ 79,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff"/>
                    </div>
                    
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img 
                    src="https://static.netshoes.com.br/produtos/tenis-olympikus-hobby-feminino/06/D22-2978-006/D22-2978-006_zoom2.jpg?ts=1567444589&ims=326x" 
                    alt="Tênis"
                />
                <strong>Belo Tenis</strong>
                <span> R$ 79,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff"/>
                    </div>
                    
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img 
                    src="https://static.netshoes.com.br/produtos/tenis-olympikus-hobby-feminino/06/D22-2978-006/D22-2978-006_zoom2.jpg?ts=1567444589&ims=326x" 
                    alt="Tênis"
                />
                <strong>Belo Tenis</strong>
                <span> R$ 79,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff"/>
                    </div>
                    
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>

            <li>
                <img 
                    src="https://static.netshoes.com.br/produtos/tenis-olympikus-hobby-feminino/06/D22-2978-006/D22-2978-006_zoom2.jpg?ts=1567444589&ims=326x" 
                    alt="Tênis"
                />
                <strong>Belo Tenis</strong>
                <span> R$ 79,90 </span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart color="#fff"/>
                    </div>
                    
                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}