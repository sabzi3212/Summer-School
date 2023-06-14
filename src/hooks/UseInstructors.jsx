import { useEffect, useState } from "react";

const useInstructors = () =>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://summer-school-server-five.vercel.app/class')
        .then(res => res.json())
        .then(data => {
            setClasses(data);
            setLoading(false);
        });
    },[])
    return [classes, loading]

}

export default useInstructors;