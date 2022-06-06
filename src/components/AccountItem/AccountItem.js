import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wapper')}>
            <Image className={cx('avatar')} alt={data.full_name} src={data.avatar} />
            <div className={cx('info')}>
                <div className={cx('wrapper-name')}>
                    <h4 className={cx('name')}>{data.full_name}</h4>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <span className={cx('user-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
