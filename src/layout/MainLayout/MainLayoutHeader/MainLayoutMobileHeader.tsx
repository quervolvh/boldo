import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { MobileHeaderToggler } from 'components';
import UserAvatar from 'assets/svg/user-avatar.svg';
import { SIDENAVLINKS } from 'constants/index';
import { useRouter } from 'next/router';
import { useOnClickOutside } from 'hooks';

export const MainLayoutMobileHeader: React.FC<Props> = ({ active, avatar }): JSX.Element => {
    const ref: React.MutableRefObject<any> = useRef();
    const [isExpanded, setIsExpanded] = useState(false);

    const router = useRouter();

    const reset = () => {
        router.push("/");
    };

    useOnClickOutside(ref, () => isExpanded ? setIsExpanded(false) : null);

    return (
        <div className="landingLayout-header-mobile main-layout-header-mobile" ref={ref} >

            <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

            <div className={`landingLayout-header-mobile-exp ${isExpanded ? "expanded" : ""}`}>

                <MobileHeaderToggler setExpansion={setIsExpanded} isExpanded={isExpanded} />

                <div
                    className="main-layout-header-mobile-userBox"
                    tabIndex={0}
                    role={"button"}
                    onKeyDown={(e) => e.key === "Enter" && router.push("/account")}>
                    <Link href={"/account"}>
                        <img src={avatar || UserAvatar} alt={'user--'} />
                    </Link>
                </div>

                <div className="main-layout-header-mobile-links">

                    <div className="main-layout-sideNav-content">

                        {SIDENAVLINKS.map((item, index) => {
                            // const Icon = item.icon;
                            const activeItem = active?.toLocaleLowerCase() || "";
                            return (
                                <div
                                    onClick={() => item.link === "/logout" ? reset() : null}
                                    className="main-layout-sideNav-item"
                                    key={`side-nav-item-${index}`}>
                                    <Link

                                        href={item.link === "/logout" ? '' : item.link}

                                        className={(activeItem === String(item.title).toLowerCase()) ? 'active' : ''}
                                        role="button"
                                    >
                                        <div className="bulb" />
                                        <span> {item.title} </span>
                                    </Link>

                                </div>
                            )
                        })}

                    </div>

                </div>

            </div>

        </div>
    );
}

interface Props {
    active: string,
    avatar?: string
}
