import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllData } from "../../utility/localstorage";

const AppliedJobs = () => {
    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);
    const jobs = useLoaderData();

    const handleFilter = (type) => {
        if (type === "all") {
            setDisplayData(data);
        } else if (type === "remote") {
            setDisplayData(data.filter(job => job.remote_or_onsite === "Remote"));
        } else if (type === "onsite") {
            setDisplayData(data.filter(job => job.remote_or_onsite === "Onsite"));
        }
    }

    useEffect(() => {
        const appliedJobs = getAllData();
        const allJobsApplied = jobs.filter(job => appliedJobs.includes(job.id));
        setData(allJobsApplied);
        setDisplayData(allJobsApplied);
    }, [jobs]);

    return (
        <div><div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li onClick={() => handleFilter("all")}><a>All</a></li>
                <li onClick={() => handleFilter("remote")}><a>Remote</a></li>
                <li onClick={() => handleFilter("onsite")}><a>Onsite</a></li>
            </ul>
        </div>

            <div className="grid grid-cols-1">
                {
                    displayData.map(job => <span key={job.id}>{job.job_title}</span>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;