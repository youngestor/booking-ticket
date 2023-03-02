import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../utils";

function AdminHome() {

    return (
        <div className='admin-home-wrapper'>
            <div className='home-link'>
                <NavLink to={path.MOVIES}>Movies</NavLink>
                <NavLink to={path.CINEMAS}>Cinemas</NavLink>
                <NavLink to={path.ACCOUNTS}>Accounts</NavLink>
                <NavLink to={path.SCHEDULES}>Schedules</NavLink>
            </div>
            <Outlet />
        </div>
    );
}

export default AdminHome;