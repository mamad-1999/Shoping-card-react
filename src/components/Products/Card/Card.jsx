import React, { useContext, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import Interest from './Interest'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../Context/ContextProvider'

export default function Card(props) {
    const { dispath } = useContext(ProductContext)
    const [isAddToBasket, setIsAddToBasket] = useState(false)

    const handelClick = () => {
        dispath({ type: "ADD_TO_BASKET", payload: props.id })
        setIsAddToBasket(true)

        setTimeout(() => {
            setIsAddToBasket(false)
        }, 3000);
    }

    return (
        <div key={props.id} className="box">
            <Link to={`/${props.id}`}>
                <img className='product_img' src={props.image} alt='product' />
                <div className='content'>
                    <div className='title'>
                        <span>{props.title}</span>
                    </div>
                    <div className='price'>
                        <span>{props.price.toLocaleString()} تومان</span>
                    </div>
                </div>
            </Link>
            <button
                onClick={handelClick}
                className={`products_button ${isAddToBasket ? 'add_button' : 'buy_button'}`}>
                {isAddToBasket ? ('افزوده شد') : (
                    'خرید'
                )}
                <FiShoppingCart className='buy_icon' />
            </button>
            <Interest interest={props.isInterest} id={props.id} />
        </div>
    )
}
