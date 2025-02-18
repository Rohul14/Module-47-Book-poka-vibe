import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {
//   console.log(book);
  const {bookName,bookId,author,category,image,rating,tags} = book;

  return (
    <Link to={`/book/${bookId}`}>
      <div className="card  border border-[#ecebebcc]">
        <div className="p-6 ">
          <figure className="bg-[#F3F3F3] rounded-md p-6">
            <img src={image} alt="" className="h-44 w-32 " />
          </figure>
        </div>
        <div className="p-6">
          <div className="flex gap-4">
            <button className="btn btn-sm rounded-2xl bg-[#23BE0A0D] text-[#23BE0A]">
              {tags[0]}
            </button>
            <button className="btn btn-sm rounded-2xl bg-[#23BE0A0D] text-[#23BE0A]">
              {tags[1]}
            </button>
          </div>
          <h2 className="text-xl font-semibold font-display mt-4">
            {bookName}
          </h2>
          <p className="font-display py-2 border-b-2 border-dashed border-[#ecebebcc]">
            By: {author}
          </p>
          <div className="flex justify-between items-center py-2">
            <p>{category}</p>
            <div className="flex items-center gap-1">
              <p>{rating}</p>
              <span>
                <img
                  className="w-5"
                  src="https://img.icons8.com/?size=96&id=qdQpy48X3Rjv&format=png"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes={
    book:PropTypes.array
}

export default Book;
