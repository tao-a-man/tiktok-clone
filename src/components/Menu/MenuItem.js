import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data, to, onClick, separate }) {
    const classes = cx('menu-item-btn', {
        separate,
    });
    return (
        <Button className={classes} text textThin iconLeft={data.icon} to={to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
