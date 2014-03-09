function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId6.__transform["title"] ? __alloyId6.__transform["title"] : __alloyId6.get("title"),
                author: "undefined" != typeof __alloyId6.__transform["author"] ? __alloyId6.__transform["author"] : __alloyId6.get("author"),
                color: "black"
            });
            rows.push(__alloyId8);
        }
        $.__views.__alloyId5.setData(rows);
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookView = Alloy.createController("bookdetails", args).getView();
        $.navGroupWin.openWindow(bookView);
    }
    function deleteBook(event) {
        var alertDialog = Titanium.UI.createAlertDialog({
            title: "Remove",
            message: "Do you want to remove this row?",
            buttonNames: [ "Yes", "No" ],
            cancel: 1
        });
        alertDialog.show();
        alertDialog.addEventListener("click", function(e) {
            if (0 == e.index) {
                event.source;
                myBooks.at(event.index).destroy();
            }
        });
    }
    function addBook() {
        var myAddBook = Alloy.createController("addbook", {}).getView();
        $.navGroupWin.openWindow(myAddBook);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("books");
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Books",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createTableView({
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    var __alloyId9 = Alloy.Collections["books"] || books;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    showBook ? $.__views.__alloyId5.addEventListener("click", showBook) : __defers["$.__views.__alloyId5!click!showBook"] = true;
    deleteBook ? $.__views.__alloyId5.addEventListener("longpress", deleteBook) : __defers["$.__views.__alloyId5!longpress!deleteBook"] = true;
    var __alloyId13 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "Add book"
    });
    __alloyId13.push($.__views.add);
    addBook ? $.__views.add.addEventListener("click", addBook) : __defers["$.__views.add!click!addBook"] = true;
    $.__views.__alloyId11 = Ti.UI.iOS.createToolbar({
        items: __alloyId13,
        bottom: "0",
        id: "__alloyId11"
    });
    $.__views.__alloyId4.add($.__views.__alloyId11);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId4,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    myBooks.fetch();
    $.navGroupWin.open();
    __defers["$.__views.__alloyId5!click!showBook"] && $.__views.__alloyId5.addEventListener("click", showBook);
    __defers["$.__views.__alloyId5!longpress!deleteBook"] && $.__views.__alloyId5.addEventListener("longpress", deleteBook);
    __defers["$.__views.add!click!addBook"] && $.__views.add.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;