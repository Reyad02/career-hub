import CategoryLists from "../CategoryLists/CategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="">
            <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
                <Hero></Hero>
                <div className="max-w-7xl mx-auto">
                    <CategoryLists></CategoryLists>
                    <FeaturedJobs></FeaturedJobs>
                </div>
            </div>
        </div>
    );
};

export default Home;