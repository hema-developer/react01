import {useEffect, useState} from "react";

const DataModel = (url) => {
    const [products, setProducts] = useState(null);

    const [isWaiting, setIsWaiting] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://dummyjson.com/users')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setProducts(data.users);
                    setIsWaiting(false);
                }).catch(e => {
                setIsError(e.message);
                setIsWaiting(false);
            });
        }, 2000);
    }, [url]);

    return {products, isWaiting, isError};
}
export default DataModel;