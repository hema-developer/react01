
const UsersDataTable=({allData,deleteAction,isWaiting})=>{
    return(
        <div className='container'>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {isWaiting &&
                <tr><th colSpan='5'><div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></th></tr>}
                {allData && allData.posts.map((item) => (
                    <tr key={item.id}>
                        <th scope="row" >{item.id}</th>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>
                            <a type="button" href={/posts/+item.id} className="btn btn-info">View</a>
                            <button type="button" onClick={() => deleteAction(item.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersDataTable;