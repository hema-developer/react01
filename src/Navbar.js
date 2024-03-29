import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from './Home';
import Users from './Users';
import AddUser from './AddUser';
import UserUpdate from './UpdateUser';
import UserInfo from './UserInfo';
import Posts from './Posts';
import PostInfo from './PostInfo';
import About from './About';

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Site Name</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts">Posts</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" className="active"  element={<Home/>}/>
                    <Route path="/users" className="active"  element={<Users/>}/>
                    <Route path="/users/add" className="active"  element={<AddUser/>}/>
                    <Route path="/users/:id" className="active"  element={<UserUpdate/>}/>
                    <Route path="/users/:id/view" className="active"  element={<UserInfo/>}/>
                    <Route path="/posts" className="active"  element={<Posts/>}/>
                    <Route path="/posts/:id" className="active"  element={<PostInfo/>}/>
                    <Route path="/about" className="active"  element={<About/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}


export default Navbar;

