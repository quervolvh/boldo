import React, { useState } from "react";
import { BlogItem, Button, ComponentHolder } from "components";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const SectionSix: React.FC = ({ }) => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.8,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        }

        // More useful options...
    });

    const blogItems = [

        {

            image: "assets/blog-one.png",

            date: "November 22, 2021",

            text: "Pitch termsheet backing validation focus release.",

            author: {

                image: "assets/blog-one-avatar.png",

                name: "Chandler Bing"

            }

        },

        {

            image: "assets/blog-two.png",

            date: "November 22, 2021",

            text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",

            author: {

                image: "assets/blog-two-avatar.png",

                name: "Rachel Green"

            }

        },

        {

            image: "assets/blog-three.png",

            date: "November 22, 2021",

            text: "Beta prototype sales iPad gen-z marketing network effects value proposition",

            author: {

                image: "assets/blog-three-avatar.png",

                name: "Monica Geller"

            }

        }

    ];

    return (

        <ComponentHolder

            reffer={observe}

            bodyClass={classnames(

                "section-six",

                "lets-animate-opacity",

                presence && "transition-reveal"

            )}

        >

            <div className="section-six-body">

                <div className="section-six-heading">

                    <p> Our Blog </p>

                    <h1> Value proposition accelerator product management venture </h1>

                </div>

                <div className="section-six-content">

                    {blogItems.map((item, index) =>

                        <BlogItem

                            {...item}

                            key={`blog-item-${index}`}

                        />

                    )}

                </div>

                <Button className="no-bg" label="Load more" />

            </div>


        </ComponentHolder>

    );

}
