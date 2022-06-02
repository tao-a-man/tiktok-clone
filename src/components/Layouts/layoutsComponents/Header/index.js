import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import {
    faPlus,
    faEllipsisVertical,
    faArrowRightToBracket,
    faEarthAsia,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMoneyBill1, faUser } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import { MessageIcon, NotifiIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Search from './Search';

const cx = classNames.bind(styles);

const isLogin = true;

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

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/@thoa',
    },
    {
        icon: <FontAwesomeIcon icon={faMoneyBill1}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_DATA,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/feedback',
        separate: true,
    },
];

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
                <Search></Search>
                <div className={cx('action')}>
                    <Button text iconLeft={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        Upload
                    </Button>
                    {isLogin ? (
                        <>
                            <Tippy placement="bottom" content="Message">
                                <button className={cx('btn-message')}>
                                    <MessageIcon></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" content="Inbox">
                                <button className={cx('btn-message')}>
                                    <NotifiIcon></NotifiIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                primary
                                iconLeft={<FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>}
                                onClick={() => alert('hi')}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu datas={isLogin ? USER_MENU : MENU_DATA}>
                        {isLogin ? (
                            <Image
                                className={cx('user-avt')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1651658400&x-signature=zeUCDyTxctGYZ5%2Bsh422klviXFE%3D"
                                alt="Avatar"
                                fallbacks="https://static.fullstack.edu.vn/static/media/f8-icon.7ad2b161d5e80c87e516.png"
                            ></Image>
                        ) : (
                            <span className={cx('more-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </span>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
