import React from "react";
import { Eye, Star, Sun, ViewFormatter } from "components";

export const SectionThreeBottomLeft: React.FC = ({ }) => {

    return (

        <div className="section-three-top-right">

            <h1> We connect our customers with the best, and help them keep up-and stay open. </h1>

            <ViewFormatter

                svgLeftIcon={Star}

                title={`We connect our customers with the best.`}

            />

            <ViewFormatter

                svgLeftIcon={Eye}

                title={`Advisor success customer launch party.`}

            />

            <ViewFormatter

                svgLeftIcon={Sun}

                title={`Business-to-consumer long tail.`}

            />

        </div>

    );

}
