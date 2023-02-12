import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

function AdminLayouts({ children }) {
    return (
        <div className='admin-wrapper'>
            <AdminHeader />
            <div className='container'>
                <AdminSidebar />
                <div className='main-container'>
                    {children}
                </div>
            </div>

        </div>
    );
}

export default AdminLayouts;