import React from "react";

export const SectionThreeTopLeft: React.FC = ({ }) => {

    return (


        <div className="section-three-top-left">

            <img

                className="section-three-top-left-image"

                src={"assets/customer-one.png"}

                alt={"customer-income-high"}

            />

            <div className="section-three-top-left-chart">

                <img

                    src="assets/customer-zero-chart.png"

                    alt={"chart"}

                />

                <h2> 30% </h2>

                <small> More income in June </small>

            </div>

        </div>

    );

}
