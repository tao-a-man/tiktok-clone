import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data, to, onClick }) {
    return (
        <Button className={cx('menu-item-btn')} text iconLeft={data.icon} to={to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
