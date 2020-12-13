(this["webpackJsonpvisual-structures"]=this["webpackJsonpvisual-structures"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(0),n=a.n(s),c=a(18),r=a.n(c),l=(a(37),a(19)),u=a(8),o=a(4),d=a(5),h=a(7),j=a(6),b=a(54),m=a(55),p=(a(38),function(){return Object(i.jsxs)(b.a,{bg:"none",expand:"lg",className:"nav",children:[Object(i.jsx)(b.a.Brand,{}),Object(i.jsx)(b.a.Toggle,{}),Object(i.jsx)(b.a.Collapse,{children:Object(i.jsxs)(m.a,{className:"ml-auto",children:[Object(i.jsx)(l.b,{to:"/",className:"text-light-blue mr-2",children:"Home"}),Object(i.jsx)(l.b,{to:"/about",className:"text-light-blue mr-2",children:"About"}),Object(i.jsx)(l.b,{to:"/contact",className:"text-light-blue",children:"Contact"})]})})]})}),O=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"card titleCard rounded mb-5 pt-2 pb-1 card-"+this.props.color+(this.props.selected?"--selected":""),onClick:function(){return e.props.setSelected(e.props.title)},children:Object(i.jsx)("div",{className:"row align-items-center",children:Object(i.jsx)("div",{className:"col-12 pl-4",children:Object(i.jsx)("h3",{children:this.props.title})})})})}}]),a}(s.Component),v=a.p+"static/media/Grid.a317085b.svg",x=[a.p+"static/media/Isometric_Square_turquoise.561b4571.svg",a.p+"static/media/Isometric_Square_light-blue.928d960d.svg",a.p+"static/media/Isometric_Square_orange.0c42b84e.svg",a.p+"static/media/Isometric_Square_red.19dbf5cb.svg",a.p+"static/media/Isometric_Square_pink.1b2d4e40.svg",a.p+"static/media/Isometric_Square_raspberry.8161bcda.svg"],f=[1,2,3,4,5,6],g=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return f.map((function(e,t){return Object(i.jsxs)("div",{className:"array-item",children:[Object(i.jsx)("span",{className:"array-index text-uppercase mr-lg-3 text-turquoise",children:"Index: "+(f.length-1-t)}),Object(i.jsx)("img",{src:x[f.length-1-t],className:"isometric-square img-fluid",alt:"Isometric square"},t)]},t)}))}}]),a}(s.Component),N=[a.p+"static/media/Gradient_1_Dots.a7bdf11a.svg",a.p+"static/media/Gradient_2_Dots.49be8007.svg"],y=a(22),k=function(e){var t=Object(s.useState)(null),a=Object(y.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!1),l=Object(y.a)(r,2),u=l[0],o=l[1],d=Object(s.useState)(!1),h=Object(y.a)(d,2),j=h[0],b=h[1];return Object(s.useEffect)((function(){fetch(e.url).then((function(e){return e.text()})).then(c).catch(b).then((function(){return o(!0)}))}),[e.url]),Object(i.jsx)("div",{className:"".concat(e.className," svgInline svgInline--").concat(u?"loaded":"loading"," ").concat(j?"svgInline--errored":""),dangerouslySetInnerHTML:{__html:n}})},w=function e(t){Object(o.a)(this,e),this.data=t,this.next=null,this.prev=null},S=function(){function e(){Object(o.a)(this,e),this.head=null,this.tail=null}return Object(d.a)(e,[{key:"preppend",value:function(e){var t=new w(e);return null===this.head?(this.head=t,this.tail=t):(t.next=this.head,this.head.prev=t,this.head=t),this}},{key:"append",value:function(e){var t=new w(e);null!==this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=this.head,this.tail=t),null===this.head&&(this.head=t)}},{key:"isEmpty",value:function(){return null===this.head}},{key:"printList",value:function(){if(this.isEmpty())return console.log("Linked List is empty"),!1;for(var e=this.head;null!==e;)console.log(String(e.data)+" <-> "),e=e.next;return console.log("null"),!0}},{key:"displayList",value:function(){for(var e=[],t=this.head,a=0;null!==t;)e.push(Object(i.jsxs)(n.a.Fragment,{children:[t===this.head?Object(i.jsx)("span",{className:"head-pointer text-light-blue",children:"HEAD"}):null,Object(i.jsxs)("div",{className:"linked-list-item",children:[Object(i.jsx)("img",{src:x[a%this.getSize()],className:"isometric-square img-fluid",alt:"Isometric square"}),t!==this.tail?Object(i.jsx)(k,{url:N[a%this.getSize()],className:"gradient-dots"}):null]},t.data),t===this.tail?Object(i.jsx)("span",{className:"tail-pointer text-light-blue",children:"TAIL"}):null]},t.data)),t=t.next,a+=1;return e}},{key:"getHead",value:function(){return this.head}},{key:"getTail",value:function(){return this.tail}},{key:"getSize",value:function(){for(var e=0,t=this.head;null!=t;)e+=1,t=t.next;return e}},{key:"search",value:function(e){for(var t=this.head;null!=t;){if(t.data===e)return!0;t=t.next}return!1}},{key:"deleteFromHead",value:function(){if(this.isEmpty())return this;if(null!==this.head.next){var e=this.head.next;this.head.next=null,this.head=e}else this.head=null,this.tail=null;return this}},{key:"delete",value:function(e){if(this.isEmpty())return!1;this.head.data===e?this.deleteFromHead():this.tail.data===e&&this.deleteFromTail();for(var t=this.head;null!=t;){if(t.data===e){var a=t.prev,i=t.next;return a.next=i,i.prev=a,this}t=t.next}return!1}},{key:"deleteFromTail",value:function(){if(this.isEmpty())return this;if(this.tail===this.head&&this.deleteFromHead(),null!==this.tail){var e=this.tail.prev;e.next=null,this.tail.prev=null,this.tail=e}return this}}]),e}(),q=a.p+"static/media/Linked List Visual.1ada8853.svg",C=new S;C.append(1),C.append(33),C.append(7);var I=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={list:C},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsx)("div",{className:"col-8 col-lg-4",children:Object(i.jsx)("img",{className:"img-fluid",src:q,alt:"Linked List SVG animation"})})})}}]),a}(s.Component),A=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"enqueue",value:function(e){this.preppend(e)}},{key:"dequeue",value:function(){this.deleteFromTail()}}]),a}(S),L=a.p+"static/media/Queue Array Visual.e833bb2f.svg",_=new A;_.enqueue(1),_.enqueue(33),_.enqueue(7);var E=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={list:_},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsx)("div",{className:"col-12 col-lg-8",children:Object(i.jsx)("img",{className:"img-fluid",src:L,alt:"Queue enqueue and dequeue method SVG animation"})})})}}]),a}(s.Component),F=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"push",value:function(e){this.append(e)}},{key:"pop",value:function(){this.deleteFromTail()}},{key:"displayList",value:function(){for(var e=[],t=this.head,a=0;null!==t;)e.push(Object(i.jsxs)(n.a.Fragment,{children:[t===this.head?Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("span",{className:"head-pointer push-pointer text-light-blue",children:"PUSH"}),Object(i.jsx)("span",{className:"head-pointer pop-pointer text-light-blue",children:"POP"})]}):null,Object(i.jsxs)("div",{className:"stack-item",children:[Object(i.jsx)("img",{src:x[a%this.getSize()],className:"isometric-square img-fluid",alt:"Isometric square"}),t!==this.tail?Object(i.jsx)(k,{url:N[a%this.getSize()],className:"gradient-dots"}):null]},t.data),t===this.tail?Object(i.jsx)("span",{className:"tail-pointer text-light-blue",children:"TAIL"}):null]},t.data)),t=t.next,a+=1;return e}}]),a}(S),T=new F;T.push(3),T.push(2),T.push(1),T.pop();var V=F,G=a.p+"static/media/Stack Array Visual.ce2f26e5.svg",z=new V;z.push(1),z.push(33),z.push(7);var H=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={list:z},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsx)("div",{className:"col-12 col-lg-8",children:Object(i.jsx)("img",{className:"img-fluid",src:G,alt:"Stack push and pop method SVG animation"})})})}}]),a}(s.Component),P=function(){function e(t,a){Object(o.a)(this,e),this.id=t,this.data=a,this.neighbors=[]}return Object(d.a)(e,[{key:"addNeighbor",value:function(e){this.neighbors[e.id]=e}}]),e}(),R=[],D=function(){function e(){Object(o.a)(this,e),this.vertices=[]}return Object(d.a)(e,[{key:"addVertex",value:function(e){this.vertices.push(e)}},{key:"dfs",value:function(e){var t=this;R.push(e),e.neighbors.map((function(e){R.includes(e)||t.dfs(e)}))}},{key:"displayGraph",value:function(){var e=this;return Object(i.jsx)("div",{className:"row justify-content-center",children:this.vertices.map((function(t,a){return Object(i.jsxs)("div",{className:"col-3 mt-5 ml-5 mr-5 fadeIn",children:[Object(i.jsx)("div",{className:"graph-item",children:Object(i.jsx)("img",{src:x[a%e.vertices.length],className:"isometric-square img-fluid",alt:"Isometric square"})},t.data),t.neighbors.map((function(e,t){return Object(i.jsx)(k,{url:N[1],className:"gradient-dots"})}))]},t.id)}))})}}]),e}(),M=a.p+"static/media/Graph Visual.60d32015.svg",B=new D,U=new P(1,"Web 1.0"),W=new P(2,"Web 1.1"),K=new P(3,"FEW 1.2"),Q=new P(4,"FEW 2.3"),Y=new P(5,"FEW 2.5");Y.addNeighbor(Q),Q.addNeighbor(W),Q.addNeighbor(K),K.addNeighbor(W),W.addNeighbor(Q),U.addNeighbor(W),U.addNeighbor(K),B.addVertex(U),B.addVertex(W),B.addVertex(K),B.addVertex(Q),B.addVertex(Y);var J=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={graph:B},i}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsx)("div",{className:"col-12 col-lg-8",children:Object(i.jsx)("img",{className:"img-fluid",src:M,alt:"Graph SVG animation"})})})}}]),a}(s.Component),X=(a(47),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"diagram",children:"ARRAY"===this.props.selected?Object(i.jsx)("div",{className:"array",children:Object(i.jsx)(g,{})}):"LINKED LIST"===this.props.selected?Object(i.jsx)("div",{className:"linked-list",children:Object(i.jsx)(I,{})}):"QUEUE"===this.props.selected?Object(i.jsx)("div",{className:"queue",children:Object(i.jsx)(E,{})}):"STACK"===this.props.selected?Object(i.jsx)("div",{className:"stack",children:Object(i.jsx)(H,{})}):"GRAPH"===this.props.selected?Object(i.jsx)("div",{className:"graph",children:Object(i.jsx)(J,{})}):null})}}]),a}(s.Component)),Z=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).setSelected=function(e){i.setState({selected:e})},i.state={selected:"ARRAY"},i}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"row mt-5",children:[Object(i.jsx)("div",{className:"col-12 col-lg-3",children:this.props.dataStructures.map((function(t){return Object(i.jsx)(O,{title:t.title,color:t.color,selected:e.state.selected===t.title,setSelected:e.setSelected},t.title)}))}),Object(i.jsxs)("div",{className:"col-12 col-lg-8 offset-lg-1 text-white text-center",children:[Object(i.jsx)("img",{src:v,className:"img-fluid",alt:"Diagram Grid"}),Object(i.jsx)(X,{selected:this.state.selected})]})]})}}]),a}(s.Component),$=[{title:"ARRAY",color:"turquoise"},{title:"LINKED LIST",color:"light-blue"},{title:"STACK",color:"orange"},{title:"QUEUE",color:"red"},{title:"HASHMAP",color:"pink"},{title:"BINARY TREE",color:"raspberry"},{title:"GRAPH",color:"caribbean-green"}],ee=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(p,{}),Object(i.jsx)(Z,{dataStructures:$})]})}}]),a}(s.Component),te=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container full-page",children:[Object(i.jsx)(p,{}),Object(i.jsxs)("div",{className:"row justify-content-center align-items-center mt-lg-5",children:[Object(i.jsxs)("div",{className:"col-12 col-lg-6",children:[Object(i.jsx)("h2",{className:"text-white",children:"About"}),Object(i.jsx)("p",{className:"text-white",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus nec eros in dictum. Curabitur ultrices at nulla in elementum. Suspendisse pulvinar commodo volutpat. Vivamus fringilla dui ut dui congue fermentum. Ut eleifend mi leo. Integer dapibus arcu nec risus tempus luctus. Vivamus suscipit magna non quam suscipit, consequat eleifend magna ornare."})]}),Object(i.jsx)("div",{className:"col-12 col-lg-6"})]})]})}}]),a}(s.Component),ae=(a(48),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container full-page",children:[Object(i.jsx)(p,{}),Object(i.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(i.jsxs)("div",{className:"col-12 col-lg-8",children:[Object(i.jsx)("h2",{className:"text-center text-white",children:"Want to see more projects?"}),Object(i.jsxs)("div",{className:"icon-group mt-4 text-center",children:[Object(i.jsx)("a",{href:"https://github.com/tsamantanis",referrerPolicy:"origin",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon mr-4",viewBox:"0 0 512 512",width:"50",children:[Object(i.jsx)("title",{children:"Logo Github"}),Object(i.jsx)("path",{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"})]})}),Object(i.jsx)("a",{href:"https://dribbble.com/philippos",referrerPolicy:"origin",target:"_blank",rel:"noreferrer",children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",width:"50",children:[Object(i.jsx)("title",{children:"Logo Dribbble"}),Object(i.jsx)("path",{d:"M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z"})]})})]})]})})]})}}]),a}(s.Component));a(49);var ie=function(){return Object(i.jsx)(l.a,{children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",component:ee}),Object(i.jsx)(u.a,{exact:!0,path:"/about",component:te}),Object(i.jsx)(u.a,{exact:!0,path:"/contact",component:ae})]})})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),s(e),n(e),c(e)}))};a(50);r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(ie,{})}),document.getElementById("root")),se()}},[[51,1,2]]]);
//# sourceMappingURL=main.36215d2c.chunk.js.map