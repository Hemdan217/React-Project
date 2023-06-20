"use strict";(self.webpackChunkday=self.webpackChunkday||[]).push([[688],{2688:function(e,a,i){i.d(a,{Z:function(){return ae}});var s=i(696),r=i(3422),l=i(1555),t=i.n(l),o=i(5546),n=i.n(o),d=i(3336),c=i(1208),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"div":i,o=e.className,n=e.type,d=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,c.jsx)(l,(0,s.Z)((0,s.Z)({},u),{},{ref:a,className:t()(o,"".concat(d,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=d.createContext({}),b=i(5488),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=d.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,o=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,y=void 0!==u&&u,h=e.as,N=void 0===h?"input":h,Z=(0,r.Z)(e,x),I=(0,d.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,c.jsx)(N,(0,s.Z)((0,s.Z)({},Z),{},{ref:a,type:f,id:i||I,className:t()(o,l,m&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var h=y,N=["bsPrefix","className","htmlFor"],Z=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,r.Z)(e,N),f=(0,d.useContext)(p).controlId;return i=(0,b.vE)(i,"form-check-label"),(0,c.jsx)("label",(0,s.Z)((0,s.Z)({},n),{},{ref:a,htmlFor:o||f,className:t()(l,i)}))}));Z.displayName="FormCheckLabel";var I=Z;var j=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],w=d.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,y=void 0!==x&&x,N=e.isValid,Z=void 0!==N&&N,w=e.isInvalid,F=void 0!==w&&w,k=e.feedbackTooltip,P=void 0!==k&&k,C=e.feedback,g=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,G=e.as,H=void 0===G?"input":G,M=(0,r.Z)(e,j);l=(0,b.vE)(l,"form-check"),o=(0,b.vE)(o,"form-switch");var A=(0,d.useContext)(p).controlId,_=(0,d.useMemo)((function(){return{controlId:i||A}}),[A,i]),q=!O&&null!=L&&!1!==L||function(e,a){return d.Children.toArray(e).some((function(e){return d.isValidElement(e)&&e.type===a}))}(O,I),B=(0,c.jsx)(h,(0,s.Z)((0,s.Z)({},M),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:Z,isInvalid:F,disabled:y,as:H}));return(0,c.jsx)(p.Provider,{value:_,children:(0,c.jsx)("div",{style:E,className:t()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&o),children:O||(0,c.jsxs)(c.Fragment,{children:[B,q&&(0,c.jsx)(I,{title:S,children:L}),C&&(0,c.jsx)(u,{type:g,tooltip:P,children:C})]})})})}));w.displayName="FormCheck";var F=Object.assign(w,{Input:h,Label:I}),k=i(4080),P=(i(1825),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=d.forwardRef((function(e,a){var i,l,o=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,Z=e.plaintext,I=e.readOnly,j=e.as,w=void 0===j?"input":j,F=(0,r.Z)(e,P),C=(0,d.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?i=(0,k.Z)({},"".concat(o,"-plaintext"),!0):(l={},(0,k.Z)(l,o,!0),(0,k.Z)(l,"".concat(o,"-").concat(f),f),i=l);return(0,c.jsx)(w,(0,s.Z)((0,s.Z)({},F),{},{type:n,size:v,ref:a,readOnly:I,id:m||C,className:t()(u,i,y&&"is-valid",N&&"is-invalid","color"===n&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var g=Object.assign(C,{Feedback:u}),R=(0,i(6514).Z)("form-floating"),E=["controlId","as"],z=d.forwardRef((function(e,a){var i=e.controlId,l=e.as,t=void 0===l?"div":l,o=(0,r.Z)(e,E),n=(0,d.useMemo)((function(){return{controlId:i}}),[i]);return(0,c.jsx)(p.Provider,{value:n,children:(0,c.jsx)(t,(0,s.Z)((0,s.Z)({},o),{},{ref:a}))})}));z.displayName="FormGroup";var S=z,T=i(369),V=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"label":i,o=e.bsPrefix,n=e.column,f=void 0!==n&&n,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,x=e.htmlFor,y=(0,r.Z)(e,V),h=(0,d.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var N="col-form-label";"string"===typeof f&&(N="".concat(N," ").concat(N,"-").concat(f));var Z=t()(u,o,m&&"visually-hidden",f&&N);return x=x||h,f?(0,c.jsx)(T.Z,(0,s.Z)({ref:a,as:"label",className:Z,htmlFor:x},y)):(0,c.jsx)(l,(0,s.Z)({ref:a,className:Z,htmlFor:x},y))}));L.displayName="FormLabel";var O=L,G=["bsPrefix","className","id"],H=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,o=e.id,n=(0,r.Z)(e,G),f=(0,d.useContext)(p).controlId;return i=(0,b.vE)(i,"form-range"),(0,c.jsx)("input",(0,s.Z)((0,s.Z)({},n),{},{type:"range",ref:a,className:t()(l,i),id:o||f}))}));H.displayName="FormRange";var M=H,A=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],_=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,y=(0,r.Z)(e,A),h=(0,d.useContext)(p).controlId;return i=(0,b.vE)(i,"form-select"),(0,c.jsx)("select",(0,s.Z)((0,s.Z)({},y),{},{size:o,ref:a,className:t()(n,i,l&&"".concat(i,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||h}))}));_.displayName="FormSelect";var q=_,B=["bsPrefix","className","as","muted"],D=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,f=(0,r.Z)(e,B);return i=(0,b.vE)(i,"form-text"),(0,c.jsx)(n,(0,s.Z)((0,s.Z)({},f),{},{ref:a,className:t()(l,i,d&&"text-muted")}))}));D.displayName="FormText";var J=D,K=d.forwardRef((function(e,a){return(0,c.jsx)(F,(0,s.Z)((0,s.Z)({},e),{},{ref:a,type:"switch"}))}));K.displayName="Switch";var Q=Object.assign(K,{Input:F.Input,Label:F.Label}),U=["bsPrefix","className","children","controlId","label"],W=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,o=e.children,n=e.controlId,d=e.label,f=(0,r.Z)(e,U);return i=(0,b.vE)(i,"form-floating"),(0,c.jsxs)(S,(0,s.Z)((0,s.Z)({ref:a,className:t()(l,i),controlId:n},f),{},{children:[o,(0,c.jsx)("label",{htmlFor:n,children:d})]}))}));W.displayName="FloatingLabel";var X=W,Y=["className","validated","as"],$={_ref:n().any,validated:n().bool,as:n().elementType},ee=d.forwardRef((function(e,a){var i=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,d=(0,r.Z)(e,Y);return(0,c.jsx)(n,(0,s.Z)((0,s.Z)({},d),{},{ref:a,className:t()(i,l&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:S,Control:g,Floating:R,Check:F,Switch:Q,Label:O,Text:J,Range:M,Select:q,FloatingLabel:X})},1825:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=688.37a89006.chunk.js.map