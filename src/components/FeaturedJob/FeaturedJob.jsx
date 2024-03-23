import { useState } from "react";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>
            <div className="border-2 text-left p-4 rounded-xl">
                <img src={logo} alt="" />
                <p>{job_title}</p>
                <p>{company_name}</p>
                <div>
                    <p className="btn">{remote_or_onsite}</p>
                    <p className="btn">{job_type}</p>
                </div>
                <Link to={`/job/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>

    );
};

export default FeaturedJob;