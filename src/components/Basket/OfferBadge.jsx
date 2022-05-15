import React from 'react'
import offerCode from '../../Offer'

export default function OfferBadge() {
    return (
        <div className='offerBadge'>
            <span>%{offerCode.disCount}</span>
        </div>
    )
}
