(this["webpackJsonpsenseofwalk-v2"]=this["webpackJsonpsenseofwalk-v2"]||[]).push([[23],{103:function(e,a,t){"use strict";var l=t(1),n=t(144),c=t.n(n),r={response:[{name:"formatResponse",success:function(e){return e.data}}],request:[{name:"addHttpRequestHeader",success:function(e){return e.headers["Access-Control-Allow-Origin"]="*",e},fail:function(e){return console.error("request error: ",e),Promise.reject(e)}}]};function s(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.type;r[t].forEach((function(a){var l=a.success,n=a.fail;e.interceptors[t].use(l,n)}))}function i(e){var a=c.a.create();return function(e){s(e,{type:"response"}),s(e,{type:"request"})}(a,e),a}a.a={get:function(e,a){return i(a)(Object(l.a)({url:e,method:"get"},a))},post:function(e,a){return i(a)(Object(l.a)({url:e,method:"post"},a))}}},117:function(e,a,t){},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var l=t(0);function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],l=!0,n=!1,c=void 0;try{for(var r,s=e[Symbol.iterator]();!(l=(r=s.next()).done)&&(t.push(r.value),!a||t.length!==a);l=!0);}catch(i){n=!0,c=i}finally{try{l||null==s.return||s.return()}finally{if(n)throw c}}return t}(e,a)||function(e,a){if(!e)return;if("string"===typeof e)return c(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,l=new Array(a);t<a;t++)l[t]=e[t];return l}function r(e,a){var t=a||{},c=t.defaultValue,r=t.value,s=t.onChange,i=t.postState,m=n(l.useState((function(){return void 0!==r?r:void 0!==c?"function"===typeof c?c():c:"function"===typeof e?e():e})),2),o=m[0],u=m[1],d=void 0!==r?r:o;i&&(d=i(d));var f=l.useRef(!0);return l.useEffect((function(){f.current?f.current=!1:void 0===r&&u(r)}),[r]),[d,function(e){u(e),d!==e&&s&&s(e,d)}]}},165:function(e,a,t){"use strict";var l=t(0),n=t.n(l);t(117);a.a=function(){return n.a.createElement("section",{className:"page-section bg-light",id:"walkspan-api-pricing"},n.a.createElement("div",{className:"container"},n.a.createElement("h4",{className:"section-heading-minor text-orange text-md-center"},"Get Started"),n.a.createElement("section",{className:"pricing"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"card mb-5 mb-lg-0"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-left"},"Economy"),n.a.createElement("div",{className:"price-text"},"Basic resources for starters and small projects."),n.a.createElement("h7",{className:"card-price text-left"},"$5.99",n.a.createElement("span",{className:"period"},"/month")),n.a.createElement("a",{href:"#",className:"btn btn-block btn-primary"},"Subscribe Now!"),n.a.createElement("ul",{className:"fa-ul"},n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Single User"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"5GB Storage"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Unlimited Public Projects"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Community Access"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Community Access"))))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"card mb-5 mb-lg-0"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-left"},"Deluxe"),n.a.createElement("div",{className:"price-text"},"More features and flexibility for multiple projects, access to moderate."),n.a.createElement("h7",{className:"card-price text-center"},"$7.99",n.a.createElement("span",{className:"period"},"/month")),n.a.createElement("a",{href:"#",className:"btn btn-block btn-primary"},"Subscribe Now!"),n.a.createElement("ul",{className:"fa-ul"},n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("strong",null,"5 Users")),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"50GB Storage"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Unlimited Public Projects"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Community Access"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Unlimited Private Projects"))))),n.a.createElement("div",{className:"col-lg-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title text-left"},"Ultimate"),n.a.createElement("div",{className:"price-text"},"More support for sites with heavy traffic. Ideal for Real Estate sites."),n.a.createElement("h7",{className:"card-price text-center"},"$12.99",n.a.createElement("span",{className:"period"},"/month")),n.a.createElement("a",{href:"#",className:"btn btn-block btn-primary"},"Subscribe Now!"),n.a.createElement("ul",{className:"fa-ul"},n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),n.a.createElement("strong",null,"Unlimited Users")),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"150GB Storage"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Unlimited Public Projects"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Community Access"),n.a.createElement("li",null,n.a.createElement("span",{className:"fa-li"},n.a.createElement("i",{className:"fas fa-check"})),"Unlimited Private Projects"))))))))))}},182:function(e,a,t){e.exports=t.p+"static/media/contact-form.91ff5ca5.png"},320:function(e,a){e.exports="data:image/png;base64,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"},321:function(e,a,t){e.exports=t.p+"static/media/divider.9b73c1f9.png"},674:function(e,a,t){"use strict";t.r(a);var l=t(100),n=(t(174),t(158)),c=t(0),r=t.n(c),s=t(118),i=(t(319),t(124)),m=t(165),o=t(320),u=t.n(o),d=t(321),f=t.n(d),E=t(182),p=t.n(E),A=t(35),g=t(36),h=t(41),b=t(38),v=t(37),N=function(e){Object(b.a)(t,e);var a=Object(v.a)(t);function t(e){var l;return Object(A.a)(this,t),(l=a.call(this,e)).getKeys=function(){return Object.keys(this.props.data[0])},l.getHeader=function(){return this.getKeys().map((function(e,a){return r.a.createElement("th",{key:e},e)}))},l.getRowsData=function(){var e=this.props.data,a=this.getKeys();return e.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(y,{key:t,data:e,keys:a}))}))},l.getHeader=l.getHeader.bind(Object(h.a)(l)),l.getRowsData=l.getRowsData.bind(Object(h.a)(l)),l.getKeys=l.getKeys.bind(Object(h.a)(l)),l}return Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,this.getHeader())),r.a.createElement("tbody",null,this.getRowsData())))}}]),t}(r.a.Component),y=function(e){return e.keys.map((function(a,t){return r.a.createElement("td",{key:e.data[a]},e.data[a])}))},w=t(31),k=t(115),S=t.n(k),x=t(116),O=t(103);function j(e){return O.a.get("/proxy/SenseOfWalkAPI_war/data?",{params:e,headers:{"Content-Type":"application/x-www-form-urlencoded"}})}var q=t(3);var B=n.a.Option,C=function(e){return e.data};a.default=function(){var e=Object(w.b)(),a=Object(w.c)(C).DATAResult,t=Object(c.useState)("New York"),o=Object(l.a)(t,2),d=o[0],E=o[1],A=Object(c.useState)("Nature"),g=Object(l.a)(A,2),h=g[0],b=g[1],v=Object(c.useState)("Block"),y=Object(l.a)(v,2),k=y[0],O=y[1],R=Object(c.useState)(),U=Object(l.a)(R,2),P=U[0],D=U[1],I=Object(c.useState)(),J=Object(l.a)(I,2),K=J[0],Q=J[1];Object(c.useEffect)((function(){D(function(e){if(void 0!==e){for(var a=[],t=0;t<10;t++){var l={Score:e.score[t],"Area Name":e.areaname[t],Latitude:e.latitude[t],Longitude:e.longitude[t]};a[t]=l}return a}}(a)),Q("The table below is the sample data for ".concat(h," feature in ").concat(d," with the scope ").concat(k,":"))}),[a]);return r.a.createElement("div",null,r.a.createElement(s.a,null),r.a.createElement("div",null,r.a.createElement("section",{className:"page-section bg-light",id:"walkspan-data-introduction"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"section-heading-minor text-orange text-left"},"Walkspan Data"),r.a.createElement("h3",{className:"section-subheading"},"Using our widget builder, add Walkspan data to your site seamlessly works with property search website, buyers, sellers, investors, and developers to gain immediate access to walkability data. works with property search website, buyers, sellers, investors, and developers gain immediate access to walkability data."))))),r.a.createElement("div",null,r.a.createElement("section",{className:"page-section bg-light",id:"walkspan-data-infographic"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"infographic"},r.a.createElement("img",{alt:"load",src:u.a,style:{width:"3vw",height:"auto"}}),r.a.createElement("div",{className:"number"},"100"),r.a.createElement("img",{alt:"load",src:f.a,style:{width:"auto",height:"8vw"}}),r.a.createElement("h8",null,"streets and sidewalk data records")),r.a.createElement("div",{className:"infographic"},r.a.createElement("img",{alt:"load",src:u.a,style:{width:"3vw",height:"auto"}}),r.a.createElement("div",{className:"number"},"50"),r.a.createElement("img",{alt:"load",src:f.a,style:{width:"auto",height:"8vw"}}),r.a.createElement("h8",null,"major cities across the United States")),r.a.createElement("div",{className:"infographic"},r.a.createElement("img",{alt:"load",src:u.a,style:{width:"3vw",height:"auto"}}),r.a.createElement("div",{className:"number"},"60"),r.a.createElement("img",{alt:"load",src:f.a,style:{width:"auto",height:"8vw"}}),r.a.createElement("h8",null,"dimensions to gauge the walkability"))))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("section",{className:"page-section bg-orange",id:"walkspan-data-catelog",style:{backgroundImage:"url(".concat(p.a,")"),backgroundSize:"cover"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"section-heading-minor text-light"},"Explore our Walkability Data")),r.a.createElement("div",{className:"text-md-center"},r.a.createElement("div",{className:"data-found"},"Data Found: ",r.a.createElement("b",null,"7,123,456"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"parameter-selector",style:{textAlign:"center"}},r.a.createElement("div",{className:"parameter"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{color:"white",textAlign:"left",fontFamily:"avenir",fontSize:"1vw"}},"Select City"),r.a.createElement(n.a,{className:"selector",placeholder:"Select a city",onChange:function(e){E(e)},defaultValue:"New York"},r.a.createElement(B,{value:"New York"},"New York City"),r.a.createElement(B,{value:"Chicago"},"Chicago")))),r.a.createElement("div",{className:"parameter"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{color:"white",textAlign:"left",fontFamily:"avenir",fontSize:"1vw"}},"Select Walkability Feature"),r.a.createElement(n.a,{className:"selector",placeholder:"Select a feature",onChange:function(e){b(e)},defaultValue:"Safety"},r.a.createElement(B,{value:"Nature"},"Nature"),r.a.createElement(B,{value:"Access"},"Access"),r.a.createElement(B,{value:"Amenities"},"Amenities"),r.a.createElement(B,{value:"Architecture"},"Architecture"),r.a.createElement(B,{value:"Comfort"},"Comfort"),r.a.createElement(B,{value:"Interest"},"Interest"),r.a.createElement(B,{value:"Safety"},"Safety")))),r.a.createElement("div",{className:"parameter"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{style:{color:"white",textAlign:"left",fontFamily:"avenir",fontSize:"1vw"}},"Select Scope"),r.a.createElement(n.a,{className:"selector",placeholder:"Select a scope",onChange:function(e){O(e)},defaultValue:"Block"},r.a.createElement(B,{value:"Block"},"Block"),r.a.createElement(B,{value:"Quarter-Mile"},"Quarter Mile"),r.a.createElement(B,{value:"Neighborhood"},"Neighborhood"))))),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn btn-block-light  btn-lg btn-primary",style:{marginTop:"15px",backgroundColor:"white",width:"300px"},onClick:function(a){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(){var a=Object(x.a)(S.a.mark((function a(t){var l,n,c,r,s,i,m,o,u;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j(e);case 2:for(l=a.sent,n=l.slice(34,l.length-1).toString().split("\\").join("").replace("[","").replace("]",""),c=n.split("}"),r=[],s=[],i=[],m=[],o=[],u=0;u<10;u++)r[u]=0===u?JSON.parse(c[u]+"}"):JSON.parse(c[u].slice(1,c[u].length-1)+'"}'),s[u]=r[u].Score,i[u]=r[u]["Area Name"],m[u]=r[u].Latitude,o[u]=r[u].Longitude;t({type:q.g,payload:{city:e.city,category:e.category,areatype:e.areatype,score:s,areaname:i,latitude:m,longitude:o}});case 12:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}({city:d,category:h,areatype:k}))}},r.a.createElement("span",{style:{color:"#db6333"}},"Click to try Sample Record")))))),P&&r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-md-center"},K),r.a.createElement("br",null),r.a.createElement("div",{className:"table-center"},r.a.createElement(N,{data:P}))),r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{id:"output1"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("input",{type:"submit",value:"Access Full Dataset!",className:"btn btn-primary text-white",id:"requestbutton",onClick:function(){window.location.href="/contact"}}))),r.a.createElement("br",null),r.a.createElement(m.a,null),r.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=23.c2511279.chunk.js.map