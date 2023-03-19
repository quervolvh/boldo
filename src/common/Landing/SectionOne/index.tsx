import React, { useState } from "react";
import { ComponentHolder } from "components";
import { SectionOneLeft } from "./SectionOneLeft";
import { SectionOneRight } from "./SectionOneRight";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const SectionOne = () => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.25,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        },

        // More useful options...
    });

    return (

        <ComponentHolder

            bodyClass={classnames(

                "section-one",

                "lets-animate-opacity",

                presence && "transition-reveal"

            )}

            reffer={observe}

        >

            <>


                <div className="section-one-ellipse" />

                <SectionOneLeft />

                <SectionOneRight />

            </>

        </ComponentHolder>

    );

}
