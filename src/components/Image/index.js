import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Images.module.scss';

function Image({ src, fallbacks: customFallbacks = images.noAvatar, alt, className, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={() => {
                console.log(images.noAvatar);
                setFallback(customFallbacks);
            }}
        ></img>
    );
}

export default forwardRef(Image);
