import {useParams} from "react-router-dom";
import DataModel from "./DataModel";
import ProductsList from "./ProductsList";

const DataInfo = () => {
    const {id} = useParams();
    const {products, isWaiting, isError,deleteAction} = DataModel('https://dummyjson.com/users/'+ id)
    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            {isWaiting &&
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}


            {products &&
            <div className="d-flex position-relative">
                <img src={products.image} className="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 className="mt-0">{products.firstName +' '+products.maidenName+' '+ products.lastName}</h5>
                        <p>{products.userAgent}</p>
                    </div>
            </div>
                }
        </div>
    );
}
export default DataInfo;