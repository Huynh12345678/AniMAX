(this["webpackJsonpanime-client"]=this["webpackJsonpanime-client"]||[]).push([[7],{124:function(e,t,s){"use strict";var i=s(133),n=s.n(i),a=s(2);n.a.config({barColors:{0:"#ff0000"}});t.a=function(){return Object(a.jsx)(n.a,{})}},125:function(e,t,s){"use strict";s(1);var i=s(12),n=s.n(i),a=s(2);t.a=function(e){var t=e.iconSize,s=void 0===t?16:t,i=e.icon,c=e.className,l=e.iconClassName,o=e.textClassName,r=e.text;return Object(a.jsxs)("div",{className:n()("flex items-center",c),children:[Object(a.jsx)(i,{size:s,className:l}),Object(a.jsx)("p",{className:n()("line-clamp-1 pl-1 pt-0.5",o),children:r})]})}},129:function(e,t,s){"use strict";var i=s(12),n=s.n(i),a=s(32),c=s(127),l=s(5),o=s(11),r=s(125),d=s(53),u=s(126),j=s(132),x=s(2);t.a=function(e){var t,s=Object(l.f)().pathname,i=Object(d.c)((function(e){return e.sliding})),m=["gi\u1edd","ph\xfat","Gi\u1edd","Ph\xfat"],b=["HD","BD","FHD"];return Object(x.jsxs)(o.b,{to:"/info/".concat(e.slug),onClick:function(e){return t=e,void(i&&t.preventDefault());var t},children:[Object(x.jsxs)("div",{className:n()("relative shadow-lg group",e.className),children:[Object(x.jsx)("img",{onError:function(e){return function(e){e.target.src="/default.png"}(e)},src:e.image,alt:e.title,className:n()("w-full h-48 md:h-60 object-cover rounded-md rounded-b-none",e.classNameImg?e.classNameImg:"lg:h-80")}),e.isUpcoming&&Object(x.jsxs)("div",{className:"absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center",children:[Object(x.jsx)("p",{className:"text-white text-3xl font-bold",children:e.upcomingYear}),Object(x.jsx)("h1",{className:"font-bold z-10 absolute bottom-0 p-2 bg-red-500 w-full text-center bg-opacity-80",children:"S\u1eaeP CHI\u1ebeU"})]}),Object(x.jsx)("div",{className:"absolute inset-0 invisible group-hover:visible bg-black bg-opacity-60 flex items-center justify-center",children:Object(x.jsx)(u.c,{size:70,className:"text-white"})}),Object(x.jsx)("div",{className:"absolute top-2 z-10 left-2 bg-black px-3 py-1 rounded-2xl text-white text-xs bg-opacity-70",children:Object(x.jsx)(r.a,{icon:a.a,text:e.stars.toString(),className:"text-base text-yellow-200"})}),!e.isUpcoming&&Object(x.jsx)("div",{className:n()("absolute top-2 right-2 text-white text-xs text-center",m.some((function(t){var s;return null===(s=e.time)||void 0===s?void 0:s.includes(t)}))||""===e.currentEpisode||b.some((function(t){var s;return null===(s=e.currentEpisode)||void 0===s?void 0:s.includes(t)}))?" bg-three rounded-md w-auto px-2":"bg-red-500 rounded-full w-12 px-1 pt-3 py-1 h-12"),style:{lineHeight:"0.5em"},children:m.some((function(t){var s;return null===(s=e.time)||void 0===s?void 0:s.includes(t)}))||""===e.currentEpisode||b.some((function(t){var s;return null===(s=e.currentEpisode)||void 0===s?void 0:s.includes(t)}))?Object(x.jsx)("span",{className:"text-base text-black font-thin",children:e.quality||e.currentEpisode}):e.isCompleted?Object(x.jsxs)(x.Fragment,{children:["HO\xc0N ",Object(x.jsx)("span",{className:"font-bold text-lg",children:"T\u1ea4T"})]}):Object(x.jsxs)(x.Fragment,{children:["T\u1eacP ",Object(x.jsx)("span",{className:"font-bold text-lg",children:e.currentEpisode})]})})]}),Object(x.jsxs)("div",{className:n()("bg-background-darker p-3 w-full space-y-2 rounded-b-md",s.includes("info")?"max-h-20 min-h-5":"max-h-20 min-h-11"),children:[Object(x.jsx)("p",{className:n()("uppercase text-white font-bold text-sm hover:text-three",s.includes("info")?"line-clamp-2":"line-clamp-1"),title:e.title,children:e.title}),Object(x.jsxs)("div",{className:"space-y-1",children:[Object(x.jsxs)("div",{className:"flex items-center",children:[e.time&&Object(x.jsx)(r.a,{icon:c.b,iconClassName:"text-gray-400 mr-1",text:e.time.includes("Ch\u01b0a")?"...":e.time,textClassName:"text-white text-xs",iconSize:12}),Object(x.jsx)("p",{className:"px-2 ml-2 text-xs font-medium bg-primary text-white rounded-md mt-0.5",children:null!==(t=e.quality)&&void 0!==t&&t.includes("Ch\u01b0a")?"?":e.quality}),e.date&&Object(x.jsx)(r.a,{icon:a.c,iconClassName:"text-gray-400 mr-1 ml-2",text:e.date,textClassName:"text-white text-xs",iconSize:12})]}),Object(x.jsx)("div",{className:"flex items-center",children:e.views&&Object(x.jsx)(r.a,{icon:j.c,iconClassName:"text-gray-400 mr-1",text:"L\u01b0\u1ee3t xem: "+e.views.toLocaleString(),textClassName:"text-white text-xs",iconSize:12})})]}),Object(x.jsx)("p",{className:"text-gray-400 text-xs line-clamp-3",children:e.description})]})]})}},130:function(e,t,s){"use strict";var i=s(8),n=(s(1),s(138)),a=s.n(n),c=s(126),l=s(12),o=s.n(l),r=s(53),d=s(2);function u(e){var t=e.onClick;return Object(d.jsx)("div",{className:o()("bg-black -right-6 transform p-3 cursor-pointer z-10"),style:{borderRadius:"50%",position:"absolute",top:" 46%",transform:"translate(0, -50%)"},onClick:t,children:Object(d.jsx)(c.b,{size:20,className:"text-white hover:text-secondary"})})}function j(e){var t=e.onClick;return Object(d.jsx)("div",{className:o()("bg-black -left-6 transform p-3 cursor-pointer z-10"),style:{borderRadius:"50%",position:"absolute",top:" 46%",transform:"translate(0, -50%)"},onClick:t,children:Object(d.jsx)(c.a,{size:20,className:"text-white hover:text-secondary"})})}t.a=function(e){var t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,nextArrow:Object(d.jsx)(u,{}),prevArrow:Object(d.jsx)(j,{}),autoplay:!0,beforeChange:function(){n({type:"changeSliding",payload:!0})},afterChange:function(){n({type:"changeSliding",payload:!1})}},s=Object(i.a)(Object(i.a)({},t),e.settings),n=Object(r.b)();return Object(d.jsx)(a.a,Object(i.a)(Object(i.a)({},s),{},{children:e.children}))}},134:function(e,t,s){},135:function(e,t,s){"use strict";var i=s(8),n=s(38),a=s(12),c=s.n(a),l=(s(1),s(11)),o=s(2),r=["className","iconSize","iconClassName","startIcon","endIcon"],d=["onClick","to","disabled"],u=function(e){var t=e.className,s=e.iconSize,a=void 0===s?25:s,l=e.iconClassName,d=e.startIcon,u=e.endIcon,j=Object(n.a)(e,r);return Object(o.jsxs)("button",Object(i.a)(Object(i.a)({className:c()("flex items-center px-4 py-2 rounded-md font-medium text-xs md:text-sm lg:text-base hover:bg-opacity-80",t)},j),{},{children:[d&&Object(o.jsx)(d,{size:a,className:c()("mr-2",l)}),e.children,u&&Object(o.jsx)(u,{size:a,className:c()("ml-2",l)})]}))};t.a=function(e){var t=e.onClick,s=e.to,a=e.disabled,c=Object(n.a)(e,d);return s?Object(o.jsx)(l.b,{to:a?"#":s,children:Object(o.jsx)(u,Object(i.a)(Object(i.a)({},c),{},{onClick:t}))}):Object(o.jsx)(u,Object(i.a)(Object(i.a)({},c),{},{onClick:t}))}},136:function(e,t,s){"use strict";var i=s(54),n=s(31);t.a=function(e){return Object(n.useQuery)(["watch-info",e],(function(){return Object(i.f)(e)}))}},137:function(e,t,s){"use strict";var i=s(12),n=s.n(i),a=s(55),c=s(124),l=s(8),o=(s(1),s(5)),r=s(129),d=s(130),u=(s(134),s(2)),j=function(e){var t={slidesToShow:Object(o.f)().pathname.includes("info")?7:6,slidesToScroll:6,infinite:!1,dots:!1,autoplay:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]},s=e.data,i=void 0===s?[]:s,n=e.settings,a=(e.onClick,Object(l.a)(Object(l.a)({},t),n));return Object(u.jsx)(d.a,{settings:a,children:i.map((function(e){return Object(u.jsx)(r.a,Object(l.a)(Object(l.a)({},e),{},{classNameImg:" lg:h-72"}),e.slug)}))})};t.a=function(e){var t=e.title,s=e.data,i=void 0===s?[]:s,l=e.isLoading,o=void 0!==l&&l,r=e.className,d=void 0===r?"text-2xl font-bold":r;e.onClick;return Object(u.jsxs)("div",{className:"mt-6",children:[Object(u.jsx)("h1",{className:n()("text-white font-medium mb-3 -ml-2 pl-2",d),children:t}),o?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.a,{size:20,className:"text-white animate-spin mx-auto my-5"}),Object(u.jsx)(c.a,{})]}):Object(u.jsx)(j,{data:i})]})}},189:function(e,t,s){"use strict";s.r(t);var i=s(18),n=s(1),a=s(5),c=s(54),l=s(31),o=function(e){return Object(l.useQuery)(["infos",e],(function(){return Object(c.a)(e)}))},r=s(56),d=s(135),u=s(126),j=s(11),x=s(53),m=s(136),b=s(12),h=s.n(b),v=s(159),p=s(124),f=s(137),g=s(55),O=s(2),N=function(e){var t=e.pairKey,s=e.pairValue,i=e.onValue,n=void 0===i?function(e,t,s,i,n){return e.path?Object(O.jsx)(j.b,{to:e.path.includes("tag")?"/tag/".concat(e.slug):"/quoc-gia/".concat(e.slug),children:Object(O.jsxs)("p",{className:"text-three",children:[e.name,s.length-1!==t?",":"","\xa0\xa0"]})},t):"Parts"===n?Object(O.jsx)(j.b,{to:"/info/".concat(e.slug),title:e.altName,children:Object(O.jsxs)("p",{className:(e.slug===i?"text-three":"")+" hover:text-three",children:[e.name,Object(O.jsx)("span",{className:"text-white",children:s.length-1!==t?",":""}),"\xa0\xa0"]})},t):Object(O.jsx)(j.b,{to:"/seasons/".concat(e.slug),children:Object(O.jsxs)("p",{className:"text-three",children:[e.name,s.length-1!==t?",":"","\xa0\xa0"]})},t)}:i,a=e.slug;return Object(O.jsxs)("div",{className:"flex text-base",children:[Object(O.jsxs)("p",{className:"text-gray-500 font-bold mr-2",children:[t,": "]}),Array.isArray(s)?Object(O.jsx)("div",{className:"text-white flex flex-wrap",children:s.map((function(e,s,i){return null===n||void 0===n?void 0:n(e,s,i,a,t)}))}):Object(O.jsx)("p",{className:"text-white",children:s})]})};t.default=function(){var e=Object(a.h)().slug,t=Object(x.b)(),s=Object(x.c)((function(e){return e})),c=s.viewMore.find((function(t){return t.slug==e})),l=s.episode.find((function(t){return t.slug==e}));l||(l={name:"",slug:"",index:0});var b=Object(a.g)();e||b("/");var y=function(e){e.target.src="/default.png"},w=Object(n.useState)(!!c&&c.viewMore),C=Object(i.a)(w,2),k=C[0],S=C[1],z=o(e),T=z.data,V=z.isLoading,E=Object(n.useState)(!V),I=Object(i.a)(E,2),K=I[0],P=I[1],A=Object(m.a)(e),L=A.data,q=A.isLoading;return Object(n.useEffect)((function(){var e,t,s;V||function(){var i=new Image,n=new Image;i.src=null===T||void 0===T?void 0:T.image,n.src=null===T||void 0===T?void 0:T.backgroundImage;var a=[i,n];for(e=a.length,t=0,s=0;s<e;s++)a[s].onload=function(){++t==e&&c()},a[s].onerror=function(){c()};var c=function(){P(!0)}}()}),[V]),Object(n.useEffect)((function(){V&&P(!1),window.scroll(0,0)}),[e]),Object(n.useEffect)((function(){T&&(document.title=T.title+" - AniMAX")}),[T]),K?K&&Object(O.jsxs)("div",{className:"w-full flex flex-col",children:[Object(O.jsxs)("div",{className:"relative w-full self-center",children:[Object(O.jsx)("img",{onError:function(e){return y(e)},src:null===T||void 0===T?void 0:T.backgroundImage,alt:null===T||void 0===T?void 0:T.title,className:"object-cover w-full max-h-106 min-h-106"}),Object(O.jsx)("div",{className:"flex absolute inset-0 bg-black bg-opacity-80 max-h-106",children:Object(O.jsxs)("div",{className:"flex w-full px-8 md:py-6 lg:py-14 self-center",children:[Object(O.jsx)("img",{onError:function(e){return y(e)},src:null===T||void 0===T?void 0:T.image,alt:null===T||void 0===T?void 0:T.title,className:"object-cover min-w-36 h-40 md:w-72 md:h-80 lg:w-80 lg:h-96 self-center rounded-md"}),Object(O.jsxs)("div",{className:"w-full self-center space-y-2 ml-8",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{className:" text-three text-sm md:text-2xl lg:text-3xl line-clamp-2 md:line-clamp-none font-bold",children:[null===T||void 0===T?void 0:T.title,Object(O.jsx)("span",{className:"text-white",children:" ("+(null===T||void 0===T?void 0:T.date)+")"})]}),Object(O.jsx)("h1",{className:"text-white text-xs md:text-sm lg:text-lg line-clamp-1 font-bold",children:null===T||void 0===T?void 0:T.altTitle})]}),Object(O.jsx)("ul",{className:"genres text-white flex text-sm flex-wrap",children:null===T||void 0===T?void 0:T.genres.map((function(e){return Object(O.jsx)(j.b,{to:"/".concat(e.path.includes("the-loai")?"genres":"types","/").concat(e.slug),children:Object(O.jsx)("li",{className:"mr-3 border-2 rounded-full px-3 pb-0.5 text-xs md:text-sm mb-2 hover:text-five hover:border-five transition-colors",children:e.name})},e.name)}))}),Object(O.jsx)("p",{className:"text-gray-400 font-bold text-xs md:text-sm lg:text-base md:line-clamp-3 lg:line-clamp-5 mb-2 max-h-64 overflow-y-scroll",children:null===T||void 0===T?void 0:T.description}),Object(O.jsx)(d.a,{className:"".concat(0!==(null===T||void 0===T?void 0:T.episodes.length)?"bg-primary":"bg-gray-500"," text-white mt-4 "),iconClassName:"hidden lg:block text-white",startIcon:u.d,to:"/watch/".concat(e),onClick:function(){return t({type:"EPISODE",payload:{name:null===L||void 0===L?void 0:L.episodes[0].name,slug:e}})},disabled:0===(null===T||void 0===T?void 0:T.episodes.length),children:"Watch Now"})]})]})})]}),Object(O.jsxs)("div",{className:"eps text-white mt-5",children:[Object(O.jsx)("h3",{className:"mb-2 text-lg",children:"T\u1eadp phim "}),q&&Object(O.jsx)(g.a,{size:20,className:"mx-auto my-2 animate-spin"}),Object(O.jsx)("ul",{className:h()("flex flex-wrap justify-start",!k&&"max-h-60 overflow-hidden"),children:0!==(null===L||void 0===L?void 0:L.episodes.length)?null===L||void 0===L?void 0:L.episodes.map((function(s){return Object(O.jsx)(j.b,{className:"mb-2",to:"/watch/".concat(e),children:Object(O.jsx)("li",{onClick:function(){t({type:"EPISODE",payload:{name:s.name,slug:e}})},className:h()("mr-2 rounded-sm px-4 py-2 hover:bg-red-600 transition-colors",l.name===s.name?"bg-red-600":"bg-four"),children:s.name})},s.id)})):"Phim \u0111ang \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt."}),Object(O.jsx)("button",{className:h()("mt-3 flex justify-center w-full",((null===L||void 0===L?void 0:L.episodes.length)<=120||q)&&"hidden"),onClick:function(){return S(!k),void t({type:"changeViewMore",payload:{slug:e,viewMore:!k}})},children:k?Object(O.jsx)(v.b,{size:40,className:"hover:text-secondary"}):Object(O.jsx)(v.a,{size:40,className:"hover:text-secondary"})})]}),Object(O.jsxs)("div",{id:"thongtinphim",className:" text-white mt-5",children:[Object(O.jsx)("h3",{className:"mb-2 text-lg",children:"Th\xf4ng tin phim"}),Object(O.jsxs)("div",{className:"space-y-1",children:[Object(O.jsx)(N,{pairKey:"L\u1ecbch chi\u1ebfu",pairValue:null===T||void 0===T?void 0:T.showtime}),Object(O.jsx)(N,{pairKey:"Tr\u1ea1ng th\xe1i",pairValue:null===T||void 0===T?void 0:T.status}),Object(O.jsx)(N,{pairKey:"\u0110\u1ea1o di\u1ec5n",pairValue:null===T||void 0===T?void 0:T.directors}),Object(O.jsx)(N,{pairKey:"Qu\u1ed1c gia",pairValue:null===T||void 0===T?void 0:T.nations}),Object(O.jsx)(N,{pairKey:"Theo d\xf5i",pairValue:null===T||void 0===T?void 0:T.followers}),Object(O.jsx)(N,{pairKey:"Th\u1eddi l\u01b0\u1ee3ng",pairValue:null===T||void 0===T?void 0:T.time}),Object(O.jsx)(N,{pairKey:"\u0110\u1ed9 tu\u1ed5i",pairValue:null===T||void 0===T?void 0:T.rating}),Object(O.jsx)(N,{pairKey:"Ng\xf4n ng\u1eef",pairValue:null===T||void 0===T?void 0:T.language}),Object(O.jsx)(N,{pairKey:"Studio",pairValue:null===T||void 0===T?void 0:T.studio}),Object(O.jsx)(N,{pairKey:"Season",pairValue:null===T||void 0===T?void 0:T.seasons}),Object(O.jsx)(N,{pairKey:"Ch\u1ea5t l\u01b0\u1ee3ng",pairValue:null===T||void 0===T?void 0:T.quality}),Object(O.jsx)(N,{pairKey:"Views",pairValue:null===T||void 0===T?void 0:T.views}),Object(O.jsx)(N,{pairKey:"Parts",pairValue:null===T||void 0===T?void 0:T.includedParts,slug:e})]})]}),0!=(null===T||void 0===T?void 0:T.relatedAnime.length)&&Object(O.jsx)(f.a,{title:"Phim li\xean quan",isLoading:!1,data:null===T||void 0===T?void 0:T.relatedAnime,className:"text-lg"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{}),Object(O.jsx)(r.a,{})]})}}}]);
//# sourceMappingURL=7.3dd60089.chunk.js.map