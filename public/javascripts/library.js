"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Library = function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library(props) {
    _classCallCheck(this, Library);

    var _this = _possibleConstructorReturn(this, (Library.__proto__ || Object.getPrototypeOf(Library)).call(this, props));

    _this.state = { page: "list" };
    return _this;
  }

  _createClass(Library, [{
    key: "change",
    value: function change(e) {
      this.setState(function (old) {
        return { "type": e.target.value };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var page = void 0;
      switch (this.state.page) {
        case "list":
          page = React.createElement(ListPage, null);
          break;
        case "formulaire":
          page = React.createElement(FormPage, null);
          break;
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Library App"
        ),
        React.createElement(Menu, { click: function click(p) {
            return _this2.setState({ page: p });
          } }),
        page
      );
    }
  }]);

  return Library;
}(React.Component);

function ListPage(props) {
  var dest = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = documentsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var d = _step.value;

      dest.push(React.createElement(DocumentItem, { name: d.name, author: d.author, year: d.year, type: d.type }));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Notre liste : "
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Nom"
          ),
          React.createElement(
            "th",
            null,
            "Auteur"
          ),
          React.createElement(
            "th",
            null,
            "Date de parution"
          ),
          React.createElement(
            "th",
            null,
            "Type de document"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        dest
      )
    )
  );
}

function FormPage(props) {
  console.log("L'utilisateur ajoute un nouveau Document...");
  return React.createElement(
    "div",
    { className: "form-style-8" },
    React.createElement(
      "h1",
      null,
      "Notre Formulaire : "
    ),
    React.createElement(
      "form",
      { className: "", action: "", method: "post" },
      React.createElement("input", { type: "text", name: "name", placeholder: "Nom du Document" }),
      React.createElement("input", { type: "text", name: "author", placeholder: "Nom de l'auteur" }),
      React.createElement("input", { type: "number", min: "1500", max: "2019", name: "year", placeholder: "Ann\xE9e de parution" }),
      React.createElement(
        "select",
        { type: "text", name: "type", placeholder: "Type de document" },
        React.createElement(
          "option",
          null,
          "Roman"
        ),
        React.createElement(
          "option",
          null,
          "Manga"
        ),
        React.createElement(
          "option",
          null,
          "Nouvelle"
        ),
        React.createElement(
          "option",
          null,
          "Document"
        )
      ),
      React.createElement("input", { type: "submit", value: "Enregistrer" })
    )
  );
}

function Menu(props) {
  return React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#", onClick: function onClick() {
            return props.click("list");
          } },
        "Les Ouvrages"
      )
    ),
    React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: "#", onClick: function onClick() {
            return props.click("formulaire");
          } },
        "Nouvel Ouvrage"
      )
    )
  );
}

function DocumentItem(props) {
  return React.createElement(
    "tr",
    null,
    React.createElement(
      "td",
      null,
      props.name
    ),
    React.createElement(
      "td",
      null,
      props.author
    ),
    React.createElement(
      "td",
      null,
      props.year
    ),
    React.createElement(
      "td",
      null,
      props.type
    )
  );
}

ReactDOM.render(React.createElement(Library, null), document.getElementById("root"));