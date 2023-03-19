import React, { useEffect } from 'react';
import Link from 'next/link';
import { rightLinks } from 'constants/index';
import { classnames } from 'utils';
import { Button } from 'components';


export const FullHeader: React.FC = ({ }): JSX.Element => {

    const scrollListener = () => {

        if (window.scrollY > 150 && window.screenY < 180) {

            document?.getElementsByClassName?.("landingLayout-header")?.[0]?.classList?.add("header-stick-to-background");

        }

        if (window.scrollY < 120) {

            document?.getElementsByClassName?.("landingLayout-header")?.[0]?.classList?.remove("header-stick-to-background");

        }

    };

    useEffect(() => {

        if (typeof window !== "undefined") {

            window.addEventListener("scroll", scrollListener, true);


            return (() => {

                window.removeEventListener("scroll", scrollListener, true)

            })

        }

        // eslint-disable-next-line
    }, [document]);

    return (
        <div
            className={classnames('landingLayout-header', 'with-shades')}>

            <div className="landingLayout-header-holder">

                <div className="landingLayout-header-left">

                    <Link
                        href={"*"}
                    >
                        <img src={"svg/boldo-dual.svg"} alt={"boldo"} />

                    </Link>

                </div>



                <div className="landingLayout-header-right">

                    {rightLinks.map((item, index) =>

                        <Link
                            key={`landingLayout-header-right-item-${index}`}
                            className={item.class}
                            href={item.link || ""}
                        >

                            {item.title}

                        </Link>

                    )}

                    <Button className='no-bg' label='Log In' />

                </div>


            </div>

        </div>
    );
}
