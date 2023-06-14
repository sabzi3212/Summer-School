import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token= import.meta.env.VITE_Image_Upload_Token;


const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('courseImg', data.courseImg[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL=imgResponse.data.display_url;
                const {course, name, price, email, availableSeats} = data;
                const newItem = {course, name, price: parseFloat(price), email, availableSeats, courseImg:imgURL }
                console.log(newItem);
                axiosSecure.post('/class', newItem)
                .then(data =>{
                    console.log('after posting new class item', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

            }
        })
        
        
    };
    console.log(errors);
    return (
        <div>
            <Helmet>
                <title>Summer School | Add Class</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Add Your Class</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 lg:grid-cols-2 gap-3 bg-orange-200 p-4'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input
                    {...register("course", {required: true, maxLength: 80})}
                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input
                    {...register("name", {required: true, maxLength: 80})} defaultValue={user?.name}
                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input 
                    {...register("email")} readOnly defaultValue={user?.email}
                    type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input {...register("availableSeats", {required: true, maxLength: 80})} type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                    {...register("price", {required: true, maxLength: 80})}
                    type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <input type="text" {...register("status", {required: true, maxLength: 80})} readOnly defaultValue='pending' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Course Img</span>
                    </label>
                    <input
                    {...register("courseImg", {required: true})}
                    type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <br />
                <button className="btn bg-orange-300 mt-5">Add Class</button>
            </form>
        </div>
    );
};

export default AddClass;