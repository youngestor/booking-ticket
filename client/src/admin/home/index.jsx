import AdminMovieRead from '../movies/movieRead'
import AdminCinemaRead from '../cinemas/cinemaRead'

function AdminHome() {
    return (
        <div className='admin-home-wrapper'>
            <AdminMovieRead />
            <AdminCinemaRead />
            <AdminMovieRead />
            <AdminMovieRead />
        </div>
    );
}

export default AdminHome;