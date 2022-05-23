import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/53635fef3aad1ef411eb74238ee7560bf4fcc49d/src/assets/images/logo.svg"
                        alt="Tiktok"
                    ></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false}></input>
                    <button className={cx('search__clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('search__loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search__btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
                <div className={cx('action')}>
                    <h1>action</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
