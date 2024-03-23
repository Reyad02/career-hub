
const Hero = () => {
    return (
        <div className="hero  max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row pb-0">
                <div className="text-center lg:flex-1 lg:text-left ">
                    <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                    <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary'>Get started</button>
                </div>
                <div className="card lg:flex-1 ">
                    <img src="/src/assets/images/user.png" className="rounded-lg  bg-transparent" />

                </div>
            </div>
        </div>
    );
};

export default Hero;