import DataModel from "./DataModel";
import PostsDataTable from "./PostsDataTable";

const Posts = () => {

    const {allData, isWaiting, isError, deleteAction} = DataModel('https://dummyjson.com/posts')
    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            <PostsDataTable allData={allData} isWaiting={isWaiting} deleteAction={deleteAction}/>
            {/*<ProductsList products={products} isWaiting={isWaiting} deleteAction={deleteAction}/>*/}
        </div>
    );

}
export default Posts;