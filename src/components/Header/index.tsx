import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import styles from './styles.module.scss';

export function Header() {
    const [isWideScreen, setIsWideScreen] = useState(true);
    const [menuMobile, setMenuMobile] = useState(false);

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width <= 768) {
            setIsWideScreen(false);
        } else {
            setIsWideScreen(true);
        }
    }, [width]);

    function handleMenuMobileOpen() {
        setMenuMobile(true);
    }

    return (
        <div className={styles.container}>
            <span className={styles.logo}>
                <img src="../../assets/logo.png" />
            </span>
            {isWideScreen ? (
                <ul className={styles.menuWide}>
                    <li>HOME</li>
                    <li>A SOFTGRAF</li>
                    <li>SOLUÇÕES</li>
                    <li>SUPORTE</li>
                    <li>CONTATO</li>
                </ul>
            ) : (
                <span>
                    MENU
                    <button onClick={() => {}} className={styles.btOpenMenu}>
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
                        <button onClick={() => {}} className={styles.btClose}>
                            <CgClose size={44} color={'var(--color-white)'} />
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
    );
}
