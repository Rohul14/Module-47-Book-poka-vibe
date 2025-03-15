import { useLoaderData, useParams } from "react-router-dom";
import { addStoredReadList, addStoredWishList } from "../../utility/addToDb";
import { Helmet } from "react-helmet-async";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  
  const {
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;
  const handlerMarkAsRead=(id)=>{
    addStoredReadList(id)
  }

  const handlerWishList=(id)=>{
    addStoredWishList(id)
  }
  console.log(book);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 my-6 lg:mb-20 lg:mt-10">
        <Helmet>
            <title>BookDetail</title>
        </Helmet>
            <div className="p-10 lg:p-20 bg-[#1313130D] rounded-2xl">
                <img className="w-32 h-40 mx-auto lg:h-[564px] lg:w-[425px]" src={image} alt="" />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="title text-4xl font-bold">{bookName}</h1>
                    <p className="text-lg text-[#131313CC] font-semibold">{author}</p>
                </div>
                <div className="border-y border-[#13131326] py-4">
                    <p className="text-lg font-semibold text-[#131313CC]">{category}</p>
                </div>
                <div>
                    <p className="text-base text-black font-bold">Review : <span className="text-base text-[#131313B2] font-normal">{review}</span></p>
                </div>
                <div className="border-b border-[#13131326] pb-6 flex gap-4 items-center">
                    <h1 className="text-base text-[#131313] font-bold">Tag :</h1>
                    <div className="flex gap-3">
                        {
                            tags.map((tag, idx) => <div className="bg-[#23BE0A0D] rounded-full text-base text-[#23BE0A] font-medium px-4 py-2" key={idx}>#{tag}</div>)
                        }
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-col gap-3">
                        <div className="grid grid-cols-2">
                            <p className="text-base text-[#131313B2]">Number of Pages:</p>
                            <p className="text-base text-[#131313] font-semibold">{totalPages}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-base text-[#131313B2]">Publisher: </p>
                            <p className="text-base text-[#131313] font-semibold">{publisher}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-base text-[#131313B2]">Year of Publishing: </p>
                            <p className="text-base text-[#131313] font-semibold">{yearOfPublishing}</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <p className="text-base text-[#131313B2]">Rating: </p>
                            <p className="text-base text-[#131313] font-semibold">{rating}</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button 
                        onClick={()=> handlerMarkAsRead(bookId)}
                        className="border border-[#1313134D] text-lg text-black font-semibold px-7 py-4 rounded-lg  hover:bg-[#50B1C9] hover:text-white">Mark As Read</button>
                    <button 
                        onClick={()=> handlerWishList(bookId)}
                        className="text-lg border border-[#1313134D]  font-semibold px-7 py-4 rounded-lg hover:bg-[#50B1C9] hover:text-white">Wish List</button>
                </div>
            </div>
        </div>
  );
};

export default BookDetail;
