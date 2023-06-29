import {  FaRegQuestionCircle } from 'react-icons/fa';
import { useContext} from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const {signIn} = useContext(Authcontext)
    const handleLogin =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
        .catch(error=>{
          console.log(error)
        })
        
        
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
         
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-outline bg-[red] text-white font-semibold" type="submit" value="LogIn" />
              </div>
              <div className='flex'>
              <p className='inline text-red-600'>Not a user ?<Link to="/signup"> Get signed in</Link></p>
              <FaRegQuestionCircle></FaRegQuestionCircle>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
