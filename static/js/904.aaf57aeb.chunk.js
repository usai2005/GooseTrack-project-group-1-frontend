"use strict";(self.webpackChunkGooseTrack_project_group_1_frontend=self.webpackChunkGooseTrack_project_group_1_frontend||[]).push([[904],{7904:function(n,e,r){r.r(e),r.d(e,{default:function(){return mn}});var t,i,a,o,d,c,l,p,s,m,h,u,x,f,g,b,y,k=r(4165),_=r(1413),v=r(5861),w=r(9439),Z=r(2791),j=r(9434),I=r(4217),z=r(9273),C=r(1134),P=r(8007),R=new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),A={image:["jpg","gif","png","jpeg","svg","webp"]},B=P.Ry().shape({name:P.Z_().required("This field is required").matches(R,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").max(16,"Name may contain only 16 characters"),phone:P.Z_().matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,{message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",excludeEmptyString:!0}),birthday:P.hT("Invalid date format"),skype:P.Z_().max(16,"Skype may contain only 16 characters"),email:P.Z_().email("Invalid email format").required("This field is required"),avatarURL:P.nK().test("is-valid-type","Ivalid image type",(function(n){return""===n||function(n){if("string"===typeof n&&n.includes("image"))return!0;if(0===n.length)return!0;var e=n[0].name.toLowerCase();return A.image.indexOf(e.split(".").pop())>-1}(n)}))}),L=r(4695),S=r(168),F=r(5867),N=F.ZP.label(t||(t=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-family: 'InterRegular';\n  font-size: 14px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.theme.variable.bgReversLabel})),U=F.ZP.input(i||(i=(0,S.Z)(["\n  font-family: 'InterSemiBold';\n  font-size: 16px;\n  background-color: ",";\n  outline: none;\n  border: 1px solid;\n  border-radius: 8px;\n  border-color: ",";\n  color: ",";\n  padding: 0.875rem;\n\n  height: 42px;\n\n  width: 299px;\n\n\n\n  "," {\n    height: 46px;\n\n    width: 354px;\n  \n  }\n\n  &::placeholder {\n    font-family: 'InterRegularr';\n    font-size: 16px;\n    line-height: 18px;\n    color: 'inherit';\n  }\n\n  &[type='time']::-webkit-calendar-picker-indicator {\n    background: none;\n  }\n\n\n"])),(function(n){return n.theme.variable.secondaryBg}),(function(n){return n.theme.variable.borderProfileColor}),(function(n){return n.theme.variable.text}),"@media screen and (max-width: 767px)"),D=r(184),E=function(n){var e=n.id,r=n.inputName,t=n.type,i=n.placeholder,a=n.label,o=n.register;return(0,D.jsxs)("div",{children:[(0,D.jsx)(N,{htmlFor:e,children:a}),(0,D.jsx)(U,(0,_.Z)({id:e,type:t,placeholder:i},o(r)))]})},T=r(8813),q=[{inputName:"name",type:"text",id:(0,T.nanoid)(),label:"User Name",placeholder:"Enter your name"},{inputName:"phone",type:"tel",id:(0,T.nanoid)(),label:"Phone",placeholder:"Enter phone"},{inputName:"birthday",type:"date",id:(0,T.nanoid)(),label:"Birthday",placeholder:"DD/MM/YYYY"},{inputName:"skype",type:"string",id:(0,T.nanoid)(),label:"Skype",placeholder:"Add a skype number"},{inputName:"email",type:"email",id:(0,T.nanoid)(),label:"Email",placeholder:"Enter email"}],M={inputName:"avatarURL",type:"file",id:(0,T.nanoid)(),label:"",placeholder:""},Y=r(3439),G=F.ZP.svg(a||(a=(0,S.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n"]))),O=F.ZP.svg(o||(o=(0,S.Z)(["\nposition: absolute;\nborder-radius: 50%;\nbackground-color: #3e85f3;\ncontent: '+';\nstroke: #FFFFFF;\nfont-family: Inter;\nfont-size: 18px;\nline-height: 1.375rem;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 14px;\nheight: 14px;\ntop: 1.4375rem;\nright: 0.875rem;\npointer-events: none;\n\n@media (min-width: 768px) {\n  width: 1.5rem;\n  height: 1.5rem;\n\n  top: 9.0625rem;\n  right: 1.5rem;\n  pointer-events: none;\n\n\n\n  @media (min-width: 1087px) {\n    top: 10.3125rem;\n    pointer-events: none;\n  }\n\n}\n"]))),W=F.ZP.div(d||(d=(0,S.Z)(["\n  position: relative;\n  text-align: center;\n  margin-right:60px\n"]))),$=F.ZP.label(c||(c=(0,S.Z)(["\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 72px;\n  height: 72px;\n\n  margin-bottom: 1.125rem;\n  margin-top: -37px;\n\n  border-radius: 50%;\n  border: 2px solid #3e85f3;\n  background-color: none;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    margin-top: 40px;\n    width: 124px;\n    height: 124px;\n  }\n\n  @media (min-width: 1087px) {\n    margin-top: 60px;\n  }\n"]))),J=F.ZP.input(l||(l=(0,S.Z)(["\n  position: absolute;\n  top: 1.4375rem;\n  right: 0.875rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 0.875rem;\n  height: 0.875rem;\n  border: 0;\n  padding: 0;\n\n  border-radius: 50%;\n  background-color: #3e85f3;\n\n  :before {\n    position: absolute;\n    content: '+';\n\n    width: 14px;\n    height: 14px;\n\n    font-size: 0.9375rem;\n    line-height: 0.8125rem;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    /* color: ; */\n    background-color: #3e85f3;\n  }\n\n  @media (min-width: 768px) {\n    width: 1.5rem;\n    height: 1.5rem;\n\n    top: 9.0625rem;\n    right: 1.5rem;\n\n    :before {\n      position: absolute;\n      content: '+';\n      /* color: ; */\n      font-family: Inter;\n      font-size: 18px;\n      line-height: 1.375rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 24px;\n      height: 24px;\n      /* background-color: ; */\n    }\n  }\n\n  @media (min-width: 1087px) {\n    top: 10.3125rem;\n  }\n"]))),K=F.ZP.div(p||(p=(0,S.Z)(["\n  position: relative;\n  padding-top: 10px;\n  > h3 {\n    color: ",";\n    font-family: InterBold;\n    font-size: 18px;\n    line-height: 1.125rem;\n\n    margin-bottom: 0.25rem;\n\n    @media (min-width: 768px) {\n      font-size: 1.125rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  > p {\n    color: ",";\n    font-family: InterSemiBold;\n    font-size: 14px;\n    line-height: 0.875rem;\n\n    @media (min-width: 768px) {\n      font-size: 0.875rem;\n      line-height: 1.125rem;\n    }\n  }\n"])),(function(n){return n.theme.variable.text}),(function(n){return n.theme.variable.textAvatar})),V=function(n){var e=n.userName,r=n.inputName,t=n.type,i=n.id,a=n.currentAvatarURL,o=n.setCurrentAvatarURL,d=n.setIsDisabled,c=n.register;return(0,D.jsxs)(W,{children:[(0,D.jsx)($,{htmlFor:i,children:a?(0,D.jsx)("img",{src:a,alt:"user_photo"}):(0,D.jsx)("p",{children:(0,D.jsx)(G,{children:(0,D.jsx)("use",{href:"".concat(Y.Z,"#icon-user")})})})}),(0,D.jsx)(J,(0,_.Z)((0,_.Z)({},c(r)),{},{id:i,type:t,accept:"image/*",onChange:function(n){return function(n,e){if(!n)return e(null);var r=new FileReader;r.readAsDataURL(n),r.onload=function(){e(r.result)}}(n.target.files[0],o),d(!1),n}})),(0,D.jsx)("p",{children:(0,D.jsx)(O,{children:(0,D.jsx)("use",{href:Y.Z+"#icon-plus"})})}),(0,D.jsxs)(K,{children:[(0,D.jsx)("h3",{children:e}),(0,D.jsx)("p",{children:"User"})]})]})},X="@media screen and (max-width: 767px)",H=F.ZP.form(s||(s=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n\n\n  border-radius: 16px;\n  background-color: ",";\n\n  & > button {\n    padding: 14px 50px;\n    margin-top: 0px;\n    margin-bottom: 40px;\n\n    @media (min-width: 768px) {\n      padding: 15px 84px;\n    }\n\n    @media (min-width: 1087px) {\n      margin-bottom: 60px;\n    }\n  }\n"])),(function(n){return n.theme.variable.secondaryBg})),Q=F.ZP.div(m||(m=(0,S.Z)(["\n  width: 100%;\n  display: grid;\n  padding: 0px 18px;\n  margin: 40px 0;\n  gap: 18px;\n\n  \n\n  @media (min-width: 768px) {\n    max-width: 354px;\n    padding: 0px;\n  }\n\n  @media (min-width: 1078px) {\n    max-width: 758px;\n\n    grid-template-columns: 1fr 1fr;\n    column-gap: 50px;\n    row-gap: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    max-width: 1080px;\n    padding-left: 164px;\n    padding-right: 164px;\n    margin-top: 44px;\n    margin-bottom: 88px;\n  }\n\n  @media (min-width: 2560px) {\n    max-width: 1440px;\n    padding: 50px;\n    grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));\n  }\n"]))),nn=(F.ZP.div(h||(h=(0,S.Z)(["\n  font-family: 'Inter', sans-serif;\n  margin-right: 8px;\n  & .react-datepicker__today-button {\n    border: none;\n    background: none;\n  }\n  & input {\n    display: inline;\n\n    text-align: center;\n    padding: 0;\n    background-color: #3e85f3;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    height: 30px;\n\n    width: 140px; ///\n\n    color: white;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: calc(14 / 18);\n  }\n  & .react-datepicker {\n    background-color: #3e85f3;\n    color: white;\n    border-radius: 16px;\n  }\n  & .react-datepicker__header {\n    background-color: #3e85f3;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__triangle::after,\n  & .react-datepicker__triangle::before {\n    background-color: #3e85f3;\n    display: none;\n  }\n  & .react-datepicker__current-month {\n    font-size: 16px;\n    margin-bottom: 18px;\n  }\n  & .react-datepicker__day-name,\n  & .react-datepicker__day.react-datepicker__day--outside-month {\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  & .react-datepicker__navigation-icon::before {\n    border-color: white;\n  }\n  & .react-datepicker__current-month {\n    color: white;\n  }\n  & .react-datepicker__week:last-of-type {\n    margin-bottom: 0;\n  }\n  & .react-datepicker__week:not(:last-of-type) {\n    margin-bottom: 7px;\n  }\n  & .react-datepicker__day.react-datepicker__day--selected {\n    border-radius: 50%;\n    color: #3e85f3;\n\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__day.react-datepicker__day--today {\n    background-color: #fff;\n    border-radius: 50%;\n    color: #3e85f3;\n    font-weight: 500;\n  }\n  & .react-datepicker__day--keyboard-selected {\n    border: none;\n    background: none;\n  }\n  & .react-datepicker__day {\n    color: inherit;\n    font-size: 14px;\n  }\n"]))),F.ZP.button(u||(u=(0,S.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-family: InterRegular;\n  font-size: 14px;\n  width: 262px;\n  height: 48px;\n  padding: 15px, 83px;\n  background-color: ",";\n  border-radius: 16px;\n  color: #fff;\n\n  &:disabled {\n    background-color: rgb(163, 168, 173);\n    color: ",";\n  }\n\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);\n  }\n"])),(function(n){return n.theme.variable.buttonBg}),(function(n){return n.theme.variable.btndisActive}),(function(n){return n.theme.variable.btnColorActive}))),en=F.ZP.label(x||(x=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-family: 'InterRegular';\n  font-size: 14px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.theme.variable.bgReversLabel})),rn=F.ZP.div(f||(f=(0,S.Z)(["\n  font-family: 'Inter', sans-serif;\n  margin-right: 8px;\n  & .react-datepicker__today-button {\n    border: none;\n    background: none;\n  }\n  & input {\n    display: inline;\n\n    font-family: 'InterSemiBold';\n    font-size: 16px;\n    background-color: ",";\n    outline: none;\n    border: 1px solid ;\n    border-color: ",";\n    border-radius: 8px;\n\n\n    text-align: center;\n    padding: 0;\n\n\n    height: 42px;\n\n    width: 299px;\n\n    color: white;\n    text-transform: uppercase;\n\n    font-weight: 700;\n    line-height: calc(14 / 18);\n\n    "," {\n      height: 46px;\n  \n      width: 354px;\n    \n    }\n  }\n\n  & .react-datepicker {\n    background-color: #3e85f3;\n    color: white;\n    border-radius: 16px;\n  }\n  & .react-datepicker__header {\n    background-color: #3e85f3;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__triangle::after,\n  & .react-datepicker__triangle::before {\n    background-color: #3e85f3;\n    display: none;\n  }\n  & .react-datepicker__current-month {\n    font-size: 16px;\n    margin-bottom: 18px;\n  }\n  & .react-datepicker__day-name,\n  & .react-datepicker__day.react-datepicker__day--outside-month {\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  & .react-datepicker__navigation-icon::before {\n    border-color: white;\n  }\n  & .react-datepicker__current-month {\n    color: white;\n  }\n  & .react-datepicker__week:last-of-type {\n    margin-bottom: 0;\n  }\n  & .react-datepicker__week:not(:last-of-type) {\n    margin-bottom: 7px;\n  }\n  & .react-datepicker__day.react-datepicker__day--selected {\n    border-radius: 50%;\n    color: #3e85f3;\n\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__day.react-datepicker__day--today {\n    background-color: #fff;\n    border-radius: 50%;\n    color: #3e85f3;\n    font-weight: 500;\n  }\n  & .react-datepicker__day--keyboard-selected {\n    border: none;\n    background: none;\n  }\n  & .react-datepicker__day {\n    color: inherit;\n    font-size: 14px;\n  }\n\n"])),(function(n){return n.theme.variable.secondaryBg}),(function(n){return n.theme.variable.borderProfileColor}),X),tn=F.ZP.div(g||(g=(0,S.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  "," {\n    margin-bottom: 18px;\n  }\n"])),X),an=(F.ZP.button(b||(b=(0,S.Z)(["\ndisplay:none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 30px;\n  background-color: ",";\n  border: ",";\n  color: ",";\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    width: 38px;\n  }\n  &:first-of-type {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right-width: 0.5px;\n  }\n  &:last-of-type {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    border-left-width: 0.5px;\n  }\n"])),(function(n){return n.theme.variable.CalendarLinkColor}),(function(n){return n.theme.variable.borderColorWeekCalendar}),(function(n){return n.theme.variable.calendarTextColor}),(function(n){return n.theme.variable.mainBackgroundColor}),(function(n){return n.theme.variable.activeArrowColor})),r(9513)),on=r.n(an),dn=(r(8639),r(1951)),cn=function(n){var e=n.setFormBirthday;return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(on(),{onChange:function(n){e((0,dn.default)(n,"yyyy-MM-dd")),console.log("Info value"),console.log(n),console.log("Info value")},calendarStartDay:1,closeOnScroll:!0,formatWeekDay:function(n){return n.substr(0,1)},todayButton:"Today"})})},ln=function(){var n=(0,j.v9)(I.dy),e=n.name,r=n.email,t=n.avatarURL,i=n.phone,a=n.skype,o=n.birthday,d=(0,j.I0)(),c=(0,C.cI)({resolver:(0,L.X)(B),defaultValues:{name:e,email:r,phone:i||"",birthday:o||"1900-01-01",skype:a||"",avatarURL:t||""}}),l=c.register,p=c.handleSubmit,s=c.formState,m=s.isDirty,h=s.dirtyFields,u=(0,Z.useState)(!0),x=(0,w.Z)(u,2),f=x[0],g=x[1],b=(0,Z.useState)(t),y=(0,w.Z)(b,2),P=y[0],R=y[1],A=(0,Z.useState)("1990-01-01"),S=(0,w.Z)(A,2),F=S[0],N=S[1];console.log("Info birthday"),console.log(F),console.log("Info birthday"),(0,Z.useEffect)((function(){o&&N(o)}),[o]);var U=function(){var n=(0,v.Z)((0,k.Z)().mark((function n(e){var t,i,a,o,c,l;return(0,k.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=F,i=""===e.avatarURL?null:P,a=""===e.email?r:e.email,o=""===e.phone?null:e.phone,c=""===e.skype?null:e.skype,l=(0,_.Z)((0,_.Z)({},e),{},{email:a,phone:o,skype:c,birthday:t,avatarURL:i}),console.log("Info prepared data"),console.log(l),console.log("Info prepared data"),d((0,z.Nq)(l)),g(!0);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,Z.useEffect)((function(){P===t&&(m&&g(!1),m||g(!0))}),[m,h,P,t]),(0,D.jsxs)(H,{onSubmit:p(U),autoComplete:"false",children:[(0,D.jsx)(V,(0,_.Z)({userName:e,register:l,currentAvatarURL:P,setCurrentAvatarURL:R,setIsDisabled:g},M)),(0,D.jsx)(Q,{children:q.map((function(n){return"date"!==n.type?(0,D.jsx)(E,(0,_.Z)((0,_.Z)({},n),{},{register:l}),n.id):(0,D.jsx)(tn,{children:(0,D.jsxs)(rn,{children:[(0,D.jsx)(en,{children:"Birthday"}),(0,D.jsx)(cn,(0,_.Z)({setFormBirthday:N},n),n.id)]})})}))}),(0,D.jsx)(nn,{type:"submit",function:"save",disabled:f,children:"Save changes"})]})},pn=r(7689),sn=F.zo.div(y||(y=(0,S.Z)(["\n\n\n  padding: 0 20px 95px 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 32px 64px 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 0 32px 32px 32px;\n  }\n"])));function mn(){return(0,D.jsx)("div",{children:(0,D.jsxs)(sn,{children:[(0,D.jsx)(ln,{}),(0,D.jsx)(pn.j3,{})]})})}}}]);
//# sourceMappingURL=904.aaf57aeb.chunk.js.map