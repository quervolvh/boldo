import React from "react";

export const SectionThreeBottomRight: React.FC = ({ }) => {

    return (


        <div className="section-three-top-left">

            <img

                className="section-three-top-left-image"

                src={"assets/customer-zero.png"}

                alt={"customer-income-high"}

            />

            <div className="section-three-top-left-chart">

                <img

                    src="assets/customer-one-chart.png"

                    alt={"chart"}

                />

                <div> <span /> <small> 35% -  Agile Development </small> </div>

                <div> <span /> <small> 30% -  Investor bandwidth </small> </div>

                <div> <span /> <small> 35% -  A/B testing </small> </div>

            </div>

        </div>

    );

}
