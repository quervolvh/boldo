import React from 'react';
import { FullHeader } from './FullHeader';
import { MobileHeader } from './MobileHeader';

export const Header: React.FC<Props> = ({ isMobile }): JSX.Element => {

    return (
        <>

            {(isMobile) ?
                <MobileHeader /> :
                <FullHeader />
            }

        </>
    )
}
interface Props {
    isMobile: boolean,
    deviceWidth: number,
}
