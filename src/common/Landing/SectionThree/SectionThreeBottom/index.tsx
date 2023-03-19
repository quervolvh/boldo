import React, { useState } from "react";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";
import { SectionThreeBottomLeft } from "./SectionThreeBottomLeft";
import { SectionThreeBottomRight } from "./SectionThreeBottomRight";

export const SectionThreeBottom: React.FC = ({ }) => {

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

                "section-three-top section-three-bottom",

                "lets-animate",

                presence && "transition-reveal"

            )}

        >

            <SectionThreeBottomLeft />

            <SectionThreeBottomRight />

        </div>

    );

}
