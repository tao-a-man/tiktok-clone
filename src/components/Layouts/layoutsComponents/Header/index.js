import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Header;
