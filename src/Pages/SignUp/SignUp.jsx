import signUpImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';



const SignUp = () => {



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {

        console.log(data);
        const email = data.email;
        const password = data.password;

        createUser(email,password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser)

        })

    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen " style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', }} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* Name Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name"  {...register("name", { required: true })} placeholder="Enter Your Full Name" className="input input-bordered" required />
                                {errors.name && <span className='text-red-600 mt-2'>This field is required</span>}
                            </div>

                            {/* Email Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-600 mt-2'>This field is required</span>}
                            </div>

                            {/* Password Field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {

                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{6}/

                                })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <span className='text-red-600 mt-2'>Password Must be 6 character and need at least one uppercase , one special character, one lowercase</span>}

                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p><small>Already Have an account? <Link to="/login">Please Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;