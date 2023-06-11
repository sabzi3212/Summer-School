import { Helmet } from "react-helmet-async";
import useInstructors from "../../hooks/UseInstructors";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
    const [classes] = useInstructors();
    return (
        <div>
            <Helmet>
                <title>Summer School | Instructors</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Meet Our Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {
                classes.map(item => <InstructorsCard key={item._id} item={item}></InstructorsCard>)
            }
            
        </div>
        </div>
    );
};

export default Instructors;