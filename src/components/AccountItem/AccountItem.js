import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wapper')}>
            <img
                className={cx('avatar')}
                alt=""
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e99846f00ab6702d7716ba8d72a98d7a~c5_300x300.webp?x-expires=1653530400&x-signature=Tv82Uq3%2BdOnwqY7l5UDgdYe3EJ0%3D"
            />
            <div className={cx('info')}>
                <div className={cx('wrapper-name')}>
                    <h4 className={cx('name')}>Nguyen Luong Duc Thinh</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <span className={cx('user-name')}>taoamhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhan</span>
            </div>
        </div>
    );
}

export default AccountItem;
