(this["webpackJsonphospital-ward"]=this["webpackJsonphospital-ward"]||[]).push([[0],{12:function(e,t,a){e.exports={form:"Patient_form__2jBF1",inputs:"Patient_inputs__2J-Ov",headerBed:"Patient_headerBed__2EWWD",buttons:"Patient_buttons__22w_h",remove:"Patient_remove__Ro1Wh",submit:"Patient_submit__1VtbT"}},17:function(e,t,a){e.exports={main:"RemoveBedPopup_main__31CCP",description:"RemoveBedPopup_description__26JIV",buttons:"RemoveBedPopup_buttons__gS3rc",accept:"RemoveBedPopup_accept__Ff1ef",reject:"RemoveBedPopup_reject__1fFPt"}},18:function(e,t,a){e.exports={room:"Room_room__1JGhl",roomPrimary:"Room_roomPrimary__1y5ZH",roomIntensive:"Room_roomIntensive__1669F",roomIsolation:"Room_roomIsolation__1pavi",amountPatient:"Room_amountPatient__1QJB5"}},20:function(e,t,a){e.exports={headerBed:"Bed_headerBed__2JlZy",empty:"Bed_empty__AuM47",active:"Bed_active__1CjO4",createPatientIcon:"Bed_createPatientIcon__thjrk",inputAge:"Bed_inputAge__1n3H_"}},30:function(e,t,a){e.exports={container:"Rooms_container__2VNtk",roomContainer:"Rooms_roomContainer__2Xug9"}},32:function(e,t,a){e.exports={title:"Title_title__21d51"}},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(15),r=a.n(c),i=(a(42),a(16)),s=a(4),d=a(32),m=a.n(d),u=a(1),l=function(){return Object(u.jsx)(i.b,{to:"/Hospital-ward",children:Object(u.jsx)("h1",{className:m.a.title,children:"CHIRURGIA OG\xd3LNA"})})},j=a(5),b=a(7),p=a.n(b),O=a(33),h=a.n(O),_=a(34),f=a.n(_),v=a(20),x=a.n(v),y=a(17),I=a.n(y),P=function(e){var t=e.isOpen,a=e.onReject,n=e.onAccept;return t?r.a.createPortal(Object(u.jsxs)("div",{className:I.a.main,children:[Object(u.jsx)("h1",{children:"Czy chcesz usun\u0105\u0107 \u0142\xf3\u017cko?"}),Object(u.jsx)("h4",{className:I.a.description,children:"Usuni\u0119cie \u0142\xf3\u017cka oznacza usuni\u0119cie wszystkich zawartych w nim danych!"}),Object(u.jsxs)("div",{className:I.a.buttons,children:[Object(u.jsx)("button",{className:I.a.accept,onClick:n,children:"TAK"}),Object(u.jsx)("button",{className:I.a.reject,onClick:a,children:"ANULUJ"})]})]}),document.body):null},B=a(36),g=a(3),N=function(e,t){switch(t.type){case"ADD_BED":return Object(g.a)(Object(g.a)({},e),{},{rooms:e.rooms.map((function(e){if(t.payload.roomId===e.id){var a={name:"",age:"",diagnosis:"",comments:"",tasks:"",id:t.payload.areaId};return t.payload.areaId>e.areas.length?Object(g.a)(Object(g.a)({},e),{},{areas:[].concat(Object(B.a)(e.areas),[{id:t.payload.areaId,bed:a}])}):Object(g.a)(Object(g.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.areaId?Object(g.a)(Object(g.a)({},e),{},{bed:a}):e}))})}return e}))});case"DELETE_BED":return Object(g.a)(Object(g.a)({},e),{},{rooms:e.rooms.map((function(e){return t.payload.roomId===e.id?1===e.areas.filter((function(e){return null!==e.bed})).length?(alert("Przepraszamy, na sali musi pozosta\u0107 1 \u0142\xf3\u017cko."),e):Object(g.a)(Object(g.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.areaId?Object(g.a)(Object(g.a)({},e),{},{bed:null}):e}))}):e}))});case"SAVE_INFO":return Object(g.a)(Object(g.a)({},e),{},{rooms:e.rooms.map((function(e){return t.payload.roomId===e.id?Object(g.a)(Object(g.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.info.id?Object(g.a)(Object(g.a)({},e),{},{bed:t.payload.info}):e}))}):e}))});case"CLEAN_INFO":return Object(g.a)(Object(g.a)({},e),{},{rooms:e.rooms.map((function(e){return e.id===t.payload.roomId?Object(g.a)(Object(g.a)({},e),{},{areas:e.areas.map((function(e){if(e.id===t.payload.info.id){var a=Object.entries(t.payload.info).reduce((function(e,t){var a=Object(j.a)(t,2),n=a[0],o=a[1];return e[n]="id"===n?o:"",e}),{});return Object(g.a)(Object(g.a)({},e),{},{bed:a})}return e}))}):e}))});default:return Object(g.a)({},e)}},C=function(e){for(var t=[],a=1;a<=e;a++)t.push({id:a,bed:{name:"",age:"",diagnosis:"",comments:"",tasks:"",id:a}});return t},w={rooms:[{id:1,type:"normal",amount:3,areas:C(3)},{id:2,type:"normal",amount:3,areas:C(3)},{id:3,type:"normal",amount:3,areas:C(3)},{id:4,type:"normal",amount:3,areas:C(3)},{id:5,type:"normal",amount:3,areas:C(3)},{id:6,type:"normal",amount:3,areas:C(3)},{id:7,type:"normal",amount:3,areas:C(3)},{id:8,type:"isolation",amount:1,areas:C(1)},{id:9,type:"intensive",amount:2,areas:C(2)}]},k=Object(n.createContext)(w),A=function(e){var t=e.children,a=Object(n.useReducer)(N,w),o=Object(j.a)(a,2),c=o[0],r=o[1];return Object(u.jsx)(k.Provider,{value:[c,r],children:t})},R=o.a.createContext({showPatientInfo:function(e){},active:null}),E=function(e){var t=Object(n.useContext)(k),a=Object(j.a)(t,2),o=(a[0],a[1]),c=Object(n.useContext)(R),r=Object(n.useState)({isOpenRemovePopup:!1}),i=Object(j.a)(r,2),s=i[0],d=i[1],m=function(t){null===c.active?o({type:"DELETE_BED",payload:{roomId:e.roomId,areaId:t}}):alert("Nie mo\u017cesz usun\u0105\u0107 \u0142\xf3\u017cka, kiedy formularz jest w\u0142\u0105czony.")},l=function(){return""!==e.name},b=function(){d({isOpenRemovePopup:!1}),document.body.style.overflow="initial";var e=document.querySelector("#root").style;e.filter="initial",e.pointerEvents="initial"};return Object(u.jsxs)("div",{onClick:function(){return c.showPatientInfo(e.id)},className:"".concat(p.a.patientBed," \n                ").concat(l()?p.a.fillBed:p.a.emptyBed,"\n                ").concat(c.active===e.id?p.a.active:null),children:[Object(u.jsxs)("div",{className:"".concat(x.a.headerBed," ").concat(l()?x.a.active:x.a.empty),children:[Object(u.jsxs)("span",{children:["\u0141\xd3\u017bKO ",e.id]}),Object(u.jsx)(P,{isOpen:s.isOpenRemovePopup,onAccept:function(t){t.stopPropagation(),m(e.id),b()},onReject:function(e){e.stopPropagation(),b()}}),Object(u.jsx)(h.a,{onClick:function(t){t.stopPropagation(),l()?function(){d({isOpenRemovePopup:!0}),document.body.style.overflow="hidden";var e=document.querySelector("#root").style;e.filter="blur(5px)",e.pointerEvents="none"}():m(e.id)}})]}),l()?Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsxs)("p",{className:p.a.fillBed,children:["Pacjent: ",e.name]}),Object(u.jsxs)("p",{className:p.a.fillBed,children:["Wiek: ",e.age]})," "]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:x.a.createPatientIcon,children:Object(u.jsx)(f.a,{fontSize:"inherit"})}),Object(u.jsx)("span",{children:"DODAJ PACJENTA"})]})]})},D=a(23),S=a(12),F=a.n(S),z=function(e){var t=Object(n.useContext)(k),a=Object(j.a)(t,2),o=(a[0],a[1]),c=Object(n.useState)(Object(g.a)({},e.patient)),i=Object(j.a)(c,2),s=i[0],d=i[1],m=function(e){var t=e.target.name,a=e.target.value;d(Object(g.a)(Object(g.a)({},s),{},Object(D.a)({},t,a)))};return r.a.createPortal(Object(u.jsxs)("form",{className:F.a.form,onSubmit:function(t){var a;t.preventDefault(),a=s,o({type:"SAVE_INFO",payload:{roomId:e.roomId,info:a}})},children:[""===e.patient.name?Object(u.jsx)("div",{className:F.a.headerBed,children:"Dodaj pacjenta"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(){var t;t=s,o({type:"CLEAN_INFO",payload:{roomId:e.roomId,info:t}}),d(Object(g.a)(Object(g.a)({},s),{},{name:"",age:"",diagnosis:"",comments:"",tasks:""}))},className:"".concat(F.a.buttons," ").concat(F.a.remove),children:"USU\u0143"}),Object(u.jsx)("div",{className:F.a.headerBed,children:"Edytuj"})]}),Object(u.jsxs)("label",{children:["Imi\u0119 i nazwisko:",Object(u.jsx)("input",{className:F.a.inputs,required:!0,name:"name",type:"text",value:s.name,onChange:m})]}),Object(u.jsxs)("label",{children:["Wiek:",Object(u.jsx)("input",{className:F.a.inputs,name:"age",type:"number",min:"0",value:s.age,onChange:m})]}),Object(u.jsxs)("label",{children:["Diagnoza lekarska:",Object(u.jsx)("textarea",{name:"diagnosis",cols:"75",rows:"4",wrap:"hard",value:s.diagnosis,onChange:m})]}),Object(u.jsxs)("label",{children:["Uwagi:",Object(u.jsx)("textarea",{name:"comments",cols:"75",rows:"3",value:s.comments,onChange:m})]}),Object(u.jsxs)("label",{children:["Zlecenia:",Object(u.jsx)("textarea",{name:"tasks",cols:"75",rows:"10",value:s.tasks,onChange:m})]}),Object(u.jsx)("input",{className:"".concat(F.a.buttons," ").concat(F.a.submit),type:"submit",value:"ZAPISZ"})]}),document.body)},T=a(35),J=a.n(T),L=function(e){var t=Object(n.useContext)(k),a=Object(j.a)(t,2),o=(a[0],a[1]);return Object(u.jsxs)("div",{onClick:function(){return t=e.id,void o({type:"ADD_BED",payload:{roomId:e.roomId,areaId:t}});var t},className:"".concat(p.a.patientBed," ").concat(p.a.addBed," ").concat(p.a.containerItem),children:[Object(u.jsxs)("span",{children:["DODAJ \u0141\xd3\u017bKO ",e.id]}),Object(u.jsx)("div",{className:p.a.addBedIcon,children:Object(u.jsx)(J.a,{fontSize:"inherit"})})]})},H=function(e){var t=e.area.bed;return Object(u.jsx)(u.Fragment,{children:null!==t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{name:t.name,age:t.age,id:t.id,roomId:e.roomId}),null!==e.showPatient&&e.showPatient.id===t.id?Object(u.jsx)(z,{patient:t,roomId:e.roomId}):null]}):null===e.showPatient?Object(u.jsx)(L,{roomId:e.roomId,id:e.area.id}):null})},U=function(e){var t=Object(n.useContext)(k),a=Object(j.a)(t,1)[0],o=Object(n.useState)({showPatient:null,activeBed:null}),c=Object(j.a)(o,2),r=c[0],i=c[1],s=function(){return a.rooms.find((function(t){return t.id===Number(e.match.params.id)}))},d=s().areas.map((function(t){return Object(u.jsx)("div",{className:p.a.containerItem,children:Object(u.jsx)(H,{area:t,roomId:Number(e.match.params.id),showPatient:r.showPatient})},t.id)}));return Object(u.jsx)(R.Provider,{value:{showPatientInfo:function(e){var t=s().areas.find((function(t){return t.id===e})).bed;r.showPatient!==t?i({showPatient:t,activeBed:e}):i({showPatient:null,activeBed:null})},active:r.activeBed},children:Object(u.jsxs)("div",{className:p.a.container,children:[d,null===r.showPatient?Object(u.jsx)(L,{id:s().areas.length+1,roomId:Number(e.match.params.id)}):null]})})},Z=a(30),q=a.n(Z),W=a(18),K=a.n(W),V=function(e){return Object(u.jsxs)("div",{className:[K.a.room,function(){switch(e.roomType){case"isolation":return K.a.roomIsolation;case"intensive":return K.a.roomIntensive;default:return K.a.roomPrimary}}()].join(" "),children:[Object(u.jsx)("p",{children:function(){switch(e.roomType){case"isolation":return"IZOLATKA";case"intensive":return"SIOM";default:return"SALA ".concat(e.roomNumber)}}()}),Object(u.jsxs)("p",{className:K.a.amountPatient,children:["Stan pacjent\xf3w: ",e.checkAmountOfPatients]})]})},G=function(){var e=Object(n.useContext)(k),t=Object(j.a)(e,1)[0];return Object(u.jsx)("div",{className:q.a.container,children:t.rooms.map((function(e){return Object(u.jsx)("div",{className:q.a.roomContainer,children:Object(u.jsx)(i.b,{to:"/Hospital-ward/room/".concat(e.id),children:Object(u.jsx)(V,{roomNumber:e.id,roomType:e.type,checkAmountOfPatients:(a=e.id,t.rooms.find((function(e){return e.id===a})).areas.map((function(e){return e.bed})).filter((function(e){return null!==e&&""!==e.name})).length)})})},e.id);var a}))})},M=function(){return Object(u.jsx)(A,{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/Hospital-ward",component:G}),Object(u.jsx)(s.a,{path:"/Hospital-ward/room/:id",component:U})]})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),X()},7:function(e,t,a){e.exports={patientBed:"Common_patientBed__itWrz",emptyBed:"Common_emptyBed__1cpsq",fillBed:"Common_fillBed__Et-F9",active:"Common_active__22Zfn",addBed:"Common_addBed__3HXqD",addBedIcon:"Common_addBedIcon__11qNy",container:"Common_container__1KcSg",containerItem:"Common_containerItem__1bvbr"}}},[[51,1,2]]]);
//# sourceMappingURL=main.616193e5.chunk.js.map