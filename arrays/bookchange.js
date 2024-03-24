function booksToString(books) {
    const tostring = books.map((n) => {
        return`${n.title} by ${n.author}`;
    });
    return tostring.join("\n");
  }
  
  const books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {title: "1984", author: "George Orwell"},
    {title: "Brave New World", author: "Aldous Huxley"},
    {title: "The Catcher in the Rye", author: "J.D. Salinger"},
    {title: "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "The Grapes of Wrath", author: "John Steinbeck"},
  ];
  console.log(booksToString(books));
  console.log(typeof booksToString(books))
  // 應返回"The Great Gatsby by F. Scott Fitzgerald\n1984 by George Orwell\nBrave New World by Aldous Huxley\nThe Catcher in the Rye by J.D. Salinger\nTo Kill a Mockingbird by Harper Lee\nThe Grapes of Wrath by John Steinbeck"