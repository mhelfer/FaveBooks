function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                font: {
                    fontSize: "24"
                },
                height: "40",
                title: "undefined" != typeof __alloyId5.__transform["title"] ? __alloyId5.__transform["title"] : __alloyId5.get("title"),
                author: "undefined" != typeof __alloyId5.__transform["author"] ? __alloyId5.__transform["author"] : __alloyId5.get("author"),
                color: "black"
            });
            rows.push(__alloyId7);
        }
        $.__views.__alloyId4.setData(rows);
    }
    function __alloyId11() {
        $.__views.index.removeEventListener("open", __alloyId11);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId10 = {
                id: "addBook",
                title: "AddBook",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.addBook = e.menu.add(_.pick(__alloyId10, Alloy.Android.menuItemCreateArgs));
            $.__views.addBook.applyProperties(_.omit(__alloyId10, Alloy.Android.menuItemCreateArgs));
            addBook ? $.__views.addBook.addEventListener("click", addBook) : __defers["$.__views.addBook!click!addBook"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function showBook(event) {
        var selectedBook = event.source;
        var args = {
            title: selectedBook.title,
            author: selectedBook.author
        };
        var bookView = Alloy.createController("bookdetails", args).getView();
        bookView.open();
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
        myAddBook.open();
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.index.add($.__views.__alloyId4);
    var __alloyId8 = Alloy.Collections["books"] || books;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    showBook ? $.__views.__alloyId4.addEventListener("singletap", showBook) : __defers["$.__views.__alloyId4!singletap!showBook"] = true;
    deleteBook ? $.__views.__alloyId4.addEventListener("longclick", deleteBook) : __defers["$.__views.__alloyId4!longclick!deleteBook"] = true;
    $.__views.index.addEventListener("open", __alloyId11);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var myBooks = Alloy.Collections.books;
    myBooks.fetch();
    $.index.open();
    __defers["$.__views.__alloyId4!singletap!showBook"] && $.__views.__alloyId4.addEventListener("singletap", showBook);
    __defers["$.__views.__alloyId4!longclick!deleteBook"] && $.__views.__alloyId4.addEventListener("longclick", deleteBook);
    __defers["$.__views.addBook!click!addBook"] && $.__views.addBook.addEventListener("click", addBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;