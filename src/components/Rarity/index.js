import React from "react";
import {
  RarityContainer,
  RarityWrapper,
  RarityText,
  RarityImage,
} from "./RarityElements";
import rarity_image from "../../images/rarity-image.png";
import rarity_title from "../../images/rarity-text.png";
import traits from "../../images/traits.png";
import tiers_text from "../../images/tiers-text.png";
import tiers from "../../images/tiers.png";

const Rarity = () => {
  return (
    <RarityContainer>
      <img
        id="rarity-title"
        src={rarity_title}
        alt={"Rarity"}
        width={162.3}
        height={60}
      />
      <RarityWrapper>
        <RarityText>
          <img
            class="centered"
            src={traits}
            alt={"Trait"}
            width={111}
            height={40}
          />
          <p class="black-text">
            Our artist digitally hand-drew hundreds of different traits falling
            into five main categories: backgrounds, bodies, TVs, screens and
            accessories. Each trait has an associated rarity that dictates its
            frequency of appearance within the collection. Additional ‘Rares’
            which combine two or more of the main traits can be found within the
            collection as well.
          </p>
          <img
            class="centered"
            src={tiers_text}
            alt={"Tiers"}
            width={90.35}
            height={40}
          />
          <p class="black-text">
            The combination of traits within your Ledgers NFT determines its
            rarity, but the background trait determines which tier it falls
            into. Each tier has a given amount of backgrounds associated with
            it.
          </p>
          <p class="black-text">
            Check your Ledgers NFT background to see which rarity tier you
            minted!
          </p>
          <img class="responsive-tiers centered" src={tiers} alt={"Tiers"} />
        </RarityText>
        <RarityImage>
          <img class="responsive" src={rarity_image} alt={"rarity image"} />
        </RarityImage>
      </RarityWrapper>
    </RarityContainer>
  );
};

export default Rarity;
