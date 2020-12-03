(this["webpackJsonpvisual-structures"]=this["webpackJsonpvisual-structures"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),s=n.n(a),c=n(18),r=n.n(c),l=(n(37),n(19)),u=n(8),o=n(4),h=n(5),d=n(7),j=n(6),b=n(54),p=n(55),m=(n(38),function(){return Object(i.jsxs)(b.a,{bg:"none",expand:"lg",className:"nav",children:[Object(i.jsx)(b.a.Brand,{}),Object(i.jsx)(b.a.Toggle,{}),Object(i.jsx)(b.a.Collapse,{children:Object(i.jsxs)(p.a,{className:"ml-auto",children:[Object(i.jsx)(l.b,{to:"/",className:"text-light-blue mr-2",children:"Home"}),Object(i.jsx)(l.b,{to:"/about",className:"text-light-blue mr-2",children:"About"}),Object(i.jsx)(l.b,{to:"/contact",className:"text-light-blue",children:"Contact"})]})})]})}),O=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"card titleCard rounded mb-5 pt-2 pb-1 card-"+this.props.color+(this.props.selected?"--selected":""),onClick:function(){return e.props.setSelected(e.props.title)},children:Object(i.jsx)("div",{className:"row align-items-center",children:Object(i.jsx)("div",{className:"col-12 pl-4",children:Object(i.jsx)("h3",{children:this.props.title})})})})}}]),n}(a.Component),v=n.p+"static/media/Grid.a317085b.svg",f=[n.p+"static/media/Isometric_Square_turquoise.561b4571.svg",n.p+"static/media/Isometric_Square_light-blue.928d960d.svg",n.p+"static/media/Isometric_Square_orange.0c42b84e.svg",n.p+"static/media/Isometric_Square_red.19dbf5cb.svg",n.p+"static/media/Isometric_Square_pink.1b2d4e40.svg",n.p+"static/media/Isometric_Square_raspberry.8161bcda.svg"],x=[1,2,3,4,5,6],g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return x.map((function(e,t){return Object(i.jsxs)("div",{className:"array-item",children:[Object(i.jsx)("span",{className:"array-index text-uppercase mr-lg-3 text-turquoise",children:"Index: "+(x.length-1-t)}),Object(i.jsx)("img",{src:f[x.length-1-t],className:"isometric-square img-fluid",alt:"Isometric square"},t)]},t)}))}}]),n}(a.Component),y=[n.p+"static/media/Gradient_1_Dots.a7bdf11a.svg",n.p+"static/media/Gradient_2_Dots.49be8007.svg"],N=n(22),k=function(e){var t=Object(a.useState)(null),n=Object(N.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(!1),l=Object(N.a)(r,2),u=l[0],o=l[1],h=Object(a.useState)(!1),d=Object(N.a)(h,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){fetch(e.url).then((function(e){return e.text()})).then(c).catch(b).then((function(){return o(!0)}))}),[e.url]),Object(i.jsx)("div",{className:"".concat(e.className," svgInline svgInline--").concat(u?"loaded":"loading"," ").concat(j?"svgInline--errored":""),dangerouslySetInnerHTML:{__html:s}})},S=function e(t){Object(o.a)(this,e),this.data=t,this.next=null,this.prev=null},w=function(){function e(){Object(o.a)(this,e),this.head=null,this.tail=null}return Object(h.a)(e,[{key:"preppend",value:function(e){var t=new S(e);return null===this.head?(this.head=t,this.tail=t):(t.next=this.head,this.head.prev=t,this.head=t),this}},{key:"append",value:function(e){var t=new S(e);null!==this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=this.head,this.tail=t),null===this.head&&(this.head=t)}},{key:"isEmpty",value:function(){return null===this.head}},{key:"printList",value:function(){if(this.isEmpty())return console.log("Linked List is empty"),!1;for(var e=this.head;null!==e;)console.log(String(e.data)+" <-> "),e=e.next;return console.log("null"),!0}},{key:"displayList",value:function(){for(var e=[],t=this.head,n=0;null!==t;)e.push(Object(i.jsxs)(s.a.Fragment,{children:[t===this.head?Object(i.jsx)("span",{className:"head-pointer text-light-blue",children:"HEAD"}):null,Object(i.jsxs)("div",{className:"linked-list-item",children:[Object(i.jsx)("img",{src:f[n%this.getSize()],className:"isometric-square img-fluid",alt:"Isometric square"}),t!==this.tail?Object(i.jsx)(k,{url:y[n%this.getSize()],className:"gradient-dots"}):null]},t.data),t===this.tail?Object(i.jsx)("span",{className:"tail-pointer text-light-blue",children:"TAIL"}):null]},t.data)),t=t.next,n+=1;return e}},{key:"getHead",value:function(){return this.head}},{key:"getTail",value:function(){return this.tail}},{key:"getSize",value:function(){for(var e=0,t=this.head;null!=t;)e+=1,t=t.next;return e}},{key:"search",value:function(e){for(var t=this.head;null!=t;){if(t.data===e)return!0;t=t.next}return!1}},{key:"deleteFromHead",value:function(){if(this.isEmpty())return this;if(null!==this.head.next){var e=this.head.next;this.head.next=null,this.head=e}else this.head=null,this.tail=null;return this}},{key:"delete",value:function(e){if(this.isEmpty())return!1;this.head.data===e?this.deleteFromHead():this.tail.data===e&&this.deleteFromTail();for(var t=this.head;null!=t;){if(t.data===e){var n=t.prev,i=t.next;return n.next=i,i.prev=n,this}t=t.next}return!1}},{key:"deleteFromTail",value:function(){if(this.isEmpty())return this;if(this.tail===this.head&&this.deleteFromHead(),null!==this.tail){var e=this.tail.prev;e.next=null,this.tail.prev=null,this.tail=e}return this}}]),e}(),C=new w;C.append(1),C.append(33),C.append(7);var q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={list:C},i}return Object(h.a)(n,[{key:"render",value:function(){return this.state.list.displayList()}}]),n}(a.Component),I=new(function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"enqueue",value:function(e){this.preppend(e)}},{key:"dequeue",value:function(){this.deleteFromTail()}}]),n}(w));I.enqueue(1),I.enqueue(33),I.enqueue(7);var _=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={list:I},i}return Object(h.a)(n,[{key:"render",value:function(){return this.state.list.displayList()}}]),n}(a.Component),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"push",value:function(e){this.append(e)}},{key:"pop",value:function(){this.deleteFromTail()}}]),n}(w),L=new A;L.push(3),L.push(2),L.push(1),L.pop();var E=new A;E.push(1),E.push(33),E.push(7);var T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={list:E},i}return Object(h.a)(n,[{key:"render",value:function(){return this.state.list.displayList()}}]),n}(a.Component),F=(n(47),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"diagram",children:"ARRAY"===this.props.selected?Object(i.jsx)("div",{className:"array",children:Object(i.jsx)(g,{})}):"LINKED LIST"===this.props.selected?Object(i.jsx)("div",{className:"linked-list",children:Object(i.jsx)(q,{})}):"QUEUE"===this.props.selected?Object(i.jsx)("div",{className:"linked-list",children:Object(i.jsx)(_,{})}):"STACK"===this.props.selected?Object(i.jsx)("div",{className:"linked-list",children:Object(i.jsx)(T,{})}):null})}}]),n}(a.Component)),z=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).setSelected=function(e){i.setState({selected:e})},i.state={selected:"ARRAY"},i}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"col-12 col-lg-3",children:this.props.dataStructures.map((function(t){return Object(i.jsx)(O,{title:t.title,color:t.color,selected:e.state.selected===t.title,setSelected:e.setSelected},t.title)}))}),Object(i.jsxs)("div",{className:"col-12 col-lg-8 offset-lg-1 text-white text-center",children:[Object(i.jsx)("img",{src:v,className:"img-fluid",alt:"Diagram Grid"}),Object(i.jsx)(F,{selected:this.state.selected})]})]})}}]),n}(a.Component),H=[{title:"ARRAY",color:"turquoise"},{title:"LINKED LIST",color:"light-blue"},{title:"STACK",color:"orange"},{title:"QUEUE",color:"red"},{title:"HASHMAP",color:"pink"},{title:"BINARY TREE",color:"raspberry"},{title:"GRAPH",color:"caribbean-green"}],R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(m,{}),Object(i.jsx)(z,{dataStructures:H})]})}}]),n}(a.Component),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container full-page",children:[Object(i.jsx)(m,{}),Object(i.jsxs)("div",{className:"row justify-content-center align-items-center mt-lg-5",children:[Object(i.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(i.jsx)("h2",{className:"text-white",children:"About"}),Object(i.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus nec eros in dictum. Curabitur ultrices at nulla in elementum. Suspendisse pulvinar commodo volutpat. Vivamus fringilla dui ut dui congue fermentum. Ut eleifend mi leo. Integer dapibus arcu nec risus tempus luctus. Vivamus suscipit magna non quam suscipit, consequat eleifend magna ornare."})]}),Object(i.jsx)("div",{className:"col-12 col-lg-6"})]})]})}}]),n}(a.Component),M=(n(48),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container full-page",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(i.jsx)("h2",{className:"text-center text-white",children:"Want to see more projects?"}),Object(i.jsxs)("div",{className:"icon-group mt-4 text-center",children:[Object(i.jsx)("a",{href:"https://github.com/tsamantanis",referrerPolicy:"origin",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon mr-4",viewBox:"0 0 512 512",width:"50",children:[Object(i.jsx)("title",{children:"Logo Github"}),Object(i.jsx)("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})]})}),Object(i.jsx)("a",{href:"https://dribbble.com/philippos",referrerPolicy:"origin",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",width:"50",children:[Object(i.jsx)("title",{children:"Logo Dribbble"}),Object(i.jsx)("path",{d:"M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z"})]})})]})]})})]})}}]),n}(a.Component));n(49);var B=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",component:R}),Object(i.jsx)(u.a,{exact:!0,path:"/about",component:D}),Object(i.jsx)(u.a,{exact:!0,path:"/contact",component:M})]})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))};n(50);r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(B,{})}),document.getElementById("root")),G()}},[[51,1,2]]]);
//# sourceMappingURL=main.f19fe68a.chunk.js.map