import {useParams} from "react-router-dom";
import DataModel from "./DataModel";
import ProductsList from "./UsersDataTable";

const UserInfo = () => {
    const {id} = useParams();
    const {allData, isWaiting, isError,deleteAction} = DataModel('https://dummyjson.com/users/'+ id)
    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            {isWaiting &&
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}


            {allData &&
            <div className="d-flex position-relative">
                <img src={allData.image} className="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 className="mt-0">{allData.firstName +' '+allData.maidenName+' '+ allData.lastName}</h5>
                        <p>{allData.userAgent}</p>
                    </div>
            </div>
                }
        </div>
    );
}
export default UserInfo;