import { useEffect, useRef, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import { testimonialSlider } from '../../services/api/slider-testimonial';

import styles from './styles.module.scss';

export function Testimonial() {
    const [value, setValue] = useState(0);
    const [fadeClass, setFadeClass] = useState(styles.mFadeIn);

    const isFadingRef = useRef(false);

    const updateValue = (_value: number) => {
        if (isFadingRef.current === false) {
            isFadingRef.current = true;
            setFadeClass(styles.mFadeOut);
            setTimeout(() => {
                setValue(_value);
            }, 500);
        }
    };

    useEffect(() => {
        // this will trigger fadeIn once value is updated
        setFadeClass(styles.mFadeIn);

        // allow value to be updated
        isFadingRef.current = false;

        if (testimonialSlider.length) {
            const interval = setInterval(() => {
                if (value < testimonialSlider.length - 1) {
                    // using updateValue instead of setValue
                    updateValue(value + 1);
                } else {
                    updateValue(0);
                }
            }, 1000 * 6); // 6 segundos para alterar a imagem

            return () => {
                clearInterval(interval);
            };
        }
    }, [value]);

    function ImagePrevious() {
        if (value > 0) {
            updateValue(value - 1);
        } else {
            updateValue(testimonialSlider.length - 1);
        }
    }
    function ImageForward() {
        if (value < testimonialSlider.length - 1) {
            updateValue(value + 1);
        } else {
            updateValue(0);
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Depoimentos</h1>

            <span className={styles.logo}>
                <img
                    className={[styles.loadImage, styles.image, fadeClass].join(
                        ' '
                    )}
                    src={testimonialSlider[value].logo}
                    alt={testimonialSlider[value].client}
                />
            </span>
            <div className={[styles.information].join(' ')}>
                <p className={styles.text} max-lines={2}>
                    {testimonialSlider[value].text}
                </p>
                {testimonialSlider[value].url ? (
                    <a
                        href={testimonialSlider[value].url}
                        className={styles.userTitle}
                    >
                        {`${testimonialSlider[value].client}`}
                    </a>
                ) : (
                    <span className={styles.userTitle}>
                        {`${testimonialSlider[value].client}`}
                    </span>
                )}
            </div>
            <span
                className={[styles.left, styles.buttons].join(' ')}
                onClick={ImagePrevious}
            >
                <MdArrowForwardIos />
            </span>
            <span
                className={[styles.right, styles.buttons].join(' ')}
                onClick={ImageForward}
            >
                <MdArrowForwardIos />
            </span>
        </div>
    );
}
