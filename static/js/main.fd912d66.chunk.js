(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{44:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(28),i=t.n(a),c=t(13),s=t(2),o=t(21),p=t(7),l=t.n(p),m=t(14),u=t(12),d=t(5),b=l.a.mark(j),h=[{start:1,end:898},{start:10001,end:10220}];function j(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!0,n=1;case 2:if(!e){t.next=10;break}return n=n<=h[0].end||n>=h[1].start?n:n-h[0].end-1+h[1].start,t.next=6,n;case 6:n++,e=n<=h[1].end,t.next=2;break;case 10:case"end":return t.stop()}}),b)}var f=j();var g=function(e,n){for(var t=[],r=0;r<e*n;r++){var a=f.next();if(a.done)return Promise.all(t);t.push(fetch("https://pokeapi.co/api/v2/pokemon/".concat(a.value)))}return Promise.all(t)};var x,O,v,w,k,y,_,G,N,S,F,z,B,C,E=function(e){return{id:e.id,name:e.name,abilities:e.abilities.map((function(e){return e.ability.name})),types:e.types.map((function(e){return e.type.name})),height:e.height,weight:e.weight,base_experience:e.base_experience,stats:e.stats.map((function(e){return{name:e.stat.name,base_stat:e.base_stat,effort:e.effort}}))}},D={pokemons:[],nextPage:function(){},isLoading:!0,error:null},L=Object(r.createContext)(D),P=t(0),A=function(e){var n=e.children,t=Object(r.useState)(!0),a=Object(d.a)(t,2),i=a[0],c=a[1],s=Object(r.useState)(1),p=Object(d.a)(s,2),b=p[0],h=p[1],j=Object(r.useState)([]),f=Object(d.a)(j,2),x=f[0],O=f[1],v=Object(r.useState)(),w=Object(d.a)(v,2),k=w[0],y=w[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,r,a,i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(b,15);case 2:n=e.sent,t=[],r=Object(m.a)(n),e.prev=5,r.s();case 7:if((a=r.n()).done){e.next=15;break}return i=a.value,e.next=11,i.json();case 11:c=e.sent,t.push(E(c));case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),r.e(e.t0);case 20:return e.prev=20,r.f(),e.finish(20);case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e,null,[[5,17,20,23]])})));return function(){return e.apply(this,arguments)}})()().then((function(e){O((function(n){return[].concat(Object(o.a)(n),Object(o.a)(e))})),c(!1)})).catch((function(e){y(e.message||"Something went wrong")}))}),[b]);return Object(P.jsx)(L.Provider,{value:{pokemons:x,isLoading:i,error:k,nextPage:function(){return h((function(e){return e+1}))}},children:n})},I=t(3),H=t(4),U=Object(H.a)(x||(x=Object(I.a)(['\n  :root{\n    font-size: 62.5%;\n    --veryDarkGrayishBlue: #171A21;\n    --darkGrayishBlue: #292E3B;\n    --veryLightBlue: #E0E6EB;\n    --typeGroup1: #FDDFDF;\n    --typeGroup2: #DEFDE0;\n    --typeGroup3: #FCF7DE;\n    --typeGroup4: #DEF3FD;\n    --typeGroup5: #f4e7da;\n    --typeGroup6: #d5d5d4;\n    --typeGroup7: #fceaff;\n    --typeGroup8: #98d7a5;\n    --typeGroup9: #f8d5a3;\n    --typeGroup10: #97b3e6;\n    --typeGroup11: #eaeda1;\n    --typeGroup12: #F5F5F5;\n    --typeGroup13: #E6E0D4;\n    --typeGroup14: #F5F5F5;\n    --statHp: #72F47A;\n    --statAtk: #DEBCBC;\n    --statDef: #F8D5A3;\n    --statSpAtk: #EC9F9F;\n    --statSpDef: #E9DA8F;\n    --statSpd: #96C2DB;\n  }\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  }\n\n  *, input, button {\n    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  }\n  \n  body {\n    min-height: 100vh;\n    background-color: var(--veryDarkGrayishBlue);\n  }\n\n  .wrapper {\n    margin-top: 5rem !important;\n    color: var(--veryLightBlue);\n  }\n\n  h1.info {\n    color: var(--veryLightBlue);\n    margin-top: 5rem;\n    font-weight: lighter;\n    font-size: 3rem;\n    text-align: center;\n  }\n\n  h2 {\n    text-align: center;\n    font-weight: normal;\n    font-size: 2.5rem;\n  }\n\n  h3 {\n    margin-bottom: 1rem;\n    font-weight: normal;\n    font-size: 2rem;\n  }\n\n  .spinner {\n    width: 3rem;\n    height: 3rem;\n    margin: 5rem auto 3rem;\n    border-radius: 50%;\n    border: 3px solid var(--veryLightBlue);\n    border-bottom-color: transparent;\n    animation: spinner linear 800ms infinite;\n  }\n\n  @keyframes spinner {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n\n  @media (min-width: 576px) {\n    .wrapper {\n      margin-top: 7rem !important;\n    }\n    h2 {\n      font-size: 3.5rem;\n    }\n    h3 {\n      font-size: 2.5rem;\n    }\n  }\n']))),R=t.p+"static/media/pokedexIcon.16075dc5.svg",q=t.p+"static/media/searchIcon.244cbf07.svg",J=H.b.div(O||(O=Object(I.a)(["\n  width: 90%;\n  max-width: 135rem;\n  margin: 0 auto;\n\n  @media (min-width: 1350px) {\n    width: 100%;\n  }\n"]))),M=H.b.header(v||(v=Object(I.a)(["\n  background-color: var(--darkGrayishBlue);\n  padding: 1.5rem;\n  > div {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .logo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    color: white;\n    font-size: 2.5rem;\n    font-weight: 400;\n    img {\n      height: 6rem;\n    }\n  }\n\n  form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    border-bottom: 1px solid white;\n    margin-top: 2rem;\n    padding: 0 0.5rem;\n    input {\n      background-color: transparent;\n      padding: 0.5rem 0;\n      outline: none;\n      border: none;\n      width: 100%;\n      &,\n      &::placeholder {\n        font-size: 1.7rem;\n        color: white;\n      }\n    }\n    button {\n      background-color: transparent;\n      border: none;\n      cursor: pointer;\n      img {\n        width: 2.3rem;\n        margin-bottom: 0.7rem;\n      }\n    }\n  }\n\n  @media (min-width: 500px) {\n    > div {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: space-between;\n    }\n\n    .input-group {\n      width: 20rem;\n    }\n  }\n\n  @media (min-width: 600px) {\n    .input-group {\n      width: 35rem;\n    }\n  }\n"]))),T=H.b.span(w||(w=Object(I.a)(["\n  width: 7rem;\n  padding: 0.5rem 0;\n  border-radius: 1rem;\n  font-size: 1.5rem;\n  text-align: center;\n  color: var(--veryDarkGrayishBlue);\n  &.fire {\n    background-color: var(--typeGroup1);\n  }\n  &.grass {\n    background-color: var(--typeGroup2);\n  }\n  &.electric {\n    background-color: var(--typeGroup3);\n  }\n  &.water {\n    background-color: var(--typeGroup4);\n  }\n  &.ground,\n  &.rock,\n  &.dark,\n  &.shadow {\n    background-color: var(--typeGroup5);\n  }\n  &.rock {\n    background-color: var(--typeGroup6);\n  }\n  &.fairy {\n    background-color: var(--typeGroup7);\n  }\n  &.poison {\n    background-color: var(--typeGroup8);\n  }\n  &.bug {\n    background-color: var(--typeGroup9);\n  }\n  &.dragon {\n    background-color: var(--typeGroup10);\n  }\n  &.psychic,\n  &.ghost,\n  &.steel {\n    background-color: var(--typeGroup11);\n  }\n  &.flying {\n    background-color: var(--typeGroup12);\n  }\n  &.fighting {\n    background-color: var(--typeGroup13);\n  }\n  &.normal,\n  &.ice,\n  &.unknown {\n    background-color: var(--typeGroup14);\n  }\n"]))),W=H.b.article(k||(k=Object(I.a)(["\n  background-color: var(--darkGrayishBlue);\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 40rem;\n  transition: transform 200ms;\n"]))),X=Object(H.b)(J)(y||(y=Object(I.a)(["\n  margin: 2.5rem auto;\n  display: grid;\n  justify-content: center;\n  gap: 3rem;\n\n  a {\n    text-decoration: none;\n  }\n\n  @media (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: 992px) {\n    margin: 3rem auto;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (min-width: 1200px) {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 4rem;\n  }\n"]))),K=Object(H.b)(W)(_||(_=Object(I.a)(["\n  img {\n    width: 80%;\n  }\n  > span {\n    color: var(--veryLightBlue);\n    font-size: 2.5rem;\n  }\n  .badges {\n    margin: 1.5rem 0 2.5rem;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),Q=function(){var e=Object(r.useContext)(L),n=e.pokemons,t=e.nextPage,a=e.isLoading,i=e.error,s=Object(r.useRef)(t),o=n.length;return Object(r.useEffect)((function(){if(o>0&&o<1118){var e=new IntersectionObserver((function(e){e.some((function(e){return e.isIntersecting}))&&s.current()}));return e.observe(document.querySelector("#sentinel")),function(){return e.disconnect()}}}),[o]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(X,{children:n.map((function(e){return Object(P.jsx)(c.b,{to:"/".concat(e.id),children:Object(P.jsxs)(K,{children:[Object(P.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e.id,".png"),alt:e.name}),Object(P.jsx)("span",{children:e.name.replace(/-/g," ").replace(/(^\w|\s\w)/g,(function(e){return e.toUpperCase()}))}),Object(P.jsx)("div",{className:"badges",children:e.types.map((function(e){return Object(P.jsx)(T,{className:e,children:e[0].toUpperCase()+e.substr(1,e.length-1)},e)}))})]})},e.id)}))}),(o||a)&&o<1118&&Object(P.jsx)("div",{id:"sentinel",className:"spinner"}),i&&!a&&Object(P.jsx)("h1",{className:"info",children:(null===i||void 0===i?void 0:i.message)||"Something went wrong!"})]})},V=function(){var e=Object(r.useRef)(),n=Object(s.e)();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(M,{children:Object(P.jsxs)(J,{children:[Object(P.jsxs)("h1",{className:"logo",children:[Object(P.jsx)("img",{src:R,alt:"Pokedex Icon"}),"Pok\xe9dex"]}),Object(P.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n.push("/"+e.current.value)},children:[Object(P.jsx)("input",{type:"text",placeholder:"Search","aria-label":"Search for a pokemon",ref:e}),Object(P.jsx)("button",{type:"submit",children:Object(P.jsx)("img",{src:q,alt:"Search Icon"})})]})]})}),Object(P.jsx)(Q,{})]})},Y=t(10),Z=t.p+"static/media/arrowIcon.cdfb99c1.svg",$=H.b.article(G||(G=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  justify-content: center;\n  span {\n    color: var(--veryLightBlue);\n    font-size: 1.3rem;\n  }\n  @media (min-width: 600px) {\n    span {\n      font-size: 1.5rem;\n    }\n  }\n  @media (min-width: 840px) {\n    grid-area: pokeinfo;\n    gap: 1rem 3rem;\n    span {\n      font-size: 1.7rem;\n    }\n  }\n"]))),ee=function(e){return Object(P.jsxs)($,{children:[Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Color: "}),e.color[0].toUpperCase()+e.color.substr(1,e.color.length)]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Height: "}),e.height]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Weight: "}),e.weight]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Capture Rate: "}),e.capture_rate]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Base Experience: "}),e.base_experience]}),Object(P.jsxs)("span",{children:[Object(P.jsx)("strong",{children:"Base Happiness: "}),e.base_happiness]})]})},ne=H.b.section(N||(N=Object(I.a)(["\n  width: 90%;\n  div + div {\n    margin-top: 0.5rem;\n  }\n  div span {\n    display: block;\n    color: var(--veryLightBlue);\n    font-size: 1.1rem;\n    margin-bottom: 0.3rem;\n  }\n\n  @media (min-width: 600px) {\n    div span {\n      margin-bottom: 0.4rem;\n      font-size: 1.3rem;\n    }\n  }\n\n  @media (min-width: 840px) {\n    align-self: center;\n    grid-area: pokestats;\n    div + div {\n      margin-top: 1.5rem;\n    }\n    div span {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]))),te=H.b.div(S||(S=Object(I.a)(["\n  width: 100%;\n  height: 1.8rem;\n  background-color: var(--darkGrayishBlue);\n  border-radius: 2rem;\n  &#hp {\n    .inner {\n      background-color: var(--statHp);\n    }\n  }\n  &#atk {\n    .inner {\n      background-color: var(--statAtk);\n    }\n  }\n  &#def {\n    .inner {\n      background-color: var(--statDef);\n    }\n  }\n  &#special_atk {\n    .inner {\n      background-color: var(--statSpAtk);\n    }\n  }\n  &#special_def {\n    .inner {\n      background-color: var(--statSpDef);\n    }\n  }\n  &#speed {\n    .inner {\n      background-color: var(--statSpd);\n    }\n  }\n  .inner {\n    height: 100%;\n    border-radius: 2rem\n      "," 2rem;\n    max-width: ",";\n    animation: 1.5s ease-in-out slide;\n  }\n\n  @keyframes slide {\n    from {\n      width: 0;\n    }\n    to {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 840px) {\n    height: 2.5rem;\n  }\n"])),(function(e){return"100%"===e.width?"2rem 2rem":"0 0"}),(function(e){return e.width})),re=function(e){var n=e.stats;return n=n.map((function(e){return e.name=e.name.replace("attack","atk").replace("defense","def").replace("special-atk","special_atk").replace("special-def","special_def"),Object(Y.a)({},e)})),Object(P.jsx)(ne,{children:n.map((function(e){return Object(P.jsxs)("div",{children:[Object(P.jsxs)("span",{children:[e.name.replace(/(hp|atk|def|s)/g,(function(e){return e.toUpperCase()})).replace("_"," "),": ",e.base_stat," / Effort: ",e.effort]}),Object(P.jsx)(te,{id:e.name,className:"stat-bar",width:"".concat(e.base_stat>100?100:e.base_stat,"%"),children:Object(P.jsx)("div",{className:"inner"})})]},e.name)}))})},ae=Object(H.b)(J)(F||(F=Object(I.a)(["\n  article {\n    max-width: 80rem;\n    margin: 3rem auto;\n    p {\n      text-align: center;\n      font-size: 1.5rem;\n    }\n  }\n\n  @media (min-width: 576px) {\n    article {\n      p {\n        font-size: 2rem;\n      }\n    }\n  }\n"]))),ie=function(e){var n=e.abilities,t=Object(r.useState)(!0),a=Object(d.a)(t,2),i=a[0],c=a[1],s=Object(r.useState)([]),o=Object(d.a)(s,2),p=o[0],b=o[1],h=Object(r.useState)(),j=Object(d.a)(h,2),f=j[0],g=j[1];return Object(r.useEffect)((function(){c(!0),function(){var e=Object(u.a)(l.a.mark((function e(){var t,r,a,i,c,s,o,p,u,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Promise.all(n.map((function(e){return fetch("https://pokeapi.co/api/v2/ability/".concat(e,"/"))})));case 3:r=e.sent,a=Object(m.a)(r),e.prev=5,a.s();case 7:if((i=a.n()).done){e.next=18;break}return c=i.value,e.next=11,c.json();case 11:s=e.sent,o=s.effect_entries,p=s.name,u=o.find((function(e){return"en"===e.language.name})),d=u.effect,t.push({name:p,info:d});case 16:e.next=7;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),a.e(e.t0);case 23:return e.prev=23,a.f(),e.finish(23);case 26:return e.abrupt("return",t);case 27:case"end":return e.stop()}}),e,null,[[5,20,23,26]])})));return function(){return e.apply(this,arguments)}}()().then((function(e){b(e),c(!1),g(null)})).then((function(e){g(e),c(!1)}))}),[n]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ae,{as:"section",className:"wrapper",children:[Object(P.jsx)("h2",{children:"Abilities"}),p.map((function(e){return Object(P.jsxs)("article",{children:[Object(P.jsx)("h3",{children:e.name[0].toUpperCase()+e.name.substr(1,e.name.length)}),Object(P.jsx)("p",{children:e.info})]},e.name)}))]}),f&&Object(P.jsx)("h1",{className:"info",children:(null===f||void 0===f?void 0:f.message)||"Something went wrong"}),i&&Object(P.jsx)("div",{className:"spinner"})]})},ce=Object(H.b)(J)(z||(z=Object(I.a)(["\n  a {\n    text-decoration: none;\n    color: var(--lightGrayishBlue);\n  }\n  .cards {\n    margin: 3rem 0;\n    display: flex;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    gap: 2.5rem;\n    article {\n      max-width: 30rem;\n      img {\n        width: 80%;\n      }\n      p {\n        font-size: 1.5rem;\n        margin-bottom: 3rem;\n      }\n      &:hover {\n        transform: scale(1.03);\n      }\n    }\n  }\n\n  @media (min-width: 576px) {\n    .cards {\n      gap: 3rem;\n      width: 80%;\n      margin: 5rem auto;\n      article p {\n        font-size: 1.8rem;\n      }\n    }\n  }\n"]))),se=function e(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=Object(m.a)(n);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.evolves_to.length>0)return r.concat(e(i.evolves_to,r.concat({name:i.species.name,initial:!1,id:i.species.url.split("/")[i.species.url.split("/").length-2],min_level:i.evolution_details[0].min_level,min_happiness:i.evolution_details[0].min_happiness})));r.push({name:i.species.name,id:i.species.url.split("/")[i.species.url.split("/").length-2],initial:!1,min_level:i.evolution_details[0].min_level,min_happiness:i.evolution_details[0].min_happiness})}}catch(c){a.e(c)}finally{a.f()}return r},oe=function(e){var n=e.url,t=Object(r.useState)(!0),a=Object(d.a)(t,2),i=a[0],s=a[1],p=Object(r.useState)(),m=Object(d.a)(p,2),b=m[0],h=m[1],j=Object(r.useState)([]),f=Object(d.a)(j,2),g=f[0],x=f[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,r,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,a=r.chain,i={name:a.species.name,initial:!0,id:a.species.url.split("/")[a.species.url.split("/").length-2]},e.abrupt("return",[i].concat(Object(o.a)(se(a.evolves_to))));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){x(e),s(!1),h(null)})).then((function(e){h(e),s(!1)}))}),[n]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ce,{as:"section",className:"wrapper",children:[Object(P.jsx)("h2",{children:"Evolution"}),Object(P.jsx)("div",{className:"cards",children:g.map((function(e){return Object(P.jsx)(c.b,{to:"/".concat(e.id),onClick:function(){window.scrollTo(0,0)},children:Object(P.jsxs)(W,{children:[Object(P.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e.id,".png"),alt:e.name}),Object(P.jsx)("h3",{children:e.name[0].toUpperCase()+e.name.substr(1,e.name.length)}),e.initial&&Object(P.jsx)("p",{children:"Initial"}),e.min_level&&Object(P.jsxs)("p",{children:["Min Level: ",e.min_level]}),e.min_happiness&&Object(P.jsxs)("p",{children:["Min Happiness: ",e.min_happiness]}),!e.min_happiness&&!e.min_level&&!e.initial&&Object(P.jsx)("p",{children:"Other requirements"})]})},e.name)}))})]}),b&&Object(P.jsx)("h1",{className:"info",children:(null===b||void 0===b?void 0:b.message)||"Something went wrong"}),i&&Object(P.jsx)("div",{className:"spinner"})]})},pe=t(22),le=Object(H.b)(J)(B||(B=Object(I.a)(["\n  h2 {\n    margin-bottom: 3rem;\n  }\n  article {\n    max-width: 80rem;\n    margin: 0 auto;\n    > div {\n      padding: 1rem;\n    }\n    p {\n      font-size: 1.5rem;\n    }\n    .badges {\n      margin: 0.5rem 0 1.5rem;\n      display: flex;\n      flex-wrap: wrap;\n      gap: 1rem;\n    }\n  }\n\n  @media (min-width: 576px) {\n    article {\n      p {\n        font-size: 2rem;\n      }\n      .badges {\n        margin: 0.8rem 0 1.8rem;\n      }\n    }\n  }\n"]))),me=function(e){var n=e.types,t=Object(r.useState)(!0),a=Object(d.a)(t,2),i=a[0],c=a[1],s=Object(r.useState)([]),o=Object(d.a)(s,2),p=o[0],b=o[1],h=Object(r.useState)(),j=Object(d.a)(h,2),f=j[0],g=j[1];return Object(r.useEffect)((function(){c(!0),function(){var e=Object(u.a)(l.a.mark((function e(){var t,r,a,i,c,s,o,p,u,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Promise.all(n.map((function(e){return fetch("https://pokeapi.co/api/v2/type/".concat(e,"/"))})));case 3:r=e.sent,a=Object(m.a)(r),e.prev=5,a.s();case 7:if((i=a.n()).done){e.next=19;break}return c=i.value,e.next=11,c.json();case 11:s=e.sent,o=s.damage_relations,p=s.name,u=Object.entries(o).map((function(e){var n=Object(d.a)(e,2),t=n[0],r=n[1];return Object(pe.a)({},t,r.map((function(e){return e.name})))})).reduce((function(e,n){return Object(Y.a)(Object(Y.a)({},e),n)})),b=Object(Y.a)(Object(Y.a)({},u),{},{name:p}),t.push(b);case 17:e.next=7;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(5),a.e(e.t0);case 24:return e.prev=24,a.f(),e.finish(24);case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e,null,[[5,21,24,27]])})));return function(){return e.apply(this,arguments)}}()().then((function(e){b(e),c(!1),g(null)})).then((function(e){g(e),c(!1)}))}),[n]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(le,{as:"section",className:"wrapper",children:[Object(P.jsx)("h2",{children:"Types"}),p.map((function(e){return Object(P.jsxs)("article",{children:[Object(P.jsxs)("h3",{children:[e.name[0].toUpperCase()+e.name.substr(1,e.name.length),":"," "]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{children:"Double damage from: "}),Object(P.jsx)("div",{className:"badges",children:e.double_damage_from.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))}),Object(P.jsx)("p",{children:"Double damage to: "}),Object(P.jsx)("div",{className:"badges",children:e.double_damage_to.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))}),Object(P.jsx)("p",{children:"Half damage from: "}),Object(P.jsx)("div",{className:"badges",children:e.half_damage_from.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))}),Object(P.jsx)("p",{children:"Half damage to: "}),Object(P.jsx)("div",{className:"badges",children:e.half_damage_to.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))}),Object(P.jsx)("p",{children:"No damage from: "}),Object(P.jsx)("div",{className:"badges",children:e.no_damage_from.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))}),Object(P.jsx)("p",{children:"No damage to: "}),Object(P.jsx)("div",{className:"badges",children:e.no_damage_to.map((function(e){return Object(P.jsx)(T,{className:e.toLowerCase(),children:e},e)}))})]})]},e.name)}))]}),f&&Object(P.jsx)("h1",{className:"info",children:(null===f||void 0===f?void 0:f.message)||"Something went wrong"}),i&&Object(P.jsx)("div",{className:"spinner"})]})},ue=Object(H.b)(J)(C||(C=Object(I.a)(["\n  padding: 2rem 0 0;\n  a img {\n    width: 5rem;\n    transition: transform 0.2s ease-in;\n    &:hover {\n      transform: translateX(-1rem);\n    }\n  }\n\n  > section {\n    display: grid;\n    margin-top: 3rem;\n    gap: 2.5rem;\n    padding-bottom: 3rem;\n    border-bottom: 1px solid var(--veryLightBlue);\n    justify-items: center;\n    h1 {\n      color: var(--veryLightBlue);\n      font-weight: 400;\n      text-align: center;\n      font-size: 3rem;\n    }\n    img {\n      width: 100%;\n      max-width: 50rem;\n    }\n  }\n\n  @media (min-width: 840px) {\n    > section {\n      padding-bottom: 5rem;\n      gap: 0rem 2rem;\n      grid-template: 50px 50px auto auto / 1fr 1fr;\n      grid-template-areas: 'pokeimg vazio' 'pokeimg pokename' 'pokeimg pokestats' 'pokeinfo pokestats';\n      h1 {\n        grid-area: pokename;\n        font-size: 3.5rem;\n      }\n      img {\n        grid-area: pokeimg;\n      }\n    }\n  }\n"]))),de=function(){var e=Object(r.useContext)(L).pokemons,n=Object(s.f)().poke_id,t=Object(r.useState)(!0),a=Object(d.a)(t,2),i=a[0],o=a[1],p=Object(r.useState)(),m=Object(d.a)(p,2),b=m[0],h=m[1],j=Object(r.useState)(),f=Object(d.a)(j,2),g=f[0],x=f[1];return Object(r.useEffect)((function(){o(!0);var t=e.find((function(e){return e.id.toString()===n||e.name===n})),r=function(){var e=Object(u.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",{color:r.color.name,base_happiness:r.base_happiness,capture_rate:r.capture_rate,evolution_chain:r.evolution_chain.url});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t?r().then((function(e){x(Object(Y.a)(Object(Y.a)({},t),e)),o(!1),h(null)})).catch((function(e){h(e),o(!1)})):fetch("https://pokeapi.co/api/v2/pokemon/".concat(n.toLowerCase().replace(/\s/g,"-"))).then((function(e){if(!e.ok)throw new Error(404===e.status?"Pokemon not found, did you type the full pokemon name?":"");return Promise.all([e.json(),r()])})).then((function(e){var n=Object(d.a)(e,2),t=n[0],r=n[1];x(Object(Y.a)(Object(Y.a)({},E(t)),r)),o(!1),h(null)})).catch((function(e){h(e),o(!1)}))}),[e,n]),Object(P.jsxs)(P.Fragment,{children:[!i&&!b&&g&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ue,{as:"main",children:[Object(P.jsx)(c.b,{to:"/",children:Object(P.jsx)("img",{src:Z,alt:"arrowIcon"})}),Object(P.jsxs)("section",{children:[Object(P.jsxs)("h1",{children:["#",g.id," ",g.name[0].toUpperCase()+g.name.substr(1,g.name.length)]}),Object(P.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(g.id,".png"),alt:"Bulbasaur art"}),Object(P.jsx)(ee,{color:g.color,base_experience:g.base_experience,base_happiness:g.base_happiness,capture_rate:g.capture_rate,height:g.height,weight:g.weight}),Object(P.jsx)(re,{stats:g.stats})]})]}),Object(P.jsx)(ie,{abilities:g.abilities}),Object(P.jsx)(me,{types:g.types}),Object(P.jsx)(oe,{url:g.evolution_chain})]}),b&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(c.b,{to:"/",children:Object(P.jsx)("img",{src:Z,alt:"arrowIcon",style:{width:"5rem",margin:"3rem"}})}),Object(P.jsx)("h1",{className:"info",children:(null===b||void 0===b?void 0:b.message)||"Something went wrong"})]}),i&&Object(P.jsx)("div",{className:"spinner"})]})};var be=function(){return Object(P.jsxs)(A,{children:[Object(P.jsx)(s.a,{path:"/",exact:!0,component:V}),Object(P.jsx)(s.a,{path:"/:poke_id",component:de}),Object(P.jsx)(U,{})]})};i.a.render(Object(P.jsx)(c.a,{children:Object(P.jsx)(be,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fd912d66.chunk.js.map