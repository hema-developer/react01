import {useParams} from "react-router-dom";
import DataModel from "./DataModel";

const PostInfo = () => {
    const {id} = useParams();
    const {allData, isWaiting, isError,deleteAction} = DataModel('https://dummyjson.com/posts/'+ id)
    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            {isWaiting &&
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}


            {allData &&
            <div className="d-flex position-relative">
                    <div>
                        <h5 className="mt-0">{allData.title}</h5>
                        <p>{allData.body}</p>
                    </div>
            </div>
                }
        </div>
    );
}
export default PostInfo;