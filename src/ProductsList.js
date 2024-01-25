
const ProductsList=({products,deleteAction,isWaiting})=>{
    return(
        <div className='container'>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {isWaiting && <tr><th colSpan='5'>Please Waiting....</th></tr>}
                {products && products.map((product) => (
                    <tr key={product.id}>
                        <th scope="row" >{product.id}</th>
                        <td>{product.firstName + '' + product.lastName}</td>
                        <td>{product.age}</td>
                        <td>{product.gender}</td>
                        <td>
                            <button type="button" onClick={() => deleteAction(product.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;