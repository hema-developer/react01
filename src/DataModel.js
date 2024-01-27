import {useEffect, useState} from "react";

const DataModel = (url) => {
    const [allData, setAllData] = useState(null);

    const [isWaiting, setIsWaiting] = useState(true);
    const [isError, setIsError] = useState(false);
    const deleteAction = (id) => {
        const updatedAllData = allData.filter(item => item.id != id);
        setAllData(updatedAllData);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setAllData(data);
                    setIsWaiting(false);
                }).catch(e => {
                setIsError(e.message);
                setIsWaiting(false);
            });
        }, 200);
    }, [url]);

    return {allData, isWaiting, isError,deleteAction};
}
export default DataModel;