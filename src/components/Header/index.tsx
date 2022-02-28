import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import styles from './styles.module.scss';

export function Header() {
    const [isWideScreen, setIsWideScreen] = useState(true);
    const [menuMobile, setMenuMobile] = useState(false);

    const { width } = useWindowDimensions();

    useEffect(() => {
        setIsWideScreen(width > 768);
    }, [width]);

    function handleMenuMobileOpen() {
        setMenuMobile(true);
    }

    function handleMenuMobileClose() {
        setMenuMobile(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <span className={styles.logo}>
                    <img src="../../assets/logo.png" />
                </span>
                {isWideScreen ? (
                    <menu className={styles.menuWide}>
                        <Link to="/">HOME</Link>
                        <Link to="/about">A SOFTGRAF</Link>
                        <Link to="/">SOLUÇÕES</Link>
                        <Link to="/">SUPORTE</Link>
                        <Link to="/">CONTATO</Link>
                    </menu>
                ) : (
                    <span onClick={handleMenuMobileOpen}>
                        MENU
                        <button className={styles.btOpenMenu}>
                            <GiHamburgerMenu
                                size={32}
                                color={'var( --primary-color)'}
                            />
                        </button>
                    </span>
                )}
                {menuMobile && (
                    <div className={styles.menuMobile}>
                        <span>
                            <button
                                onClick={handleMenuMobileClose}
                                className={styles.btClose}
                            >
                                <CgClose
                                    size={44}
                                    color={'var(--color-white)'}
                                />
                            </button>
                        </span>

                        <ul>
                            <li>HOME</li>
                            <li>A SOFTGRAF</li>
                            <li>SOLUÇÕES</li>
                            <li>SUPORTE</li>
                            <li>CONTATO</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
