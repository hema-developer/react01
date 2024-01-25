import ProductsList from './ProductsList';
import DataModel from "./DataModel";

const Users = () => {

    const {products, isWaiting, isError} = DataModel('https://dummyjson.com/users')


    // const deleteAction = (id) => {
    //     const updatedProducts = products.filter(product => product.id != id);
    //    // setProducts(updatedProducts);
    // }


    return (
        <div className="container">
            {isError && <h1>{isError}</h1>}
            <ProductsList products={products} isWaiting={isWaiting} />
            {/*<ProductsList products={products} isWaiting={isWaiting} deleteAction={deleteAction}/>*/}
        </div>
    );
}

export default Users;