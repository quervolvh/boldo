import React, { useState } from "react";
import { ComponentHolder, DualArrows } from "components";
import { ReviewItem } from "./ReviewItem";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const SectionFour = () => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.3,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        }

        // More useful options...
    });

    const items = [

        {
            image: "assets/reviewer-one.png",

            text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",

            author: "Albus Dumbledore",

            position: "Manager @ Howarts"

        },

        {

            image: "assets/reviewer-two.png",

            text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",

            author: "Severus Snape",

            position: "Manager @ Slytherin"

        },

        {

            image: "assets/reviewer-three.png",

            text: "“Release facebook responsive web design business model canvas seed money monetization.”",

            author: "Harry Potter",

            position: "Team Leader @ Gryffindor"

        }

    ];

    return (

        <ComponentHolder

            className="section-four"

            bodyClass={classnames(

                "section-four-body",

                "lets-animate",

                presence && "transition-reveal"

            )}

            reffer={observe}

        >

            <div className="section-four-top">

                <h1> An enterprise template to ramp up your company website </h1>

                <span dangerouslySetInnerHTML={{ __html: DualArrows }} />

            </div>

            <div className="section-four-bottom">

                {items.map((item, index) =>

                    <ReviewItem

                        key={`review-item-${index}`}

                        {...item}


                    />

                )}

            </div>



        </ComponentHolder>

    );

}
