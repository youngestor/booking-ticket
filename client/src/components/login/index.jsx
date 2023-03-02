import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { apiAccountLogin } from '../../services'
import { connect } from 'react-redux'
import { path } from '../../utils'
import { loginSuccess } from '../../redux/actions'

function Login({ loginSuccess }) {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async data => {
        let user = await apiAccountLogin(data)
        if (user && user.data.errCode === 0)
            loginSuccess(user.data.user)
        alert('Login success')
        return navigate(-1)
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        Đăng nhập
                    </div>
                    <input {...register('username', { required: true })} type="text" placeholder="Tài khoản" />
                    <input {...register('password', { required: true })} type="text" placeholder="Mật khẩu" />
                    <button>
                        Đăng nhập
                    </button>
                    <p>
                        Tạo tài khoản?
                        <Link to={`/${path.REGISTER}`}> Đăng ký</Link>
                    </p>
                </form>
            </div>
        </div >
    );
}

const mapStateToProps = () => ({})

const mapActionsToProps = {
    loginSuccess
}

export default connect(mapStateToProps, mapActionsToProps)(Login)