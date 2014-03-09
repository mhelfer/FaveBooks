var myBooks = Alloy.Collections.books;
myBooks.fetch();

//Event callback for clicking on a book title.
function showBook(event) {
	var selectedBook = event.source;
	var args = {
		title: selectedBook.title,
		author: selectedBook.author
	};
	var bookView = Alloy.createController("bookdetails", args).getView();
	if(OS_IOS){
		$.navGroupWin.openWindow(bookView);
	}
	if (OS_ANDROID) {
		bookView.open();	
	}
}


function deleteBook(event) {
	var alertDialog = Titanium.UI.createAlertDialog({
		title: 'Remove',
		message: 'Do you want to remove this row?',
		buttonNames: ['Yes','No'],
		cancel: 1
	});
	alertDialog.show();
	
	alertDialog.addEventListener('click', function(e){
		// YES
		if(e.index == 0) {
			var selectedBook = event.source;
			myBooks.at(event.index).destroy();
		}
	});
} 

//Event callback for AddBook Button
function addBook(){
	var myAddBook = Alloy.createController("addbook", {}).getView();
	if(OS_IOS) {
		$.navGroupWin.openWindow(myAddBook);
	}
	if(OS_ANDROID) {
		myAddBook.open();
	}
} 

//Open Main Window at application start
if(OS_IOS) {
	$.navGroupWin.open();
}
if(OS_ANDROID) {
	$.index.open();	
}
