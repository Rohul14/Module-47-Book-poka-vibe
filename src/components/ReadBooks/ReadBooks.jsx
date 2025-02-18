import PropTypes from 'prop-types';


const ReadBooks = ({ book }) => {
  const {
    bookName,
    author,
    category,
    image,
    rating,
    tags,
    yearOfPublishing,
    totalPages,
    publisher,
  } = book;
  return (
    <div>
      <div className="border-2 border-[#ecebebcc] rounded-xl p-6 my-6">
        <div className="flex gap-6 flex-col lg:flex-row">
          <div className="p-8 bg-[#1313130D] rounded-md">
            <img src={image} className="mx-auto w-28 h-44 flex " />
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h1 className="text-2xl font-display font-bold">{bookName}</h1>
            <p className="">By : {author}</p>
            <div className="flex items-center flex-wrap lg:flex-row gap-4">
              <h1 className="text-base text-[#131313] font-bold">Tag :</h1>
              <div className="flex gap-3">
                {tags.map((tag, idx) => (
                  <div
                    className="bg-[#23BE0A0D] rounded-full text-sm text-[#23BE0A] font-medium px-4 py-1"
                    key={idx}
                  >
                    #{tag}
                  </div>
                ))}
              </div>
              <div className="text-base text-[#131313] flex gap-2">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=100&id=3723&format=png"
                  alt=""
                />
                <p>Year Of Publishing : {yearOfPublishing}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center flex-wrap lg:flex-row border-b-2 border-[#ecebebcc] py-4">
              <div className="flex gap-2">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=64&id=22393&format=png"
                  alt=""
                />
                <p>Publisher : {publisher}</p>
              </div>
              <div className="flex gap-2 items-center">
                <img
                  className="w-5 h-5"
                  src="https://img.icons8.com/?size=52&id=105&format=png"
                  alt=""
                />
                <p>Page : {totalPages}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap lg:flex-row">
                <button className="btn bg-[#328EFF26] text-[#328EFF] rounded-2xl">Category : {category}</button>
                <button className="btn bg-[#FFAC3326] text-[#FFAC33] rounded-2xl">Rating : {rating}</button>
                <button className="btn bg-[#23BE0A] text-white rounded-2xl">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadBooks.propTypes={
    book:PropTypes.array
}

export default ReadBooks;
