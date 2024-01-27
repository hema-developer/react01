import UsersDataTable from './UsersDataTable';
import DataModel from "./DataModel";

const Users = () => {

    const {allData, isWaiting, isError, deleteAction} = DataModel('https://dummyjson.com/users');

    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            <UsersDataTable allData={allData} isWaiting={isWaiting} deleteAction={deleteAction}/>
            {/*<ProductsList products={products} isWaiting={isWaiting} deleteAction={deleteAction}/>*/}
        </div>
    );
}

export default Users;