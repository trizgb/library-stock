(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(22),i=a.n(o),c=(a(30),a(15)),l=a(13),s=a(3),u=a(4),m=a(6),p=a(5),d=a(7),h=a(2),b=[{title:"Goodnight Stories for Rebel Girls",author:"Elena Favilli",price:"18.95"},{title:"The Little Prince",author:"Antoine De Saint Exupery",price:"12.95"},{title:"The Boy in the Striped Pyjamas",author:"John Boyne",price:"7.50"},{title:"The Metamorphosis",author:"Franz Kafka",price:"4.95"},{title:"PHP, MySQL, JavaScript & HTML5 All-in-One For Dummies",author:"Steve Suhering, Janet Valade",price:"14.25"},{title:"Murder on the Orient Express",author:"Agatha Christie",price:"8.95"},{title:"Veronika Decides to Die",author:"Paulo Coelho",price:"10"},{title:"One Hundred Years of Solitude",author:"Gabriel Garcia Marquez",price:"7.45"},{title:"Herding Cats: A Sarah's Scribbles Collection",author:"Sarah Andersen",price:"8.95"},{title:"Brave New World",author:"Aldous Huxley",price:"6.50"}],f=a(11),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksList,a=e.getInfoBook,r=e.handleDelete,o=e.colorDiscount;return t.length>0?n.a.createElement("div",{className:"books__container"},n.a.createElement("ul",{className:"books__list"},t.map(function(e,t){return n.a.createElement("li",{className:"books__list-item",key:t},n.a.createElement("div",{className:"features__container"},n.a.createElement(f.b,{to:"/edit/".concat(e.id)},n.a.createElement("i",{className:"fas fa-edit","data-update":e.id,"data-title":e.title,"data-author":e.author,"data-price":e.price,onClick:a})),n.a.createElement("i",{className:"fas fa-trash-alt","data-update":e.id,onClick:r})),n.a.createElement("div",{className:"book__container"},n.a.createElement("h2",{className:"book__title"},e.title),n.a.createElement("p",{className:"book__author"},e.author),n.a.createElement("p",{className:"book__price ".concat(o)},e.price,"\u20ac")))}))):n.a.createElement("div",{className:"books__list no-data"},n.a.createElement("p",null,"No data"))}}]),t}(r.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.getSearch;return n.a.createElement("div",{className:"search__title-container"},n.a.createElement("label",{htmlFor:"",className:"search__title-label"},"Search book",n.a.createElement("i",{className:"fas fa-search"})),n.a.createElement("input",{type:"text",className:"search__field",placeholder:"Title",onKeyUp:e}))}}]),t}(r.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.getDiscount,a=e.applyDiscount;return n.a.createElement("div",{className:"filter__discount-container"},n.a.createElement("form",{action:"",className:"filter__discount"},n.a.createElement("label",{htmlFor:"",className:"filter__discount-label"},"Apply Discount"),n.a.createElement("input",{type:"number",className:"discount__field",onKeyUp:t}),n.a.createElement("button",{type:"button",className:"button discount__button",onClick:a},n.a.createElement("i",{className:"fas fa-percentage"}))))}}]),t}(r.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksList,a=e.getSearch,r=e.getDiscount,o=e.applyDiscount,i=e.getInfoBook,c=e.handleDelete,l=e.colorDiscount;return n.a.createElement("main",{className:"app__main"},n.a.createElement("div",{className:"main__wrapper"},n.a.createElement(k,{booksList:t,getInfoBook:i,handleDelete:c,colorDiscount:l}),n.a.createElement("div",{className:"filters__container"},n.a.createElement("div",{className:"filters__wrapper"},n.a.createElement(_,{getSearch:a}),n.a.createElement(E,{getDiscount:r,applyDiscount:o})))))}}]),t}(r.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.booksListState,a=e.handleEdit,o=e.updateBook,i=this.props.match.params.id;if(t.length>0&&i<=t.length){var c=t[i],l=c.title,s=c.author,u=c.price;return n.a.createElement("div",{className:"app__form"},n.a.createElement("div",{className:"form__wrapper"},n.a.createElement("div",{className:"features__container"},n.a.createElement(f.b,{to:"/"},n.a.createElement("i",{className:"fas fa-times"}))),n.a.createElement("h1",{className:"form__heading"},"Edit the book"),n.a.createElement("form",{action:"",className:"form__container"},n.a.createElement("div",{className:"form__title-container"},n.a.createElement("label",{htmlFor:"form-title",className:"form__title-label"},"title"),n.a.createElement("input",{type:"text",id:"form-title",className:"input form__title","data-field":"title",defaultValue:l,onKeyUp:a})),n.a.createElement("div",{className:"form__author-container"},n.a.createElement("label",{htmlFor:"form-author",className:"form__author-label"},"author"),n.a.createElement("input",{type:"text",id:"form-author",className:"input form__author","data-field":"author",defaultValue:s,onKeyUp:a})),n.a.createElement("div",{className:"form__price-container"},n.a.createElement("label",{htmlFor:"form-price",className:"form__price-label"},"price"),n.a.createElement("input",{type:"number",id:"form-price",className:"input form__price","data-field":"price",defaultValue:u,onKeyUp:a}))),n.a.createElement(f.b,{to:"/",className:"form__link-submit"},n.a.createElement("input",{className:"form__submit-edit",type:"submit",value:"Edit",onClick:o}))))}return n.a.createElement(r.Fragment,null,n.a.createElement("p",null,"No data"),n.a.createElement(f.b,{to:"/"},n.a.createElement("i",{className:"fas fa-times"})))}}]),t}(r.Component),O=(a(39),a(12)),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={books:[],editBook:{title:"",author:"",price:""},searchBook:"",priceDiscount:"",colorDiscount:""},a.getSearch=a.getSearch.bind(Object(h.a)(Object(h.a)(a))),a.getDiscount=a.getDiscount.bind(Object(h.a)(Object(h.a)(a))),a.applyDiscount=a.applyDiscount.bind(Object(h.a)(Object(h.a)(a))),a.handleEdit=a.handleEdit.bind(Object(h.a)(Object(h.a)(a))),a.getInfoBook=a.getInfoBook.bind(Object(h.a)(Object(h.a)(a))),a.updateBook=a.updateBook.bind(Object(h.a)(Object(h.a)(a))),a.handleDelete=a.handleDelete.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getBooks()}},{key:"componentDidUpdate",value:function(){this.getSearchBook()}},{key:"getBooks",value:function(){var e=b.map(function(e,t){return Object(l.a)({},e,{id:t})});this.setState({books:e})}},{key:"getSearch",value:function(e){var t=e.currentTarget.value;this.setState({searchBook:t})}},{key:"getSearchBook",value:function(){var e=this.state,t=e.books,a=e.searchBook;return t.filter(function(e){return e.title.toUpperCase().includes(a.toUpperCase())})}},{key:"getDiscount",value:function(e){var t=e.currentTarget.value;""!==t?this.setState({priceDiscount:parseInt(t)}):this.setState({priceDiscount:""})}},{key:"applyDiscount",value:function(){var e=this.state,t=e.books,a=e.priceDiscount;if(""===a){var r=b.map(function(e,t){var a=e.price;return Object(l.a)({},e,{price:a,id:t})});this.setState({books:r,colorDiscount:""})}else{if(!(a>0&&a<=100))return alert("Discount must be higher than 0 and same or lower than 100%");var n=t.map(function(e){var t=parseFloat(e.price)*a/100,r=(parseFloat(e.price)-t).toFixed(2);return Object(l.a)({},e,{price:r})});this.setState({books:n,colorDiscount:"red"})}}},{key:"handleEdit",value:function(e){var t=e.currentTarget.getAttribute("data-field"),a=e.currentTarget.value;this.setState(function(e){var r=e.editBook;return{editBook:Object(l.a)({},r,Object(c.a)({},t,a))}})}},{key:"getInfoBook",value:function(e){var t=parseInt(e.currentTarget.getAttribute("data-update")),a=e.currentTarget.getAttribute("data-title"),r=e.currentTarget.getAttribute("data-author"),n=e.currentTarget.getAttribute("data-price");this.setState(function(e){var o=e.editBook;return{editBook:Object(l.a)({},o,{id:t,title:a,author:r,price:n})}})}},{key:"updateBook",value:function(){for(var e=this.state.books,t=0;t<e.length;t++)e[t].id===this.state.editBook.id&&(e[t]=this.state.editBook);this.setState({books:e,editBook:{title:"",author:"",price:"",id:0},searchBook:""})}},{key:"handleDelete",value:function(e){var t=parseInt(e.currentTarget.getAttribute("data-update"));this.setState(function(e){var a=e.books,r=a.findIndex(function(e){return e.id===t});return-1!==r&&a.splice(r,1),{books:a.map(function(e,t){return Object(l.a)({},e,{id:t})})}})}},{key:"render",value:function(){var e=this,t=this.getSearchBook();return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"app__header"},n.a.createElement("div",{className:"header__wrapper"},n.a.createElement("div",{className:"logo__container"}))),n.a.createElement(O.c,null,n.a.createElement(O.a,{exact:!0,path:"/",render:function(){return n.a.createElement(v,{booksList:t,getSearch:e.getSearch,getDiscount:e.getDiscount,applyDiscount:e.applyDiscount,getInfoBook:e.getInfoBook,handleDelete:e.handleDelete,colorDiscount:e.state.colorDiscount})}}),n.a.createElement(O.a,{path:"/edit/:id",render:function(t){return n.a.createElement(g,{match:t.match,booksListState:e.state.books,handleEdit:e.handleEdit,editBook:e.state.editBook,updateBook:e.updateBook})}})),n.a.createElement("footer",{className:"app__footer"},n.a.createElement("div",{className:"footer__wrapper"})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(f.a,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.85a6119b.chunk.js.map