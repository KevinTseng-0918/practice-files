const addressBook = {
  //建立一個obj : addressbook
  addEntry: (name, address) => {
    //在這個箭頭函式內部，它將傳入的 name 視為鍵，address 視為值，並將它們添加到 addressBook 物件中。
    addressBook[name] = address;
  },
  print: () => {
    //在這個箭頭函式內部，它使用 for...of 迴圈遍歷 addressBook 物件中的每個鍵值對。
    //檢查每個鍵值是否為字串，是的話則印出
    for (const [name, address] of Object.entries(addressBook)) {
      if (typeof name === "string" && typeof address === "string") {
        console.log(`${name}: ${address}`);
      }
    }
  },
};

addressBook.addEntry("James", "Taipei");
addressBook.addEntry("Mary", "Tainan");
addressBook.addEntry("John", "Taichung");

addressBook.print();
