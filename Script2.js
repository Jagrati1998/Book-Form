// JavaScript source code
// book class  represent a book 
document.getElementById("#d").innerHTML = "hhh";

class book {
    constructor(title, auther, isbn) {
        this.title = tittle;
        this.auther = auther;
        this.isbn = isbn;


    }
}
//UI class handles storage
class UI {
    static displayBooks() {

        const storedBooks = [
            {
                tittle: "one",
                auther: "a",
                isbn: "2342"

            }
        ];
       
        const books = storedBooks;
        books.forEach((book) => UI.addBookToList(book));
         
        static function addBookToList(book) {
            const List = document.querySelector("#body-list");
            const row = document.createElement('tr');
            row.innerHTML = `<td>${'#book.tittle'} </td>
                            <td>${'#book.auther'} </td>
                             <td>${'#book.isbn'} </td>`;

                
            List.appendChild(row);



        }
}
}
//store class: Display books
//add a book
document.addEventListener('DOMContentLoaded', UI.displayBooks);
