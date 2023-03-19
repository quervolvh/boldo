import React, { useState } from "react";
import { ArrowRight, ComponentHolder } from "components";
import Link from "next/link";
import { useInView } from "react-cool-inview";
import { classnames } from "utils";

export const ServiceItem: React.FC<{ src: string, label: string, alt: string }> = ({ src, alt, label }) => {

    return (

        <div className="service-item">

            <img src={src} alt={alt} />

            <p className="service-item-label"> {label} </p>

            <Link href={"*"} >

                <p> Explore Page </p>

                <span dangerouslySetInnerHTML={{ __html: ArrowRight }} />

            </Link>

        </div>

    )

}

export const SectionTwo = () => {

    const [presence, setPresence] = useState<boolean | "complete">(false);

    const { observe } = useInView({

        threshold: 0.3,

        onEnter: ({ unobserve }) => {

            setPresence(true);

            unobserve();

        },

        // More useful options...
    });

    const items = [

        {
            src: "assets/section-two-one.png",
            alt: "cool-service",
            label: "Cool feature title"

        },

        {
            src: "assets/section-two-two.png",
            alt: "cool-service",
            label: "Even cooler feature"

        },

        {
            src: "assets/section-two-three.png",
            alt: "cool-service",
            label: "Cool feature title"

        }

    ]

    return (

        <ComponentHolder

            bodyClass="section-two-body"

            className={classnames(

                "section-two",

                "lets-animate-opacity",

                presence && "transition-reveal"

            )}

            reffer={observe}

        >

            <h2> Our Services </h2>

            <h1>

                Handshake infographic mass market crowdfunding iteration.

            </h1>

            <div className="section-two-services">

                {items.map((item, index) =>

                    <ServiceItem

                        {...item}

                        key={`section-partner-${index}`}

                    />

                )}

            </div>

        </ComponentHolder>

    );

}
