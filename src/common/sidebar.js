import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div style={{padding:'10px 5px 10px 5px'}} className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1436161786/eo73o7dnxrm3xklb4gg9.png"></img>
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                    </li>
                   
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/typography">
                        <i class="fas fa-database"></i> Data user management
                        </Link>
                    </li>
                    
                    {/* collapsable list item example */}
                    {/* <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Opportunity
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Overview</a></li>
                            <li><a href="#" className="rounded">Weekly</a></li>
                            <li><a href="#" className="rounded">Monthly</a></li>
                            <li><a href="#" className="rounded">Annually</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li> */}
                   
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://media.istockphoto.com/id/1192884194/vi/vec-to/k%C3%BD-t%C3%AAn-qu%E1%BA%A3n-tr%E1%BB%8B-tr%C3%AAn-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%C3%A1y-t%C3%ADnh-x%C3%A1ch-tay-vector-ch%E1%BB%A9ng-kho%C3%A1n.jpg?s=170667a&w=0&k=20&c=6mC8hKIsmfQ5eE4yePU0y69XmwXSld3QntJtvpg5hSo=" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>ADMIN</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Sidebar;