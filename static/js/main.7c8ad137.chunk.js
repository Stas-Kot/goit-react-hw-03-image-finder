(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(9),i=r.n(o),c=(r(19),r(10)),s=r(4),l=r(5),p=r(7),d=r(6),u=r(2),h=(r(22),r(8));r(23);var g=Object(u.a)("header",{target:"e19atvrw3"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),b=Object(u.a)("form",{target:"e19atvrw2"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),x=Object(u.a)("button",{target:"e19atvrw1"})({name:"1bdxip5",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}& span{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0;}"}),f=Object(u.a)("input",{target:"e19atvrw0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"}),m=r(1),j=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={searchQuery:""},e.handleInput=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSearch=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?e.props.handleSubmit(e.state.searchQuery):h.b.error("Enter a search word!")},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsx)(g,{children:Object(m.jsxs)(b,{onSubmit:this.handleSearch,children:[Object(m.jsx)(x,{type:"submit",children:Object(m.jsx)("span",{children:"Search"})}),Object(m.jsx)(f,{onChange:this.handleInput,value:this.state.searchQuery,type:"text",autocomplete:"off",placeholder:"Search images and photos"})]})})}}]),r}(n.Component);var y=Object(u.a)("ul",{target:"ejhmao70"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"});var v=Object(u.a)("li",{target:"e1ret3ds0"})({name:"12uiiq6",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12);& img{width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}& img:hover{transform:scale(1.03);cursor:zoom-in;}"});function w(e){var t=e.webformatURL,r=e.tags,n=e.activeImgIndex;return Object(m.jsx)(v,{onClick:n,children:Object(m.jsx)("img",{src:t,alt:r})})}var O=Object(u.a)("button",{target:"e7cvmpk0"})({name:"1iyclkf",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;width:180px;margin-left:auto;margin-right:auto;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"});function k(e){var t=e.onClick;return Object(m.jsx)(O,{onClick:t,type:"button",children:"Load more"})}var S=r(12),M=r.n(S);var I=Object(u.a)("div",{target:"eda5sjq1"})({name:"1infa4c",styles:"margin-left:auto;margin-right:auto"}),C=Object(u.a)("div",{target:"eda5sjq0"})({name:"3cpmmu",styles:"margin-left:auto;margin-right:auto;margin-top:95vh"});function L(){return Object(m.jsx)(I,{children:Object(m.jsx)(M.a,{type:"Puff",color:"#00BFFF",height:80,width:80,timeout:999999999,radius:500})})}function F(){return Object(m.jsx)(C,{children:Object(m.jsx)(M.a,{type:"Puff",color:"#00BFFF",height:80,width:80,timeout:999999999,radius:500})})}var q=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).api_KEY="21750958-271f4873848cc9d3a2fe2c382",e.state={gallery:null,error:null,per_page:12,status:"idle"},e}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=this,n=this.state.per_page,a=e.query,o=this.props.query,i=e.currentPage,s=this.props.currentPage;a!==o&&(this.setState({status:"pending",gallery:null}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(s,"&key=").concat(this.api_KEY,"&image_type=photo&orientation=horizontal&per_page=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No results were found for your query: ".concat(o)))})).then((function(e){var t=e.hits;0===t.length?(h.b.error("No results were found for your query: ".concat(o)),r.setState({status:"idle"})):(r.props.onNewFetch(t),r.setState({gallery:t,status:"resolved"}))})).catch((function(e){return r.setState({error:e,status:"rejected"})}))),i!==s&&(this.setState({status:"pendingMore"}),fetch("https://pixabay.com/api/?q=".concat(o,"&page=").concat(s,"&key=").concat(this.api_KEY,"&image_type=photo&orientation=horizontal&per_page=").concat(n)).then((function(e){return e.ok?e.json():Promise.reject(new Error("No more results were found for: ".concat(o)))})).then((function(e){var t=e.hits;0!==t.length?(r.props.onLoadMoreFetch(t),r.setState((function(e){return{gallery:[].concat(Object(c.a)(e.gallery),Object(c.a)(t)),status:"resolved"}}))):h.b.error("No more results were found for: ".concat(o))})).catch((function(e){return r.setState({error:e,status:"rejected"})}))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,r=t.gallery,n=t.error,a=t.status;return"idle"===a?Object(m.jsx)(m.Fragment,{}):"pending"===a?Object(m.jsx)(L,{}):"pendingMore"===a?Object(m.jsx)(F,{}):"rejected"===a?(h.b.error("".concat(n.message)),Object(m.jsx)("h1",{children:n.message})):"resolved"===a?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{children:r.map((function(t,r){var n=t.id,a=t.webformatURL,o=t.tags;return Object(m.jsx)(w,{webformatURL:a,tags:o,openModal:e.props.handleModal,activeImgIndex:function(){return e.props.handeleActiveIdx(r)}},n)}))}),Object(m.jsx)(k,{onClick:this.props.onLoadMore})]}):void 0}}]),r}(n.Component),z=r(14);var E=Object(u.a)("div",{target:"e1lekqbj1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),_=Object(u.a)("div",{target:"e1lekqbj0"})({name:"1evvvp2",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px);color:#fff;background-color:blue"});var A=Object(u.a)("button",{target:"esixef00"})({name:"1gny134",styles:"position:absolute;top:10px;right:30px;width:fit-content;cursor:pointer;margin:0;padding:10px;border:none;border-radius:50%;background-color:grey;transition:background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;align-items:center;justify-content:center;&:hover{background-color:#fff;}&>svg{width:30px;height:30px;}"}),N=function(e){var t=e.onClick,r=e.children;return Object(m.jsx)(A,{type:"button",onClick:t,children:r})},P=document.querySelector("#modal-root"),Q=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)(E,{onClick:this.handleBackdropClick,children:Object(m.jsxs)(_,{children:[Object(m.jsx)(N,{onClick:this.props.onClose,children:Object(m.jsx)(z.a,{})}),Object(m.jsx)("img",{src:this.props.largeImageURL,alt:this.props.tags})]})}),P)}}]),r}(n.Component);var U=Object(u.a)("div",{target:"ei41pl80"})({name:"kyj7j7",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px;padding-bottom:24px"}),D=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={searchQuery:"",showModal:!1,gallery:null,activeImgIdx:0,page:1},e.setActiveImgIdx=function(t){e.setState({activeImgIdx:t}),e.toggleModal()},e.handleNewFetch=function(t){e.setState({gallery:t})},e.handleLoadMoreFetch=function(t){e.setState((function(e){return{gallery:[].concat(Object(c.a)(e.gallery),Object(c.a)(t))}}))},e.onSubmit=function(t){e.setState({searchQuery:t,page:1})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(m.jsxs)(U,{children:[Object(m.jsx)(j,{handleSubmit:this.onSubmit}),Object(m.jsx)(q,{query:this.state.searchQuery,handleModal:this.toggleModal,handeleActiveIdx:this.setActiveImgIdx,onNewFetch:this.handleNewFetch,onLoadMoreFetch:this.handleLoadMoreFetch,currentPage:this.state.page,onLoadMore:this.onLoadMore}),Object(m.jsx)(h.a,{autoClose:3e3}),this.state.showModal&&Object(m.jsx)(Q,{onClose:this.toggleModal,largeImageURL:this.state.gallery[this.state.activeImgIdx].largeImageURL})]})}}]),r}(n.Component);i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7c8ad137.chunk.js.map