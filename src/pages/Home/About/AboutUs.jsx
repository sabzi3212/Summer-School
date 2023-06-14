import img from '../../../assets/images/katherine-hanlon-xaG8oaZD7ss-unsplash.jpg'

const AboutUs = () => {
    return (
        <div className="hero-content flex-col lg:flex-row w-full mb-5">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl w-1/2" />
            <div className='w-1/2 ml-10'>
            
                <h1 className="text-5xl font-bold">Why Choose Us!</h1>
                <p className="py-6">Our summer camp institute offers exceptional outdoor experiences, providing unforgettable adventures and exploration opportunities for campers. With a team of experienced and caring staff members, we prioritize the safety, well-being, and personal growth of every camper. We boast a diverse range of program offerings, allowing campers to explore their interests and discover new passions. Our camp institute focuses on skill development, providing opportunities for campers to enhance their abilities in sports, arts, STEM, and leadership. We foster a nurturing and inclusive environment, ensuring that every camper feels valued and supported throughout their camp experience.</p>
                <button className="btn bg-orange-300 mt-5">View Details</button>
            </div>
        </div>
    );
};

export default AboutUs;