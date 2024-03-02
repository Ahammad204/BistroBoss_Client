import signUpImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'


const SignUp = () => {
    return (
        <div className="hero min-h-screen "  style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={signUpImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
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