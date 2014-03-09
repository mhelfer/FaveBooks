var myBooks = Alloy.Collections.books;

function addBook() {
	var book = Alloy.createModel('books',{
		title : $.titleInput.value,
		author : $.authorInput.value
	});
	
	myBooks.add(book);
	book.save();
	$.addbook.close();
}