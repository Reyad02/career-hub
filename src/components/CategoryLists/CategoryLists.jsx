import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

const CategoryLists = () => {
    const [jobCategoryLists, setJobCategoryLists] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobCategoryLists(data));
    }, [])
    return (
        <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold">Job Category List</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex gap-10">
                {
                    jobCategoryLists.map(job => <CategoryList key={job.id} job={job}></CategoryList>)
                }
            </div>


        </div>
    );
};

export default CategoryLists;