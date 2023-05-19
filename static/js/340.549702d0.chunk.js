"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[340],{1340:function(e,u,t){t.r(u),t.d(u,{default:function(){return j}});var n=t(2791),a=t(9434),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,u){return e+=(u&=63)<36?u.toString(36):u<62?(u-26).toString(36).toUpperCase():u>62?"-":"_"}),"")},s=t(6351),o=t(8559),l="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",c="ContactForm_btn__wll+u",d=t(3329),m=function(){var e=(0,a.I0)(),u=(0,a.v9)(s.Af),t=r(),n=r();return(0,d.jsx)("div",{children:(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n,a=t.target;u.forEach((function(e){a.name.value.toLowerCase()===e.name.toLowerCase()&&(n=!0)})),n&&alert("".concat(a.name.value," is already in contacts!")),n||(e((0,o.uK)({name:a.name.value,number:a.number.value})),console.log(a.number.value)),a.reset()},className:l,children:[(0,d.jsx)("label",{className:i,htmlFor:n,children:"Name"}),(0,d.jsx)("input",{id:n,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:i,htmlFor:t,children:"Number"}),(0,d.jsx)("input",{id:t,type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,autoComplete:"tel"}),(0,d.jsx)("button",{className:c,type:"submit",children:"Add contact"})]})})},h="ContactList_element__v3kbj",_="ContactList_listItem__SptUx",p="ContactList_btnDelete__Eeo9v",f=function(e){var u=e.storage,t=(0,a.v9)(s.Af),n=(0,a.v9)(s.AD),r=(0,a.I0)(),l=n.status,i=t.filter((function(e){return e.name.toLowerCase().includes(l)})),c=i===[]?"":i.map((function(e){return(0,d.jsxs)("li",{id:e.id,className:h,children:[e.name,": ",e.number,(0,d.jsx)("button",{onClick:function(){return n=e.id,r((0,o.GK)(n)),void localStorage.setItem(u,JSON.stringify(t));var n},className:p,children:"Delete"})]},e.id)}));return(0,d.jsx)("ul",{className:_,children:c})},v="Filter_filter__vxThR",b="Filter_input__N7T3z",x=t(6576),A=function(){var e=(0,a.I0)(),u=r();return(0,d.jsx)("div",{className:v,children:(0,d.jsxs)("label",{htmlFor:"filter",children:["Filter contacts by name",(0,d.jsx)("input",{className:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f\\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C])?[a-zA-Z\u0430-\u044f\u0410-\u042f \\u0104\\u0105\\u0106\\u0107\\u0118\\u0119\\u0141\\u0142\\u0143\\u0144\\u00D3\\u00F3\\u015A\\u015B\\u0179\\u017A\\u017B\\u017C]*)*$",onChange:function(u){var t=u.target.value.toLowerCase();e((0,x.Tv)(t))},id:u})]})})},C=t(6907);function j(){var e=(0,a.I0)(),u=(0,a.v9)(s.xU),t=(0,a.v9)(s.zh);return(0,n.useEffect)((function(){e((0,o.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(C.ql,{children:(0,d.jsx)("title",{children:"Phonebook"})}),(0,d.jsx)(m,{}),(0,d.jsx)(A,{}),(0,d.jsx)(f,{}),!!u&&!t&&(0,d.jsx)("b",{children:"Loading..."})]})}}}]);
//# sourceMappingURL=340.549702d0.chunk.js.map