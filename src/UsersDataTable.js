import {useState} from "react";

const UsersDataTable=({allData,deleteAction,isWaiting})=>{

    const [search,setSearch] = useState('');
    const [searchData , setSearchData] = useState(allData);

    if (search != null){
        setTimeout(() => {
            fetch('https://dummyjson.com/users/search?q='+search)
                .then(res => res.json())
                .then((data)=>{
                   setSearchData(data);
                })
                .then(console.log);
        }, 200);
    }

    return(
        <div className='container'>
            <br/>

            <div className="row">
                <div className="col">
                    <h1>Users</h1>
                </div>
                <div className="col">
                    <input className="form-control me-2"
                           onChange={(e)=>setSearch(e.target.value)} value={search} type="search" placeholder="Search"
                           aria-label="Search"/>
                </div>
                <div className="col">
                    <a href='users/add' className="btn btn-primary">Add User</a>
                </div>
            </div>
<br/>
<br/>
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
                {isWaiting &&
                <tr><th colSpan='5'><div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></th></tr>}
                {allData &&
                searchData.users.filter(item=>{
                  if(search === ''){
                      return item;
                  }
                }).map((item) => (
                    <tr key={item.id}>
                        <th scope="row" >{item.id}</th>
                        <td>{item.firstName + '' + item.lastName}</td>
                        <td>{item.age}</td>
                        <td>{item.gender}</td>
                        <td>
                            <a type="button" href={/users/+item.id+'/view'} className="btn btn-info">View</a>
                            <a type="button" href={/users/+item.id} className="btn btn-success">Update</a>
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