import React, { useState } from "react";
import { ComponentHolder } from "components";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";
import { SectionFiveTexts } from "./SectionFiveTexts";

export const SectionFive: React.FC = ({ }) => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.3,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        }

        // More useful options...
    });

    return (

        <ComponentHolder

            bodyClass="section-five"

            reffer={observe}

        >

            <div className="section-five-body">

                <div className={classnames(

                    "section-five-image",

                    "lets-animate",

                    presence && "transition-reveal"

                )}>

                    <img src="assets/connect.png" alt={"connect"} />

                </div>

               <SectionFiveTexts />

            </div>


        </ComponentHolder>

    );

}
