import React, { useState } from "react";
import { ViewFormatter, ArrowDown } from "components";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const SectionFiveTexts: React.FC = ({ }) => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.8,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        }

        // More useful options...
    });

    return (

        <div

            ref={observe}

            className={classnames(

                "section-five-flex",
                
                "lets-max-animate-opacity",

                presence && "transition-reveal"

            )}>

            <div className="section-five-flex-left">

                <h1> We connect our customers with the best, and help them keep up-and stay open. </h1>

            </div>

            <div>

                <ViewFormatter

                    title="We connect our customers with the best?"

                    svgRightIcon={ArrowDown}

                />

                <ViewFormatter

                    title="Android research & development rockstar? "

                    svgRightIcon={ArrowDown}

                />

            </div>

        </div>

    );

}
