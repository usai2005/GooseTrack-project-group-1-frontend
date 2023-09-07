"use strict";(self.webpackChunkGooseTrack_project_group_1_frontend=self.webpackChunkGooseTrack_project_group_1_frontend||[]).push([[648],{8648:function(n,e,t){t.r(e),t.d(e,{default:function(){return wn}});var r,i,a,o,d,p,c,l,s,h,m,u,x,f,g,b,y,v,w,k=t(1413),_=t(4165),Z=t(5861),j=t(9439),z=t(2791),C=t(9434),P=t(4217),R=t(9273),D=t(1134),A=t(9504),N=t.n(A),B=t(168),L=t(5867),U=L.ZP.p(r||(r=(0,B.Z)(["\n  color: red;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 5px;\n"]))),M=L.ZP.div(i||(i=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  width: 299px;\n  height: 64px;\n\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 72px;\n  }\n"]))),S=L.ZP.label(a||(a=(0,B.Z)(["\n  font-size: 12px;\n  color: ",";\n\n  line-height: calc(14 / 12);\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n\n    line-height: calc(18 / 14);\n  }\n"])),(function(n){return n.theme.variable.bgReversLabel})),T=L.ZP.input(o||(o=(0,B.Z)(["\n  width: 100%;\n  height: 42px;\n\n  padding: 12px 14px;\n\n  background-color: ",";\n  outline: none;\n\n  border: 1px solid ",";\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 600;\n  color: ",";\n  line-height: calc(18 / 14);\n\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    height: 46px;\n\n    padding: 14px 18px;\n\n    font-size: 16px;\n    line-height: calc(18 / 16);\n  }\n\n  &::placeholder {\n    /* font-size: 16px;\n    line-height: 18px; */\n    color: 'inherit';\n  }\n\n  &[type='time']::-webkit-calendar-picker-indicator {\n    background: none;\n  }\n"])),(function(n){return n.theme.variable.secondaryBg}),(function(n){return n.theme.variable.borderProfileColor}),(function(n){return n.theme.variable.text})),E=t(184),V=function(n){var e=n.id,t=n.inputName,r=n.type,i=n.placeholder,a=n.label,o=n.register,d=n.error,p=n.setValue,c="phone"===t;return(0,E.jsx)(E.Fragment,{children:(0,E.jsxs)(M,{children:[(0,E.jsx)(S,{htmlFor:e,style:{color:d?"#e74a3b":""},children:a}),c?(0,E.jsx)(N(),(0,k.Z)((0,k.Z)({style:{borderColor:d?"#e74a3b":""},id:e,mask:"+99 (999) 999-9999",maskChar:"_",type:"tel",placeholder:i},o(t)),{},{onChange:function(n){p(t,n.target.value,{shouldDirty:!0})},children:function(n){return(0,E.jsx)(T,(0,k.Z)({},n))}})):(0,E.jsx)(T,(0,k.Z)((0,k.Z)({style:{borderColor:d?"#e74a3b":""},id:e,type:r,placeholder:i},o(t)),{},{onChange:function(n){p(t,n.target.value,{shouldDirty:!0})}})),d&&(0,E.jsx)(U,{children:d.message})]})})},Y=t(8813),q=[{inputName:"name",type:"text",id:(0,Y.nanoid)(),label:"User Name",placeholder:"Enter your name"},{inputName:"birthday",type:"date",id:(0,Y.nanoid)(),label:"Birthday",placeholder:"DD/MM/YYYY"},{inputName:"email",type:"email",id:(0,Y.nanoid)(),label:"Email",placeholder:"Enter email"},{inputName:"phone",type:"tel",id:(0,Y.nanoid)(),label:"Phone",placeholder:"Enter phone"},{inputName:"skype",type:"string",id:(0,Y.nanoid)(),label:"Skype",placeholder:"Add a skype number"}],F={inputName:"avatarURL",type:"file",id:(0,Y.nanoid)(),label:"",placeholder:""},I=t(3439),$=L.ZP.svg(d||(d=(0,B.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n"]))),O=L.ZP.svg(p||(p=(0,B.Z)(["\n  position: relative;\n  border-radius: 50%;\n  background-color: #3e85f3;\n  content: '+';\n  stroke: #ffffff;\n  font-family: Inter;\n  font-size: 18px;\n  line-height: 1.375rem;\n  align-items: center;\n  width: 12px;\n  height: 12px;\n\n\n  top: -18px;\n  right: -24px;\n\n  pointer-events: none;\n\n  @media screen and (min-width: 768px) {\n    width: 1.5rem;\n    height: 1.5rem;\n\n    pointer-events: none;\n\n    @media screen and (min-width: 1440px) {\n      pointer-events: none;\n    }\n  }\n  @media (min-width: 1440px) {\n    pointer-events: none;\n  }\n\n  @media (max-width: 768px) {\n    top: -14px;\n    right: -14px;\n  }\n"]))),G=L.ZP.div(c||(c=(0,B.Z)(["\n  position: relative;\n  text-align: center;\n\n  @media (max-width: 768px) {\n    top: -31px;\n  }\n"]))),W=L.ZP.label(l||(l=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 72px;\n  height: 72px;\n\n  border-radius: 50%;\n  border: 2px solid #3e85f3;\n  background-color: none;\n  overflow: hidden;\n\n  & img {\n    object-fit: cover;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 40px;\n    width: 124px;\n    height: 124px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 60px;\n  }\n"]))),J=L.ZP.input(s||(s=(0,B.Z)(["\n  opacity: 0;\n  position: relative;\n\n  align-items: center;\n\n  width: 12px;\n  height: 12px;\n\n  top: -18px;\n  right: -24px;\n\n  border-radius: 50%;\n  background-color: #3e85f3;\n\n  @media (max-width: 768px) {\n    top: -14px;\n    right: -14px;\n  }\n\n\n  @media screen and (min-width: 768px) {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]))),X=L.ZP.div(h||(h=(0,B.Z)(["\n  position: relative;\n  padding-top: 20px;\n  > h3 {\n    color: ",";\n    font-family: InterBold;\n    font-size: 18px;\n    line-height: 1.125rem;\n\n    margin-bottom: 0.25rem;\n\n    @media screen and (min-width: 768px) {\n      font-size: 1.125rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  > p {\n    color: ",";\n    font-family: InterSemiBold;\n    font-size: 14px;\n    line-height: 0.875rem;\n\n    @media screen and (min-width: 768px) {\n      font-size: 0.875rem;\n      line-height: 1.125rem;\n    }\n  }\n"])),(function(n){return n.theme.variable.text}),(function(n){return n.theme.variable.textAvatar})),H=function(n){var e=n.userName,t=n.inputName,r=n.type,i=n.id,a=n.avatarURL,o=n.currentAvatarURL,d=n.setCurrentAvatarURL,p=n.register,c=n.setValue;return(0,E.jsxs)(G,{children:[(0,E.jsx)(W,{htmlFor:i,children:o?(0,E.jsx)("img",{src:URL.createObjectURL(o),alt:"user_photo"}):a?(0,E.jsx)("img",{src:a,alt:"user_photo"}):(0,E.jsx)($,{children:(0,E.jsx)("use",{href:"".concat(I.Z,"#icon-user")})})}),(0,E.jsx)(J,(0,k.Z)((0,k.Z)({},p(t)),{},{id:i,type:r,accept:"image/*",onChange:function(n){d(n.target.files[0]),c(t,n.target.files[0],{shouldDirty:!0})}})),(0,E.jsx)(O,{children:(0,E.jsx)("use",{href:I.Z+"#icon-plus"})}),(0,E.jsxs)(X,{children:[(0,E.jsx)("h3",{children:e}),(0,E.jsx)("p",{children:"User"})]})]})},K=L.ZP.form(m||(m=(0,B.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  border-radius: 16px;\n  background-color: ",";\n\n  & > button {\n    padding: 14px 50px;\n    margin-top: 0px;\n    margin-bottom: 40px;\n\n    @media screen and (min-width: 768px) {\n      padding: 15px 84px;\n    }\n\n    @media screen and (min-width: 1440px) {\n      margin-bottom: 60px;\n    }\n  }\n"])),(function(n){return n.theme.variable.secondaryBg})),Q=L.ZP.div(u||(u=(0,B.Z)(["\n  width: 100%;\n  display: grid;\n  padding: 0px 18px;\n  margin: 40px 0;\n  gap: 18px;\n\n  @media screen and (min-width: 768px) {\n    width: 354px;\n    padding: 0px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 758px;\n    padding: 0px;\n\n    grid-auto-flow: column;\n    grid-template-rows: repeat(3, 1fr);\n\n    column-gap: 50px;\n    row-gap: 24px;\n  }\n"]))),nn=L.ZP.button(x||(x=(0,B.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-family: InterRegular;\n  font-size: 14px;\n  width: 262px;\n  height: 48px;\n  padding: 15px, 83px;\n  background-color: ",";\n  border-radius: 16px;\n  color: #fff;\n\n  &:disabled {\n    background-color: rgb(163, 168, 173);\n    color: ",";\n  }\n\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);\n  }\n"])),(function(n){return n.theme.variable.buttonBg}),(function(n){return n.theme.variable.btndisActive}),(function(n){return n.theme.variable.btnColorActive})),en=L.ZP.label(f||(f=(0,B.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 0.5rem;\n\n  font-family: 'InterRegular';\n  font-size: 14px;\n  line-height: 15px;\n\n  color: ",";\n"])),(function(n){return n.theme.variable.bgReversLabel})),tn=L.ZP.div(g||(g=(0,B.Z)(["\n  /* font-family: 'Inter', sans-serif;\n  position:relative;\n  margin-right: 8px; */\n  & .react-datepicker__today-button {\n    border: none;\n    background: none;\n    display: none;\n  }\n  & input {\n    font-size: 14px;\n    background-color: ",";\n    outline: none;\n    border: 1px solid ",";\n    border-radius: 8px;\n    padding: 12px 14px;\n    height: 42px;\n    width: 299px;\n\n    color: ",";\n    text-transform: uppercase;\n\n    font-weight: 600;\n    line-height: calc(18 / 14);\n\n    @media screen and (min-width: 768px) {\n      height: 46px;\n      width: 354px;\n      padding: 14px 18px;\n      font-size: 16px;\n    }\n\n    &::placeholder {\n      font-size: 16px;\n      line-height: calc(18 / 16);\n      color: rgba(17, 17, 17, 0.15);\n    }\n  }\n\n  & .react-datepicker {\n    background-color: #3e85f3;\n    color: white;\n    border-radius: 16px;\n    padding: 18px;\n  }\n  & .react-datepicker__header {\n    background-color: #3e85f3;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__triangle::after,\n  & .react-datepicker__triangle::before {\n    background-color: #3e85f3;\n    display: none;\n  }\n  & .react-datepicker__current-month {\n    font-size: 20px;\n    margin-bottom: 18px;\n  }\n  & .react-datepicker__day-name {\n    color: #fff;\n    font-size: 14px;\n  }\n  & .react-datepicker__day.react-datepicker__day--outside-month {\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 14px;\n  }\n\n  & .react-datepicker__navigation {\n    top: 24px;\n  }\n\n  & .react-datepicker__navigation-icon::before {\n    border-color: white;\n  }\n  & .react-datepicker__current-month {\n    color: white;\n  }\n  & .react-datepicker__week:last-of-type {\n    margin-bottom: 0;\n  }\n  & .react-datepicker__week:not(:last-of-type) {\n    margin-bottom: 7px;\n  }\n  & .react-datepicker__day.react-datepicker__day--selected {\n    border-radius: 50%;\n    color: #3e85f3;\n\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  & .react-datepicker__day.react-datepicker__day--today {\n    background-color: #fff;\n    border-radius: 50%;\n    color: #3e85f3;\n    font-weight: 500;\n  }\n  & .react-datepicker__day--keyboard-selected {\n    border: none;\n    background: none;\n  }\n  & .react-datepicker__day {\n    color: inherit;\n    font-size: 14px;\n  }\n  & .react-datepicker__day--disabled {\n    color: grey;\n  }\n\n  .react-datepicker__year-option {\n    color: #3e85f3;\n  }\n\n  .react-datepicker__year-option:first-of-type {\n    color: #3e85f3;\n    content: ^;\n  }\n\n  .react-datepicker__month-option {\n    color: #3e85f3;\n  }\n\n  .react-datepicker__month-year-option {\n    color: #3e85f3;\n  }\n\n  .react-datepicker__month-dropdown {\n    color: #3e85f3;\n  }\n\n  .react-datepicker__year-dropdown {\n    color: #3e85f3;\n  }\n"])),(function(n){return n.theme.variable.secondaryBg}),(function(n){return n.theme.variable.borderProfileColor}),(function(n){return n.theme.variable.text})),rn=L.ZP.div(b||(b=(0,B.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  /*  @media screen and (min-width: 768px) {\n    margin-bottom: 18px;\n  } */\n"]))),an=(L.ZP.button(y||(y=(0,B.Z)(["\n  display: none;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 30px;\n  background-color: ",";\n  border: ",";\n  color: ",";\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 38px;\n  }\n  &:first-of-type {\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n    border-right-width: 0.5px;\n  }\n  &:last-of-type {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    border-left-width: 0.5px;\n  }\n"])),(function(n){return n.theme.variable.CalendarLinkColor}),(function(n){return n.theme.variable.borderColorWeekCalendar}),(function(n){return n.theme.variable.calendarTextColor}),(function(n){return n.theme.variable.mainBackgroundColor}),(function(n){return n.theme.variable.activeArrowColor})),L.ZP.svg(v||(v=(0,B.Z)(["\n  stroke: ",";\n  pointer-events: none;\n\n  position: absolute;\n\n  width: 18px;\n  height: 18px;\n  z-index: 10;\n  top: 38px;\n  right: 14px;\n\n  fill: none;\n"])),(function(n){return n.theme.variable.calendarTextColor}))),on=t(9513),dn=t.n(on),pn=(t(8639),t(3216)),cn=t(7602),ln=t(1951),sn=function(n){var e=n.setFormBirthday,t=n.formBirthday,r=n.setValue;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(dn(),{selected:(0,pn.default)(t,"yyyy-MM-dd",new Date),showYearDropdown:!0,showMonthDropdown:!0,minDate:new Date("1970-01-01"),maxDate:(0,cn.default)(new Date,6),closeOnScroll:!1,formatWeekDay:function(n){return n.substr(0,1)},onChange:function(n){e((0,ln.default)(n,"yyyy-MM-dd")),r("birthday",(0,ln.default)(n,"yyyy-MM-dd"),{shouldDirty:!0})}})})},hn=t(1686),mn=t(8007),un=t(2426),xn=t.n(un)()().format("DD/MM/YYYY"),fn=mn.Ry().shape({name:mn.Z_().required("Name is required").matches("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").max(20,"At most 16 digits is required").test("name-validation","Name must be at least 3 characters long",(function(n){return n&&n.replace(/\s/g,"").length>=3})),birthday:mn.hT().max(xn,"Birthday must be earlier than today"),email:mn.Z_().email("This is an ERROR email").matches(/^[a-zA-Z0-9@.]+$/,"Email must contain only Latin characters").required("Email is required field"),phone:mn.Z_().min(13,"The phone number must be in format: +38 (000) 111-2345").max(20,"The phone number must be in format: +38 (000) 111-2345").required("Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/.phone,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"),skype:mn.Z_().matches(/^@[a-z0-9_]{1,16}$/,"Start with @ and contain only [a-z], [0-9] and _").max(13,"At most 13 digits is required").test("Skype-validation","Skype must be at least 3 characters long",(function(n){return n&&n.replace(/\s/g,"").length>=3}))}),gn=t(4695),bn=function(){var n=(0,C.v9)(P.dy),e=n.name,t=n.email,r=n.avatarURL,i=n.phone,a=n.skype,o=n.birthday,d=(0,C.I0)(),p=(0,D.cI)({resolver:(0,gn.X)(fn),mode:"onBlur",defaultValues:{name:e,email:t,phone:i||"",birthday:o||"1900-01-01",skype:a||"",avatarURL:r||""}}),c=p.register,l=p.handleSubmit,s=p.formState,h=s.errors,m=s.isDirty,u=s.isValid,x=p.setValue,f=p.setError,g=(0,z.useState)(null),b=(0,j.Z)(g,2),y=b[0],v=b[1],w=(0,z.useState)("1990-01-01"),A=(0,j.Z)(w,2),N=A[0],B=A[1];(0,z.useEffect)((function(){o&&B(o)}),[o]);var L=function(){var n=(0,Z.Z)((0,_.Z)().mark((function n(r){var p;return(0,_.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(p=new FormData,!r.phone.includes("_")){n.next=4;break}return f("phone",{type:"manual",message:"The phone number must be in format: +38 (000) 111-2345"}),n.abrupt("return");case 4:e!==r.name&&p.append("name",r.name),t!==r.email&&p.append("email",r.email.trim()),i!==r.phone&&p.append("phone",r.phone.trim()),a!==r.skype&&p.append("skype",r.skype.trim()),o!==N&&p.append("birthday",N.trim()),y&&p.append("avatarURL",y),d((0,R.Nq)(p)),hn.Notify.success("Changes saved successfully");case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsxs)(K,{onSubmit:l(L),autoComplete:"off",encType:"multipart/form-data",children:[(0,E.jsx)(H,(0,k.Z)({type:"file",userName:e,register:c,setValue:x,avatarURL:r,currentAvatarURL:y,setCurrentAvatarURL:v},F)),(0,E.jsx)(Q,{children:q.map((function(n){return"date"!==n.type?(0,E.jsx)(V,(0,k.Z)((0,k.Z)({},n),{},{register:c,setValue:x,error:h[n.inputName]}),n.id):(0,E.jsx)(rn,{children:(0,E.jsxs)(tn,{children:[(0,E.jsxs)(en,{children:["Birthday",(0,E.jsx)(an,{children:(0,E.jsx)("use",{href:"".concat(I.Z,"#icon-chevron-down")})})]}),(0,E.jsx)(sn,(0,k.Z)({setValue:x,setFormBirthday:B,formBirthday:N},n),n.id)]})},n.id)}))}),(0,E.jsx)(nn,{type:"submit",disabled:!m||!u,children:"Save changes"})]})},yn=t(7689),vn=L.zo.div(w||(w=(0,B.Z)(["\n  padding: 0 20px 95px 20px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 32px 64px 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 0 32px 32px 32px;\n  }\n"])));function wn(){return(0,E.jsx)("div",{children:(0,E.jsxs)(vn,{children:[(0,E.jsx)(bn,{}),(0,E.jsx)(yn.j3,{})]})})}}}]);
//# sourceMappingURL=648.403f36d1.chunk.js.map