import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useState } from 'react';
import styles from './MenuItem.module.scss';
import { Wrapper as TippyWrapper } from '~/components/WrapperPopper';

import MenuItem from './MenuItem.js';
import Header from './Header';

const cx = classNames.bind(styles);

function Menu({ datas = [], children }) {
    const [history, setHistory] = useState([datas]);

    const currentMenu = history[history.length - 1];

    const renderItem = () => {
        return currentMenu.map((item, index) => {
            return (
                <MenuItem
                    separate={item.separate}
                    to={item.to}
                    data={item}
                    key={index}
                    onClick={() => {
                        if (item.children) {
                            setHistory((prev) => {
                                return [...prev, item.children.item];
                            });
                        } else {
                            console.log(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    return (
        <Tippy
            trigger="click"
            offset={[12, 8]}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(arr) => {
                return (
                    <div className={cx('more-menu')} tabIndex="-1" {...arr}>
                        <TippyWrapper className={cx('more-menu__wrapper')}>
                            {history.length > 1 && (
                                <Header
                                    title={currentMenu[0].type.charAt(0).toUpperCase() + currentMenu[0].type.slice(1)}
                                    onBack={() => {
                                        const newHistory = history.slice(0, history.length - 1);
                                        setHistory(newHistory);
                                    }}
                                ></Header>
                            )}
                            {renderItem()}
                        </TippyWrapper>
                    </div>
                );
            }}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
