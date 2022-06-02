import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadLess from '@tippyjs/react/headless'; // different import path!
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as TippyWrapper } from '~/components/WrapperPopper';
import { AccountItem } from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icon';

import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classnames.bind(styles);

function Search() {
    const [resultValue, setResultValue] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        console.log(showResult);
        setResultValue([1]);
    }, [showResult]);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearInput = () => {
        setShowResult(false);
        setInputValue('');
        inputRef.current.focus();
    };

    return (
        <TippyHeadLess
            visible={showResult && resultValue.length > 0}
            delay={[0, 500]}
            interactive
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={inputValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setInputValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!inputValue && (
                    <button onClick={handleClearInput} className={cx('search__clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('search__loading')} icon={faSpinner}></FontAwesomeIcon> */}
                <button className={cx('search__btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </TippyHeadLess>
    );
}

export default Search;
