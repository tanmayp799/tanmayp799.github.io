(this["webpackJsonpmy-portfolio-website"]=this["webpackJsonpmy-portfolio-website"]||[]).push([[0],{35:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n(4),i=n(1),s=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),a=Object(c.a)(n,2),l=a[0],o=a[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://tanmayp799.github.io/",j="About",b="Tanmay Patil",m="CSE Sophomore at IIT Bombay",d="I am an AI-ML Enthusiast, currently deep diving into the field. I also find myself interested in various algorithms and have fun studying and implementing them. Apart from coding, I am also interested in financial markets. I am a competitive and hardworking individual always trying to perform better than yesterday. I like solving real world problems, and with my grit, I can be counted on to get the work done.I am always open to networking and believe in learning from wherever I can.",u="https://bighome.iitb.ac.in/index.php/s/YSgKEgyR4Mtfg6Y",h={linkedin:"https://www.linkedin.com/in/tanmay-patil-8129b6226/",github:"https://github.com/tanmayp799"},p=[{name:"Bank Customer Churn Prediction",description:"Performed EDA(Exploratory Data Analysis) to find a solution to customer churning and constructed an ANN to predict if a customer will leave the bank or not.",stack:["Python","Pandas","Tensorflow"],sourceCode:"https://github.com/tanmayp799/Bank-Customer-Churn-Predictor"},{name:"Railway Planner",description:"Built a railway planner in C++ using various Data Structures capable of performing multiple complex tasks, as a part of my DSA course.",stack:["C++"],sourceCode:"https://github.com/tanmayp799/Railway-Planner"},{name:"Generating Representative Images via PCA",description:"Applied Principal Component analysis concepts to generate representative images of fruits from sampled dataset.",stack:["Python","Numpy","Pandas"],sourceCode:"https://github.com/tanmayp799/Multivariate-Gaussian_PCA"},{name:"8-Ball Pool",description:"Built a 2-player 8-ball Pool game in a team project using principles of Object Oriented Programming in Javascript.",stack:["Javscript","CSS","HTML"],sourceCode:"https://github.com/DheGit/devcom-game-hackathon"},{name:"Tic-Tac-Toe",description:"Built the classic Tic-Tac-Toe using principles of Object Oriented Programming in Java language.",stack:["Java"],sourceCode:"https://github.com/tanmayp799/Tic-Tac-Toe"},{name:"Bubble Shooter",description:"Using ideas of OOP, built an User-interactive bubble shooter game in C++",stack:["C++"],sourceCode:"https://github.com/tanmayp799/Bubble-Shooter"},{name:"E-Learning Website",description:"Built an E-Learning Website in a team project using MERN stack.",stack:["Nodejs","ReactJS","Express","MongoDB"],sourceCode:"https://github.com/ATAck-Portal-for-Courses/Portal-For-Courses"}],O=["C++","Python","Java","Bash","Git","HTML","CSS","Web Scraping","JavaScript","MongoDB","React","Nodejs","SQL","AWK","SED"],f="tanmay.patil.iitb@gmail.com",g=n(21),x=n.n(g),k=n(19),v=n.n(k),N=n(23),y=n.n(N),_=n(22),C=n.n(_),w=(n(35),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0],n=t.themeName,a=t.toggleTheme,l=Object(i.useState)(!1),o=Object(c.a)(l,2),j=o[0],b=o[1],m=function(){return b(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:m,className:"link link--nav",children:"Projects"})}):null,O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:m,className:"link link--nav",children:"Skills"})}):null,f?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:m,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:a,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(v.a,{}):Object(s.jsx)(x.a,{})}),Object(s.jsx)("button",{type:"button",onClick:m,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(C.a,{}):Object(s.jsx)(y.a,{})})]})}),P=(n(39),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(w,{})]})}),S=n(16),T=n.n(S),E=n(24),B=n.n(E),I=n(28),A=(n(40),n.p+"static/media/selfie.972e4c4c.jpeg"),J=function(){var e=b,t=m,n=d,a=u,c=h;return Object(s.jsxs)("div",{className:"about_wrapper",children:[Object(s.jsxs)("div",{className:"about left",children:[e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(s.jsxs)(s.Fragment,{children:[c.github&&Object(s.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),c.linkedin&&Object(s.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(B.a,{})})]})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)(I.a,{src:A,className:"fluid image"})})]})},L=n(11),M=n.n(L),D=n(26),R=n.n(D),G=(n(44),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},M()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(T.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})}),W=(n(45),function(){return p.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(s.jsx)(G,{project:e},M()())}))})]}):null}),H=(n(46),function(){return O.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},M()())}))})]}):null}),Y=n(27),F=n.n(Y),K=(n(47),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?a(!0):a(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(F.a,{fontSize:"large"})})}):null}),U=(n(48),function(){return f?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(f),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(n(49),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/tanmayp799",className:"link footer__link",children:"Created By Tanmay Patil"})})}),Q=(n(50),function(){var e=Object(i.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(P,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(J,{}),Object(s.jsx)(W,{}),Object(s.jsx)(H,{}),Object(s.jsx)(U,{})]}),Object(s.jsx)(K,{}),Object(s.jsx)(z,{})]})});n(51);Object(a.render)(Object(s.jsx)(l,{children:Object(s.jsx)(Q,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5cc59679.chunk.js.map