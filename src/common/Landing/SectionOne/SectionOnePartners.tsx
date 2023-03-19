import React from "react";

export const SectionOnePartners = () => {

    const images = [

        {
            src: "svg/boldo-dual.svg",
            alt: "boldo"

        },

        {
            src: "svg/presto.svg",
            alt: "presto"

        },

        {
            src: "svg/boldo-dual.svg",
            alt: "boldo"

        },

        {
            src: "svg/presto.svg",
            alt: "presto"

        },

        {
            src: "svg/pres.svg",
            alt: "pres"

        }

    ];

    return (

        <div className="section-one-partners">

            {images.map((item, index) => <img {...item} key={`section-partner-${index}`} />)}

        </div>

    );

}
