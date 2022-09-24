import React from "react";
import { nanoid } from "nanoid";

import PledgeCard from "./PledgeCard";

function Content({ tiers, handlePledgeCardClick }) {
  return (
    <section className="content">
      <h3 className="content-title">About this project</h3>
      <p className="content-text">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p className="content-text">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      {tiers.map(
        (tier) =>
          tier.price !== false && (
            <PledgeCard
              id={tier.id}
              title={tier.title}
              price={tier.price}
              quantity={tier.quantity}
              text={tier.text}
              handlePledgeCardClick={handlePledgeCardClick}
            />
          )
      )}
    </section>
  );
}

export default Content;
