import React, { useState } from "react";
import { Button, ComponentHolder, FormField } from "components";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const SectionSeven: React.FC = ({ }) => {

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

            className={classnames(

                "section-seven",

                "lets-animate",

                presence && "transition-reveal"

            )}

            bodyClass="section-seven-body"

        >

            <>

                <div 
                    
                    className="section-one-ellipse section-seven-body-ellipse" 
                    
                />

                <div

                    className="section-seven-content"

                    ref={observe}

                >

                    <h1> An enterprise template to ramp up your company website </h1>

                    <div className="section-seven-input">

                        <FormField placeHolder="Your email address" />

                        <Button label="Start now" />

                    </div>

                </div>

            </>


        </ComponentHolder>

    );

}
