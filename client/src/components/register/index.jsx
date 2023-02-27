import { useForm } from 'react-hook-form'
import { apiAccountCreate } from '../../services'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '../../utils'

function Login() {
    const { register, handleSubmit, getValues } = useForm()
    const navigate = useNavigate()

    const onSubmit = async data => {
        await apiAccountCreate(data)
        alert('Create success')
        return navigate(`/${path.LOGIN}`)
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="title">
                        Đăng ký
                    </div>
                    <input {...register('fullname', { required: true })} type="text" placeholder="Tên đầy đủ" />
                    <input {...register('username', { required: true })} type="text" placeholder="Tài khoản" />
                    <input {...register('password', { required: true })} type="text" placeholder="Mật khẩu" />
                    <input {...register("cpassword", { validate: value => value === getValues("password") })}
                        type="text" placeholder="Nhập lại mật khẩu" />
                    <button>
                        Đăng ký
                    </button>
                    <p>
                        Đã có tài khoản?
                        <Link to={`/${path.LOGIN}`}> Đăng nhập</Link>
                    </p>
                </form>
            </div>
        </div >
    );
}

export default Login;