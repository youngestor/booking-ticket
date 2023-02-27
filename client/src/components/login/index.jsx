import { useForm } from 'react-hook-form'
import { apiAccountLogin } from '../../services'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '../../utils'

function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async data => {
        await apiAccountLogin(data)
        alert('Login success')
        return navigate(`/${path.HOME}`, { state: data })
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

export default Login;