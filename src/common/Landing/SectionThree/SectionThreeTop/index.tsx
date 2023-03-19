import React, { useState } from "react";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";
import { SectionThreeTopLeft } from "./SectionThreeTopLeft";
import { SectionThreeTopRight } from "./SectionThreeTopRight";

export const SectionThreeTop: React.FC = ({ }) => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.3,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        },

        // More useful options...
    });

    return (

        <div

            ref={observe}

            className={classnames(

                "section-three-top",

                "lets-animate",

                presence && "transition-reveal"

            )}

        >

            <SectionThreeTopLeft />

            <SectionThreeTopRight />

        </div>

    );

}
