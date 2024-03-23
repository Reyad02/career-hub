import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState(4);

    const handleAllJobs = () => {
        setDisplayJobs(featuredJobs.length);
    }

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data));
    }, [])

    return (
        <div className="text-center">
            <h2 className="text-3xl">Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-10">
                {
                    featuredJobs.slice(0, displayJobs).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            {

                displayJobs !== featuredJobs.length && <button className="btn" onClick={handleAllJobs}>See all jobs</button>
                
            }
        </div>
    );
};

export default FeaturedJobs;