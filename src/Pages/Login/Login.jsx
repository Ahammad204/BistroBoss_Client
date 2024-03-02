import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {

    

    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {

        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {

                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(from, {replace: true});

            })
            .catch(error => {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                   
                  });

                  console.log(error)

            })

    }

    const handleValidateCaptcha = (e) => {

        const user_value = e.target.value;

        if (validateCaptcha(user_value)) {

            setDisabled(false);

        }
        else {

            setDisabled(true);

        }

    }

    return (
        <>

            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>

            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
                <div className="hero-content flex-col md:flex-row ">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="Type Captcha" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create An Account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;