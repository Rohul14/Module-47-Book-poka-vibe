import bannerImg from "../../../src/assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="mt-8">
      <div className="hero bg-[#1313130D] rounded-xl p-6 lg:py-20 lg:px-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm bg-[#ded9d90d] "
          />
          <div>
            <h1 className="text-6xl font-display font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white px-8 py-6 hover:bg-green-500 mt-12">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
