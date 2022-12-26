import React from "react";
import offerCode from "../../Offer";

function OfferBadge() {
  return (
    <div className="offerBadge">
      <span>%{offerCode.disCount}</span>
    </div>
  );
}

export default OfferBadge;
