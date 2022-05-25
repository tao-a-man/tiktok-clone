import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless'; // different import path!
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faPlus,
    faEllipsisVertical,
    faArrowRightToBracket,
    faEarthAsia,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { Wrapper as TippyWrapper } from '~/components/WrapperPopper';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_DATA = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            item: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [userAccount, setUserAccount] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUserAccount([1, 2, 3]);
        }, 2000);
    }, []);

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
                    <Button text iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        Upload
                    </Button>
                    <Button
                        primary
                        iconLeft={<FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>}
                        onClick={() => alert('hi')}
                    >
                        Log in
                    </Button>
                    <Menu datas={MENU_DATA}>
                        <span className={cx('more-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </span>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
