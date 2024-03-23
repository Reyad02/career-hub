
const CategoryList = ({ job }) => {
    const { id, logo, category_name, availability } = job;
    return (
        <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] flex-1">
            <img src={logo} alt="" />
            <div className="text-left mt-2">
                <h1 className="text-xl font-semibold">{category_name}</h1>
                <p>{availability}</p>
            </div>

        </div>
    );
};

export default CategoryList;