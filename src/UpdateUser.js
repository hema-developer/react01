import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";

const UpdateUser = () => {
    const {id} = useParams();

    const [firstName, setFirstName] = useState('');
    const [maidenName, setmaidenName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [isDone, setIsDone] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            fetch('http://dummyjson.com/users/'+id)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    setFirstName(data.firstName);
                    setmaidenName(data.maidenName);
                    setLastName(data.lastName);
                    setAge(data.age);
                }).catch(e => {
            });
        }, 200);
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        const mypost = {firstName, maidenName, lastName, age};
        setIsPosting(true);
        fetch('https://dummyjson.com/users/'+id, {
            method: 'PUT', /* or PATCH */
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(mypost)
        })
            .then(res => res.json())
            .then(console.log)
            .then(() => {
                setIsPosting(false);
                setFirstName('');
                setmaidenName('');
                setLastName('');
                setAge('');
                setIsDone(true);
            })
    }
    return (
        <div className='container'>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label htmlFor="inputPassword6" className="col-form-label">Your Data</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="exampleFormControlInput0"
                               placeholder="First Name" value={firstName} required onChange={(e) => {
                            setFirstName(e.target.value)
                        }}/>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="Midele Name" value={maidenName} required onChange={(e) => {
                            setmaidenName(e.target.value)
                        }}/>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control" id="exampleFormControlInput2"
                               placeholder="Last Name" value={lastName} required onChange={(e) => {
                            setLastName(e.target.value)
                        }}/>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control" id="exampleFormControlInput2"
                               placeholder="Age" value={age} required onChange={(e) => {
                            setAge(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className="row">
                    {!isPosting && <button type="submit" className="btn btn-primary mb-3">Save Data</button>}
                    {isPosting && <button type="button" className="btn btn-primary mb-3" disabled>Please Waiting...</button>}
                    {isDone &&<Navigate to="/users" replace={true} /> }
                </div>
            </form>
        </div>
    )
}
export default UpdateUser;