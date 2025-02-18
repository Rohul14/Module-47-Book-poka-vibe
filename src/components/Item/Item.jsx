import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishBooks from "../WishBooks/WishBooks";

const Item = () => {
    const allBooks=useLoaderData()
    const [readBook,setReadBook]=useState([]);
    const [wishBook,setWishBook]=useState([])
    useEffect(()=>{
        const readBooks=getStoredReadList();
        const readBooksInt=readBooks.map(id=>parseInt(id));
        
        const wishBooks=getStoredWishList();
        const wishBooksInt=wishBooks.map(id=>parseInt(id))

        const readBooksList=allBooks.filter(book=>readBooksInt.includes(book.bookId))

        const wishBooksList=allBooks.filter(book=>wishBooksInt.includes(book.bookId))
        
        setReadBook(readBooksList)
        setWishBook(wishBooksList)
        
        // console.log(allBooks,readBooksInt,wishBooksInt);
    },[])
    console.log(readBook);
  return (
    <div>
      <h4></h4>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {
                readBook.map(book=><ReadBooks 
                    key={book.bookId}
                    book={book}
                ></ReadBooks>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {
                wishBook.map(book=><WishBooks
                    key={book.bookId}
                    book={book}
                    ></WishBooks>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Item;
