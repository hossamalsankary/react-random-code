import React from "react";
import "./css/App.css";

const bookData = [
  {
    img: "https://m.media-amazon.com/images/I/511cMnTdQkL._AC_UL480_QL65_.jpg",
    title: "first Books",
    describtions: "by Colleen Hoover",
  },
  {
    img: "https://m.media-amazon.com/images/I/71EwoNQypZL._AC_UL480_QL65_.jpg",
    title: "It Ends with Us",
    describtions: "by Colleen Hoover",
  },
  {
    img: "https://m.media-amazon.com/images/I/51gEwEihUKS._AC_UL480_QL65_.jpg",
    title: "The astronomy Book Big Ideas By DK",
    describtions: "EGP 21.00 shipping",
  },
  {
    img: "https://m.media-amazon.com/images/I/51gEwEihUKS._AC_UL480_QL65_.jpg",
    title: "The astronomy Book Big Ideas By DK",
    describtions: "EGP 21.00 shipping",
  },
  {
    img: "https://m.media-amazon.com/images/I/71EwoNQypZL._AC_UL480_QL65_.jpg",
    title: "It Ends with Us",
    describtions: "by Colleen Hoover",
  },
];

function Book({ img, title, describtions }) {
  //here I am saying that tack all data from the obgect
  const action = () => {
    console.log(title);
  };
  return (
    <div className="bookitem">
      <img src={img} alt={"data"} width={150} height={170} />
      <h2>{title}</h2>
      <span>{describtions}</span>
      <br />
      <button onClick={action} type="submit">
        {" "}
        Click
      </button>
    </div>
  );
}

function BooksContainers() {
  return (
    <section className="booklist">
      {bookData.map((book, index) => {
        return <Book {...book} />;
      })}
    </section>
  );
}
export default BooksContainers;
