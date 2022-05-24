import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as TippyWrapper } from '~/components/Wrapper';
import { AccountItem } from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [userAccount, setUserAccount] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUserAccount([1, 2, 3]);
        }, 2000);
    });

    return (
        <div className={cx('wapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img
                        src="https://raw.githubusercontent.com/sondnpt00343/tiktok-ui/53635fef3aad1ef411eb74238ee7560bf4fcc49d/src/assets/images/logo.svg"
                        alt="Tiktok"
                    ></img>
                </div>
                <Tippy
                    interactive
                    visible={userAccount.length > 0}
                    render={(arr) => {
                        return (
                            <div className={cx('search-result')} tabIndex="-1" {...arr}>
                                <TippyWrapper>
                                    <h4 className={cx('search-title')}>Account</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </TippyWrapper>
                            </div>
                        );
                    }}
                >
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
                </Tippy>
                <div className={cx('action')}>
                    <h1>action</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
