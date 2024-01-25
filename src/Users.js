import ProductsList from './ProductsList';
import DataModel from "./DataModel";

const Users = () => {

    const {products, isWaiting, isError,deleteAction} = DataModel('https://dummyjson.com/users')



    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            <ProductsList products={products} isWaiting={isWaiting} deleteAction={deleteAction} />
            {/*<ProductsList products={products} isWaiting={isWaiting} deleteAction={deleteAction}/>*/}
        </div>
    );
}

export default Users;