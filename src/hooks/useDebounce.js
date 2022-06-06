import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // khoi tao debounce bang dau la 1 chuoi trong
    const [debounced, setDebounced] = useState(value);

    // lan chay dau tien phai doi 500s moi co the set lai debounce
    // nhung chua dc 500ms (delay = 500) thi component da dc mound lan nua
    // sau khi mound se goi ham cleaupfunction nen time out se bi huy
    // chi khi nao dung lai 500ms thi function trong setTimeout moi hoat dong duoc
    useEffect(() => {
        console.log('1');
        const idTimeout = setTimeout(() => setDebounced(value), delay);

        return () => clearTimeout(idTimeout);
    }, [value, delay]);
    console.log('2');
    return debounced;
}

export default useDebounce;
