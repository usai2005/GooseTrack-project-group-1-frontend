"use strict";(self.webpackChunkGooseTrack_project_group_1_frontend=self.webpackChunkGooseTrack_project_group_1_frontend||[]).push([[847],{539:function(n,e,i){i.d(e,{Z:function(){return u}});i(2791);var o,r,t,a=i(168),s=i(5867),l=s.ZP.button(o||(o=(0,a.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #3e85f3;\n  width: 100%;\n  border-radius: 16px;\n  padding: 16px;\n  border-color: none;\n  margin-top: 8px;\n  text-align: center;\n  color: #fff;\n  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);\n\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n    background-color: #2b78ef;\n    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);\n  }\n\n  &:disabled {\n    cursor: pointer;\n    background-color: rgb(163, 168, 173);\n    box-shadow: none;\n    color: rgb(255, 255, 255) !important;\n\n    &:hover,\n    &:focus {\n      cursor: not-allowed;\n    }\n  }\n"]))),d=s.ZP.span(r||(r=(0,a.Z)(["\n  margin-right: 11px;\n"]))),c=s.ZP.svg(t||(t=(0,a.Z)(["\n  width: 20px;\n  height: 20px;\n  stroke: #fff;\n"]))),p=i(3439),x=i(184),u=function(n){var e=n.children,i=n.isValid;return(0,x.jsxs)(l,{type:"submit",disabled:!i,children:[(0,x.jsxs)(d,{children:[" ",e]}),(0,x.jsx)(c,{children:(0,x.jsx)("use",{href:p.Z+"#icon-log-in-01"})})]})}},1796:function(n,e,i){i.d(e,{B3:function(){return w},II:function(){return g},__:function(){return f},d3:function(){return h},fv:function(){return m},lE:function(){return b},wX:function(){return j}});var o,r,t,a,s,l,d,c=i(168),p=i(5705),x=i(5867),u="@media screen and (max-width: 767px)",h=x.zo.div(o||(o=(0,c.Z)(["\n  width: 400px;\n  margin: 40px auto;\n  font-family: InterRegular;\n\n  "," {\n    width: 287px;\n    font-size: 14px;\n    margin: 32px auto;\n  }\n"])),u),f=x.zo.label(r||(r=(0,c.Z)(["\n  font-family: InterSemiBold;\n  font-size: 14px;\n  line-height: normal;\n  width: 100%;\n\n  "," {\n    font-size: 12px;\n  }\n"])),u),m=x.zo.div(t||(t=(0,c.Z)(["\n  position: relative;\n"]))),g=(0,x.zo)(p.gN)(a||(a=(0,c.Z)(["\n  background-color: #fff;\n  color: #111;\n  border: 1px solid #dce3e5;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 8px;\n  width: 100%;\n  margin-top: 8px;\n  margin-bottom: 22px;\n  padding: 18px;\n\n  &::placeholder {\n    color: #dce3e5;\n    font-size: 16px;\n  }\n\n  &:focus,\n  &:active {\n    border: 1px solid #111111;\n    outline: none;\n  }\n\n  "," {\n    padding: 14px;\n  }\n"])),u),b=x.zo.div(s||(s=(0,c.Z)(["\n  color: #e74a3b;\n  display: block;\n  font-size: 12px;\n  margin-top: -10px;\n\n  padding-left: 16px;\n  white-space: pre-line;\n"]))),w=x.zo.div(l||(l=(0,c.Z)(["\n  color: #3cbc81;\n  display: block;\n  font-size: 12px;\n  margin-top: -10px;\n  padding-left: 16px;\n  white-space: pre-line;\n"]))),j=x.zo.svg(d||(d=(0,c.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  bottom: 40px;\n  right: 20px;\n  overflow: visible;\n"])))},881:function(n,e,i){i.d(e,{Z:function(){return s}});i(2791);var o,r=i(168),t=i(5867).ZP.h2(o||(o=(0,r.Z)(["\n  color: #3e85f3;\n  font-size: 24px;\n  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),\n    0px 47px 355px rgba(0, 0, 0, 0.07);\n\n  "," {\n    font-size: 18px;\n  }\n"])),"@media screen and (max-width: 767px)"),a=i(184),s=function(n){var e=n.children;return(0,a.jsx)(t,{children:e})}},8951:function(n,e,i){i.r(e),i.d(e,{default:function(){return R}});i(2791);var o=i(5705),r=i(8007),t=i(3439),a=i(1796),s=i(539),l=i(9434),d=i(9273),c=i(184),p=r.Ry().shape({email:r.Z_().email("This is an ERROR email").required("Please enter your email"),password:r.Z_().required("Please enter your password").min(6,"Password is too short - should be 6 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")});var x,u,h,f,m,g=function(){var n=(0,l.I0)();return(0,c.jsx)(o.J9,{initialValues:{email:"",password:""},validationSchema:p,onSubmit:function(e,i){n((0,d.Ib)(e));var o=setTimeout((function(){i.setSubmitting(!1),clearTimeout(o)}),1e3)},children:function(n){var e=n.errors,i=n.touched,r=n.handleSubmit,l=n.isValid;return(0,c.jsx)(a.d3,{children:(0,c.jsxs)(o.l0,{name:"contact",method:"post",onSubmit:r,children:[(0,c.jsxs)(a.fv,{children:[(0,c.jsxs)(a.__,{htmlFor:"email",style:{color:i.email&&!e.email?"#3cbc81":i.email&&e.email?"#e74a3b":"initial"},children:["Email",(0,c.jsx)(a.II,{type:"email",name:"email",autoCapitalize:"off",autoCorrect:"off",autoComplete:"email",placeholder:"Enter email",style:{borderColor:i.email&&!e.email?"#3cbc81":i.email&&e.email?"#e74a3b":"#dce3e5"}})]}),(0,c.jsx)(o.Bc,{name:"email",children:function(n){return(0,c.jsxs)(a.lE,{children:[n,(0,c.jsx)(a.wX,{children:(0,c.jsx)("use",{href:t.Z+"#icon-baseline-error-outline"})})]})}}),!e.name&&i.name&&(0,c.jsxs)(a.B3,{children:["This is an CORRECT email",(0,c.jsx)(a.wX,{children:(0,c.jsx)("use",{href:t.Z+"#icon-done"})})]})]}),(0,c.jsxs)(a.fv,{children:[(0,c.jsxs)(a.__,{htmlFor:"password",style:{color:i.password&&!e.password?"#3cbc81":i.password&&e.password?"#e74a3b":"initial"},children:["Password",(0,c.jsx)(a.II,{type:"text",name:"password",autoCorrect:"off",autoComplete:"password",placeholder:"Enter password",style:{borderColor:i.password&&!e.password?"#3cbc81":i.password&&e.password?"#e74a3b":"#dce3e5"}})]}),e.password&&i.password&&(0,c.jsxs)(a.lE,{children:[e.password,(0,c.jsx)(a.wX,{children:(0,c.jsx)("use",{href:t.Z+"#icon-baseline-error-outline"})})]})]}),(0,c.jsx)(s.Z,{isValid:l,children:"Log in"})]})})}})},b=i(881),w=i(168),j=i(5867),Z=i(1087),v="@media screen and (max-width: 767px)",y="@media screen and (min-width: 1440px)",z=j.ZP.section(x||(x=(0,w.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: start;\n  background-color: #dcebf7;\n  height: 770px;\n  font-family: InterSemiBold;\n  font-size: 18px;\n  font-style: normal;\n  line-height: calc(18 / 16);\n  color: #111;\n"]))),k=j.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  width: 480px;\n  height: 424px;\n  background-color: #fff;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 174px;\n  margin-bottom: 24px;\n  padding: 40px;\n  border-radius: 8px;\n\n  "," {\n    margin-top: 202px;\n    width: 335px;\n    height: 376px;\n    margin-bottom: 18px;\n    padding: 40px 24px;\n  }\n"])),v),_=j.ZP.div(h||(h=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),P=j.ZP.img(f||(f=(0,w.Z)(["\n  position: absolute;\n  bottom: 20px;\n  right: 60px;\n  width: 368px;\n  height: 521px;\n  opacity: 0;\n\n  "," {\n    opacity: 1;\n  }\n"])),y),I=(0,j.ZP)(Z.rU)(m||(m=(0,w.Z)(["\n  color: #3e85f3;\n  line-height: calc(24 / 18);\n  text-decoration: underline;\n  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),\n    0px 47px 355px rgba(0, 0, 0, 0.07);\n\n  "," {\n    font-size: 12px;\n    line-height: calc(14 / 12);\n  }\n"])),v),C=i.p+"static/media/desk@1.7c0eae284069485d321f.webp",S=i.p+"static/media/desk@2.3fb4ea235e7c24964c4c.webp",E=function(){return(0,c.jsxs)(z,{children:[(0,c.jsx)(P,{srcSet:"".concat(C," 1440w, ").concat(S," 2880w,"),src:C,alt:"goose"}),(0,c.jsxs)(_,{children:[(0,c.jsxs)(k,{children:[(0,c.jsx)(b.Z,{children:"Log In"}),(0,c.jsx)(g,{})]}),(0,c.jsx)(I,{to:"/register",children:"Sign up"})]})]})};function R(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(E,{})})}}}]);
//# sourceMappingURL=847.ffd348bb.chunk.js.map