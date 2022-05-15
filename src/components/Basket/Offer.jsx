import React, { useState, useContext } from 'react'
import { ProductContext } from '../Context/ContextProvider'

export default function Offer() {
    const [offerInput, setOfferInput] = useState('')
    const { dispath } = useContext(ProductContext)

    const inputHandler = (e) => {
        setOfferInput(e.target.value)
    }

    const checkOfferCode = () => {
        if (offerInput) {
            dispath({ type: 'OFFER_CODE', payload: offerInput })
        }
    }
    return (
        <div className='offer_container'>
            <span>کد تخفیف دارید؟</span>
            <div className='offer_box'>
                <input value={offerInput}
                    onChange={(e) => inputHandler(e)}
                    type="text"
                    placeholder='کد تخفیف: ABCD' />
                <button onClick={checkOfferCode}>اعمال کد</button>
            </div>
        </div>
    )
}
