import AdminMovieRead from '../movieRead'

function AdminHome() {
    return (
        <div className='admin-home-wrapper'>
            <AdminMovieRead />
            <AdminMovieRead />
            <AdminMovieRead />
            <AdminMovieRead />
        </div>
    );
}

export default AdminHome;