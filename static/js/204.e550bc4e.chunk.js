"use strict";(self.webpackChunkday=self.webpackChunkday||[]).push([[204],{204:function(e,a,s){s.r(a),s.d(a,{default:function(){return l}});s(3336);var r=s(6828),i=s(8641),t=function(e){var a={};return e.email?/\w{2,}@\w{4,}.(com|net)/g.test(e.email)||(a.email="Please Make Sure To Enter Valid Email like hemdan@gmail.com"):a.email="Required",e.name||(a.name="Required"),e.userName?/\s/i.test(e.userName)&&(a.userName="Please Make Sure To Enter Valid User Name Without Spaces"):a.userName="Required",e.password?/[A-Z]{1,}[a-z]{1,}\W{1,}\d{4,}/i.test(e.password)||(a.password="Please Make Sure To Enter Valid Password Like This He@2131998"):a.password="Required",e.password!=e.confirmpassword&&(a.confirmpassword="Please Make Sure That Password, Confirm Password Is Matched"),a},n=s(1208),m=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{htmlFor:e.item,children:e.item}),(0,n.jsx)("input",{className:"form-control",id:e.item,name:e.item,type:e.type,onChange:e.formik.handleChange,value:e.formik.values[e.item]}),(0,n.jsx)("span",{className:"text-danger",children:e.formik.errors[e.item]})]})})},l=function(){var e=(0,r.TA)({initialValues:{email:"",name:"",userName:"",password:"",confirmpassword:""},validate:t,onSubmit:function(e){alert(JSON.stringify(e,null,2))}}),a=["email","text","text","password","password"];return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{className:"w-50 m-5 mx-auto",children:(0,n.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object.keys(e.initialValues).map((function(s,r){return(0,n.jsx)(m,{type:a[r],item:s,formik:e},r)})),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})})}}}]);
//# sourceMappingURL=204.e550bc4e.chunk.js.map