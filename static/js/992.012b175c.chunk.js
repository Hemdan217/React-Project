"use strict";(self.webpackChunkday=self.webpackChunkday||[]).push([[992],{5992:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var s=a(2644),r=a(3336),n=a(9834),i=a(8641),c=a(7634),o=a(369),d=a(8252),l=a(6245),m=a.n(l),u=a(2006),f=a(992),x=a(1208),v=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"loader mx-auto "})})},h=a(2503),p=a(2368),j=m().mixin({toast:!0,animation:!1,position:"top-right",showConfirmButton:!1,timer:1e3,timerProgressBar:!0});function b(){var e=(0,r.useState)({}),t=(0,s.Z)(e,2),a=t[0],l=t[1],m=(0,f.UO)().id,b=(0,r.useState)(!1),g=(0,s.Z)(b,2),N=g[0],y=g[1],Z=(0,p.v9)((function(e){return e.favorite})),k=(0,r.useContext)(u.g).lang,w=(0,p.I0)(),C=(0,f.s0)(),F=function(){h.p.get("/movie/".concat(m),{params:{language:k}}).then((function(e){console.log(e),Object.assign(a,e.data),a.favorite=Z.some((function(e){return e.id==a.id})),l(a),setTimeout((function(){y(!0)}),200)})).catch((function(e){console.log(e)}))};return(0,r.useEffect)(F,[]),(0,r.useEffect)(F,[k]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(i.Z,{fluid:!0,"bg-secondary":"true",children:(0,x.jsxs)(i.Z,{className:"p-4",children:[!N&&(0,x.jsx)(v,{}),N&&(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(c.Z,{className:"justify-content-center",children:(0,x.jsx)(o.Z,{md:"12",xs:"12",sm:"12",className:"mt-4 ",children:(0,x.jsxs)("div",{className:"card-detalis  d-flex align-items-center ",children:[(0,x.jsx)("img",{className:"img-movie w-30",src:"https://image.tmdb.org/t/p/w500/"+a.poster_path,alt:"ascad"}),(0,x.jsxs)("div",{className:"justify-content-center text-center  mx-auto",children:[(0,x.jsxs)("p",{className:"card-text-details border-bottom",children:["name : ",a.title]}),(0,x.jsxs)("p",{className:"card-text-details border-bottom",children:["release date :",a.release_date]}),(0,x.jsxs)("p",{className:"card-text-details border-bottom",children:["vore count : ",a.vote_count]}),(0,x.jsxs)("p",{className:"card-text-details border-bottom",children:["average vote :",a.vote_average]}),(0,x.jsx)("button",{className:a.favorite?"btn btn-danger":"btn btn-primary",onClick:function(){a.favorite?w({type:"remove",payload:a}):w({type:"adding",payload:a}),j.fire({title:a.favorite?"Remove From Favorite":"Add To Favorite",icon:a.favorite?"error":"success"}),a.favorite=!a.favorite,l(a)},children:a.favorite?(0,x.jsx)(d.Xm5,{}):(0,x.jsx)(d.$0H,{})})]})]})})}),(0,x.jsx)(c.Z,{className:"justify-content-center",children:(0,x.jsx)(o.Z,{md:"12",xs:"12",sm:"12",className:"mt-1 ",children:(0,x.jsxs)("div",{className:"card-story  d-flex flex-column align-items-start",children:[(0,x.jsx)("div",{className:"text-end p-4 ",children:(0,x.jsx)("p",{className:"card-text-title border-bottom",children:"overview:"})}),(0,x.jsx)("div",{className:"text-end px-2",children:(0,x.jsx)("p",{className:"card-text-story",children:a.overview})})]})})}),(0,x.jsx)(c.Z,{className:"justify-content-center",children:(0,x.jsxs)(o.Z,{md:"10",xs:"12",sm:"12",className:"mt-2 d-flex justify-content-around ",children:[(0,x.jsx)(n.Z,{variant:"primary",onClick:function(){C(-1)},children:"Go Back"}),(0,x.jsx)("a",{href:a.homepage,children:(0,x.jsx)("button",{style:{backgroundColor:"#b45b35",border:"none"},className:"btn btn-primary",children:"Watch Movie"})})]})})]})]})})})}},2503:function(e,t,a){a.d(t,{p:function(){return n}});var s=a(9600),r=a(3514),n=s.Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3e8be4e5dd676087a662e4edba8c8500"}});n.interceptors.request.use((function(e){return r.Z.dispatch({type:"loading"}),e}),(function(e){return Promise.reject(e)})),n.interceptors.response.use((function(e){return r.Z.dispatch({type:"done"}),e}),(function(e){return Promise.reject(e)}))},9834:function(e,t,a){var s=a(696),r=a(2644),n=a(3422),i=a(1555),c=a.n(i),o=a(3336),d=a(1157),l=a(5488),m=a(1208),u=["as","bsPrefix","variant","size","active","disabled","className"],f=o.forwardRef((function(e,t){var a=e.as,i=e.bsPrefix,o=e.variant,f=void 0===o?"primary":o,x=e.size,v=e.active,h=void 0!==v&&v,p=e.disabled,j=void 0!==p&&p,b=e.className,g=(0,n.Z)(e,u),N=(0,l.vE)(i,"btn"),y=(0,d.FT)((0,s.Z)({tagName:a,disabled:j},g)),Z=(0,r.Z)(y,2),k=Z[0],w=Z[1].tagName;return(0,m.jsx)(w,(0,s.Z)((0,s.Z)((0,s.Z)({},k),g),{},{ref:t,disabled:j,className:c()(b,N,h&&"active",f&&"".concat(N,"-").concat(f),x&&"".concat(N,"-").concat(x),g.href&&j&&"disabled")}))}));f.displayName="Button",t.Z=f}}]);
//# sourceMappingURL=992.012b175c.chunk.js.map