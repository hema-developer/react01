import {useEffect, useState} from "react";

const DataModel = (url) => {
    const [products, setProducts] = useState(null);

    const [isWaiting, setIsWaiting] = useState(true);
    const [isError, setIsError] = useState(false);
    const deleteAction = (id) => {
        const updatedProducts = products.filter(product => product.id != id);
        setProducts(updatedProducts);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(data => {
                    setProducts(data);
                    setIsWaiting(false);
                }).catch(e => {
                setIsError(e.message);
                setIsWaiting(false);
            });
        }, 200);
    }, [url]);

    return {products, isWaiting, isError,deleteAction};
}
export default DataModel;