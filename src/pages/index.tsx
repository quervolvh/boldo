import React from 'react';
import { LandingLayout } from 'layout';
import { SectionOne } from 'common/Landing/SectionOne';
import { SectionOnePartners } from 'common/Landing/SectionOne/SectionOnePartners';
import { SectionTwo } from 'common/Landing/SectionTwo';
import { SectionThree } from 'common/Landing/SectionThree';
import { SectionFour } from 'common/Landing/SectionFour';
import { SectionFive } from 'common/Landing/SectionFive';
import { SectionSix } from 'common/Landing/SectionSix';
import { SectionSeven } from 'common/Landing/SectionSeven';

const Home: React.FC<Props> = ({ isMobile, deviceWidth }) => {

    return (

        <LandingLayout
            headTitle={"Boldo"}
            isMobile={isMobile}
            deviceWidth={deviceWidth}
            showFooter={true}
            showHeader={true}
        >

            <SectionOne />

            <SectionOnePartners />

            <SectionTwo />

            <SectionThree />

            <SectionFour />

            <SectionFive />

            <SectionSix />

            <SectionSeven />

        </LandingLayout >

    )
}

export default Home;

interface Props {
    isMobile: boolean,
    deviceWidth: number
}
