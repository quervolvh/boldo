import React from "react";
import { Button, CheckMark, ViewFormatter } from "components";

export const SectionThreeTopRight: React.FC = ({ }) => {

    return (

        <div className="section-three-top-right">

            <h1> We connect our customers with the best, and help them keep up-and stay open. </h1>

            <ViewFormatter

                svgLeftIcon={CheckMark}

                title={`We connect our customers with the best.`}

            />

            <ViewFormatter

                svgLeftIcon={CheckMark}

                title={`Advisor success customer launch party.`}

            />

            <ViewFormatter

                svgLeftIcon={CheckMark}

                title={`Business-to-consumer long tail.`}

            />

            <Button label="Start now" />

        </div>

    );

}
