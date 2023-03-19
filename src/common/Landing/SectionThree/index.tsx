import React from "react";
import { ComponentHolder } from "components";
import { SectionThreeTop } from "./SectionThreeTop";
import { SectionThreeBottom } from "./SectionThreeBottom";

export const SectionThree: React.FC = ({ }) => {

    return (

        <ComponentHolder

            bodyClass="section-three"

        >

            <SectionThreeTop />

            <SectionThreeBottom />

        </ComponentHolder>

    );

}
