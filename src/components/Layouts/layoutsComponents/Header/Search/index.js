// eslint-disable-next-line
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadLess from '@tippyjs/react/headless'; // different import path!
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchServices from '~/apiServices/searchServices';
import { Wrapper as TippyWrapper } from '~/components/WrapperPopper';
import { AccountItem } from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/hooks';

import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classnames.bind(styles);

function Search() {
    const [resultValue, setResultValue] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(inputValue, 500);
    console.log('3');

    useEffect(() => {
        if (!debounced) {
            setResultValue([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);

            setResultValue(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    const inputRef = useRef();

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleClearInput = () => {
        setResultValue([]);
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
                            {resultValue.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
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
                    onChange={(e) => {
                        if (e.target.value[0] !== ' ') {
                            setInputValue(e.target.value);
                        }
                    }}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!inputValue && !loading && (
                    <button onClick={handleClearInput} className={cx('search__clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('search__loading')} icon={faSpinner}></FontAwesomeIcon>}{' '}
                <button className={cx('search__btn')}>
                    <SearchIcon></SearchIcon>
                </button>
            </div>
        </TippyHeadLess>
    );
}

export default Search;
