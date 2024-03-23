import { useLoaderData, useParams } from "react-router-dom";
import { setData } from "../../utility/localstorage";

const JobDetail = () => {
    const { id } = useParams(); /// useParams send a object 
    const idInt = parseInt(id);
    const jobs = useLoaderData();
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const setInLocalStorage = () => {
        setData(idInt);
    }

    return (
        <div>
            <div>
                <p>{job.job_title}</p>
                <p>{job.company_name}</p>
            </div>
            <button onClick={setInLocalStorage} className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetail;