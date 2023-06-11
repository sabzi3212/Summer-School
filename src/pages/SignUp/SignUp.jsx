import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
          .then(()=>{
            console.log('user Profile updated');
            reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'SignUp Successfull',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          })
          .catch(error => console.log(error))
          
        })

    }
    return (
        <>
            <Helmet>
                <title>Summer School | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' {...register("name")} placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" name='photoURL' {...register("photoURL")} placeholder="photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-400'>This field is required</span>}

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' {...register("password")} placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='confirmPassword' {...register("confirmPassword")} placeholder="Confirm Password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p><small>Already have an account? <Link to='/login'>Login Now</Link></small></p>
          </div>
        </div>
      </div>
        
        </>
    );
};

export default SignUp;