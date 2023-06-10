"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[255],{8255:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,i,a,c,u,s,d=t(5705),l=t(6727),m=t(168),x=t(5867),p=(0,x.ZP)(d.l0)(r||(r=(0,m.Z)(["\n    padding: 16px;\n    margin-bottom: 25px;\n    text-align: start;\n    border: 2px solid ",";\n    border-radius: 10px;\n\n    button {\n        padding: 10px;\n        background-color: ",";\n        border: none;\n        border-radius: 10px;\n        \n        :hover, :focus {\n            color: ",";\n            background-color: ",";\n        }\n    }\n"])),(function(n){return n.theme.colors.main}),(function(n){return n.theme.colors.extraLight}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.midle})),h=x.ZP.label(o||(o=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),f=(0,x.ZP)(d.gN)(i||(i=(0,m.Z)(["\n    margin-bottom: 10px;\n    margin-top: 10px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    background-color: ",";\n"])),(function(n){return n.theme.colors.extraLight})),b=(0,x.ZP)(d.Bc)(a||(a=(0,m.Z)(["\n    margin-bottom: 10px;\n    color: ",";\n"])),(function(n){return n.theme.colors.error})),g=t(9434),j=t(208),v=t(184),Z=l.Ry().shape({name:l.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/).required("Requered field"),phone:l.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone number").max(17,"Must be < 17!").min(4,"Must be > 4!").required("Requered field")}),k=function(){var n=(0,g.I0)();return(0,v.jsx)(d.J9,{initialValues:{name:"",phone:""},validationSchema:Z,onSubmit:function(e,t){n((0,j.uK)(e)),t.resetForm()},children:(0,v.jsxs)(p,{children:[(0,v.jsxs)(h,{children:["Name",(0,v.jsx)(f,{name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,v.jsx)(b,{name:"name",component:"div"})]}),(0,v.jsxs)(h,{children:["Number",(0,v.jsx)(f,{type:"tel",name:"phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,v.jsx)(b,{name:"number",component:"div"})]}),(0,v.jsx)("button",{type:"submit",children:"Add contact"})]})})},y=x.ZP.li(c||(c=(0,m.Z)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n    text-align: center;\n\n    p {\n        margin-left: 5px;\n    }\n\n    button {\n        margin-left: auto;\n        margin-right: 16px;\n        padding: 8px;\n        background-color: ",";\n        border: none;\n        border-radius: 10px;\n        \n        :hover, :focus {\n            color: ",";\n            background-color: ",";\n        }\n    }\n    \n"])),(function(n){return n.theme.colors.extraLight}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.midle})),P=function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,i=(0,g.I0)();return(0,v.jsxs)(y,{children:[(0,v.jsx)("p",{children:t})," :",(0,v.jsx)("p",{children:r}),(0,v.jsx)("button",{type:"button",onClick:function(){return i((0,j.GK)(o))},children:"Delete"})]})},C=x.ZP.ul(u||(u=(0,m.Z)(["\n    padding: 0 16px;\n"]))),_=t(6916),L=function(n){return n.contacts.isLoading},w=function(n){return function(n){return n.contacts.error}},A=(0,_.P1)([function(n){return n.contacts.items},function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),q=function(){var n=(0,g.v9)(A);return(0,v.jsx)(C,{children:n.map((function(n){return(0,v.jsx)(P,{contact:n},n.id)}))})},I=x.ZP.label(s||(s=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 25px;\n    padding: 0 16px;\n    text-align: start;\n\n    input {\n        margin-top: 10px;\n        padding: 10px;\n        border: none;\n        border-radius: 10px;\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.extraLight})),N=t(1634),z=function(){var n=(0,g.I0)(),e=(0,g.v9)((function(n){return n.filter}));return(0,v.jsxs)(I,{children:["Find contacts by name",(0,v.jsx)("input",{type:"text",value:e,onChange:function(e){n((0,N.M6)(e.target.value))}})]})},F=t(2791),M=function(){var n=(0,g.I0)(),e=(0,g.v9)(L),t=(0,g.v9)(w);return(0,F.useEffect)((function(){n((0,j.yF)())}),[n]),(0,v.jsxs)("div",{children:["Contacts Page",(0,v.jsx)("h1",{children:"Phonebook"}),(0,v.jsx)(k,{}),(0,v.jsx)("h2",{children:"Contacts"}),(0,v.jsx)(z,{}),e&&!t&&(0,v.jsx)("div",{children:"LOADING..."}),(0,v.jsx)(q,{})]})}}}]);
//# sourceMappingURL=255.605f5251.chunk.js.map