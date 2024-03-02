import signUpImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'
import { useForm } from 'react-hook-form';



const SignUp = () => {

    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);


    }

    return (
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
                            <input type="text" name="name"  {...register("name" , { required: true })} placeholder="Enter Your Full Name" className="input input-bordered" required />
                            {errors.name && <span className='text-red-600 mt-2'>This field is required</span>}
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email" , { required: true })}  name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                            {errors.email && <span className='text-red-600 mt-2'>This field is required</span>}
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password" , { required: true,minLength:6, maxLength: 20})}  name="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className='text-red-600 mt-2'>This field is required</span>}

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;