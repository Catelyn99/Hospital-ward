(this["webpackJsonphospital-ward"]=this["webpackJsonphospital-ward"]||[]).push([[0],{15:function(e,t,a){e.exports={form:"PatientForm_form__1X4np",closeIcon:"PatientForm_closeIcon__2qvfB",inputs:"PatientForm_inputs__3HkOW",headerBed:"PatientForm_headerBed__2J-LN",buttons:"PatientForm_buttons__3k_1_",remove:"PatientForm_remove__2XfR0",submit:"PatientForm_submit__1Nygy"}},18:function(e,t,a){e.exports={main:"RemovePatientPopup_main__1_kYf",description:"RemovePatientPopup_description__3RL19",buttons:"RemovePatientPopup_buttons__3kvxW",accept:"RemovePatientPopup_accept__2yv2R",reject:"RemovePatientPopup_reject__1ktsR"}},20:function(e,t,a){e.exports={headerBed:"Bed_headerBed__2JlZy",empty:"Bed_empty__AuM47",active:"Bed_active__1CjO4",createPatientIcon:"Bed_createPatientIcon__thjrk"}},21:function(e,t,a){e.exports={room:"Room_room__1JGhl",roomPrimary:"Room_roomPrimary__1y5ZH",roomIntensive:"Room_roomIntensive__1669F",roomIsolation:"Room_roomIsolation__1pavi"}},31:function(e,t,a){e.exports={container:"Rooms_container__2VNtk",roomContainer:"Rooms_roomContainer__2Xug9"}},33:function(e,t,a){e.exports={title:"Title_title__21d51"}},37:function(e,t,a){e.exports={moreInformation:"Area_moreInformation__2ZWuz"}},45:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(16),i=a.n(c),r=(a(45),a(17)),s=a(4),d=a(5),m=a(39),l=a(3),j=function(e,t){switch(t.type){case"ADD_BED":return Object(l.a)(Object(l.a)({},e),{},{rooms:e.rooms.map((function(e){if(t.payload.roomId===e.id){var a={name:"",age:"",diagnosis:"",comments:"",tasks:"",id:t.payload.areaId};return t.payload.areaId>e.areas.length&&t.payload.areaId<11?Object(l.a)(Object(l.a)({},e),{},{areas:[].concat(Object(m.a)(e.areas),[{id:t.payload.areaId,bed:a}])}):Object(l.a)(Object(l.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.areaId?Object(l.a)(Object(l.a)({},e),{},{bed:a}):e}))})}return e}))});case"DELETE_BED":return Object(l.a)(Object(l.a)({},e),{},{rooms:e.rooms.map((function(e){return t.payload.roomId===e.id?1===e.areas.filter((function(e){return null!==e.bed})).length?(alert("Przepraszamy, na sali musi pozosta\u0107 1 \u0142\xf3\u017cko."),e):Object(l.a)(Object(l.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.areaId?Object(l.a)(Object(l.a)({},e),{},{bed:null}):e}))}):e}))});case"SAVE_INFO":return Object(l.a)(Object(l.a)({},e),{},{rooms:e.rooms.map((function(e){return t.payload.roomId===e.id?Object(l.a)(Object(l.a)({},e),{},{areas:e.areas.map((function(e){return e.id===t.payload.info.id?Object(l.a)(Object(l.a)({},e),{},{bed:t.payload.info}):e}))}):e}))});default:return Object(l.a)({},e)}},u=a(0),b=function(e){for(var t=[],a=1;a<=e;a++)t.push({id:a,bed:{name:"",age:"",diagnosis:"",comments:"",tasks:"",id:a}});return t},p={rooms:[{id:1,type:"isolation",amount:1,areas:b(1)},{id:2,type:"intensive",amount:2,areas:b(2)},{id:3,type:"normal",amount:3,areas:b(3)},{id:4,type:"normal",amount:3,areas:b(3)},{id:5,type:"normal",amount:3,areas:b(3)},{id:6,type:"normal",amount:3,areas:b(3)},{id:7,type:"normal",amount:3,areas:b(3)},{id:8,type:"normal",amount:3,areas:b(3)},{id:9,type:"normal",amount:3,areas:b(3)}]},O=Object(n.createContext)(p),h=function(e){var t=e.children,a=Object(n.useReducer)(j,p),o=Object(d.a)(a,2),c=o[0],i=o[1];return Object(u.jsx)(O.Provider,{value:[c,i],children:t})},_=a(8),f=a.n(_),x=function(e){var t=Object(n.useContext)(O),a=Object(d.a)(t,2),o=a[0],c=(a[1],e.match.url.split("/")),i=Number(c[3]),r=Number(e.match.params.id),s=o.rooms.find((function(e){return e.id===i})).areas.find((function(e){return e.id===r})).bed;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:f.a.bedName,children:Object(u.jsxs)("span",{className:f.a.bedNameText,children:["POK\xd3J ",i," - \u0141\xd3\u017bKO ",r]})}),Object(u.jsxs)("nav",{className:f.a.navigation,children:[Object(u.jsx)("button",{className:"".concat(f.a.navItem," ").concat(f.a.back),onClick:function(){e.history.goBack()},children:"Powr\xf3t"}),Object(u.jsx)("div",{className:f.a.navItem,children:"Edytuj"}),Object(u.jsx)("div",{className:f.a.navItem,children:"Wskaz\xf3wki"}),Object(u.jsx)("div",{className:f.a.navItem,children:"Historia"})]}),Object(u.jsxs)("div",{className:f.a.information,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Imi\u0119 i nazwisko:"}),Object(u.jsx)("span",{className:f.a.inInfo,children:s.name})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Wiek:"}),Object(u.jsx)("span",{className:f.a.inInfo,children:s.age})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Diagnoza:"}),Object(u.jsx)("span",{className:f.a.inInfo,children:s.diagnosis})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Zlecenia:"}),Object(u.jsx)("span",{className:f.a.inInfo,children:s.tasks})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Uwagi:"}),Object(u.jsx)("span",{className:f.a.inInfo,children:s.comments})]})]})]})},v=a(33),I=a.n(v),y=function(){return Object(u.jsx)(r.b,{to:"/Hospital-ward",children:Object(u.jsx)("h1",{className:I.a.title,children:"CHIRURGIA OG\xd3LNA"})})},P=a(7),N=a.n(P),g=a(34),B=a.n(g),k=a(35),w=a.n(k),C=a(20),A=a.n(C),R=a(18),F=a.n(R),z=function(e){var t=e.isOpen,a=e.onReject,n=e.onAccept;return t?i.a.createPortal(Object(u.jsxs)("div",{className:F.a.main,children:[Object(u.jsx)("h1",{children:"Czy chcesz usun\u0105\u0107 pacjenta?"}),Object(u.jsx)("h4",{className:F.a.description,children:"Usuni\u0119cie pacjenta oznacza usuni\u0119cie wszystkich zawartych w nim danych!"}),Object(u.jsxs)("div",{className:F.a.buttons,children:[Object(u.jsx)("button",{className:F.a.accept,onClick:n,children:"TAK"}),Object(u.jsx)("button",{className:F.a.reject,onClick:a,children:"ANULUJ"})]})]}),document.body):null},D=o.a.createContext({showPatientInfo:function(e){},active:null}),S=function(){document.body.style.overflow="hidden";var e=document.querySelector("#root").style;e.filter="blur(5px)",e.pointerEvents="none"},E=function(){document.body.style.overflow="initial";var e=document.querySelector("#root").style;e.filter="initial",e.pointerEvents="initial"},T=function(e){var t=Object(n.useContext)(O),a=Object(d.a)(t,2),o=(a[0],a[1]),c=Object(n.useContext)(D),i=Object(n.useState)({isOpenRemovePopup:!1}),r=Object(d.a)(i,2),s=r[0],m=r[1],l=function(t){null===c.active?o({type:"DELETE_BED",payload:{roomId:e.roomId,areaId:t}}):alert("Nie mo\u017cesz usun\u0105\u0107 \u0142\xf3\u017cka, kiedy formularz jest w\u0142\u0105czony.")},j=function(){return""!==e.name},b=function(){m({isOpenRemovePopup:!1}),E()};return Object(u.jsxs)("div",{onClick:function(){return c.showPatientInfo(e.id)},className:"".concat(N.a.patientBed," \n                ").concat(j()?N.a.fillBed:N.a.emptyBed,"\n                ").concat(c.active===e.id?N.a.active:null),children:[Object(u.jsxs)("div",{className:"".concat(A.a.headerBed," ").concat(j()?A.a.active:A.a.empty),children:[Object(u.jsxs)("span",{children:["\u0141\xd3\u017bKO ",e.id]}),Object(u.jsx)(z,{isOpen:s.isOpenRemovePopup,onAccept:function(t){t.stopPropagation(),l(e.id),b()},onReject:function(e){e.stopPropagation(),b()}}),Object(u.jsx)(B.a,{onClick:function(t){t.stopPropagation(),j()?(m({isOpenRemovePopup:!0}),S()):l(e.id)}})]}),j()?Object(u.jsxs)(u.Fragment,{children:[" ",Object(u.jsxs)("p",{className:N.a.fillBed,children:["Pacjent: ",e.name]}),Object(u.jsxs)("p",{className:N.a.fillBed,children:["Wiek: ",e.age]})," "]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:A.a.createPatientIcon,children:Object(u.jsx)(w.a,{fontSize:"inherit"})}),Object(u.jsx)("span",{children:"DODAJ PACJENTA"})]})]})},H=a(36),J=a.n(H),L=function(e){var t=Object(n.useContext)(O),a=Object(d.a)(t,2),o=(a[0],a[1]);return e.id,Object(u.jsxs)("div",{onClick:function(){return t=e.id,void o({type:"ADD_BED",payload:{roomId:e.roomId,areaId:t}});var t},className:"".concat(N.a.patientBed," ").concat(N.a.containerItem," ").concat(e.id>10?N.a.stopAddBed:N.a.addBed),children:[Object(u.jsxs)("span",{children:["DODAJ \u0141\xd3\u017bKO ",e.id]}),Object(u.jsx)("div",{className:N.a.addBedIcon,children:Object(u.jsx)(J.a,{fontSize:"inherit"})})]})},Z=a(37),q=a.n(Z),W=function(e){var t=e.area.bed;return Object(u.jsx)(u.Fragment,{children:null!==t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{name:t.name,age:t.age,id:t.id,roomId:e.roomId}),Object(u.jsx)(r.b,{to:"/Hospital-ward/room/".concat(e.roomId,"/patient/").concat(t.id),children:null!==t.name&&""!==t.name?Object(u.jsx)("button",{className:q.a.moreInformation,children:"Szczeg\xf3\u0142y"}):null})]}):Object(u.jsx)(L,{roomId:e.roomId,id:e.area.id})})},K=a(26),U=a(15),X=a.n(U),G=a(38),M=a.n(G),V=function(e){var t=Object(n.useContext)(O),a=Object(d.a)(t,2),o=(a[0],a[1]),c=Object(n.useState)(Object(l.a)({},e.patient)),r=Object(d.a)(c,2),s=r[0],m=r[1];if(!1===e.isOpenFormPopup)return null;var j=function(e){var t=e.target.name,a=e.target.value;m(Object(l.a)(Object(l.a)({},s),{},Object(K.a)({},t,a)))};return i.a.createPortal(Object(u.jsxs)("form",{className:X.a.form,onSubmit:function(t){var a;t.preventDefault(),a=s,o({type:"SAVE_INFO",payload:{roomId:e.roomId,info:a}}),e.closePatientInfo(e.patient.id)},children:[Object(u.jsx)(M.a,{fontSize:"medium",className:X.a.closeIcon,onClick:function(){return e.closePatientInfo(e.patient.id)}}),""===e.patient.name?Object(u.jsxs)("div",{className:X.a.headerBed,children:["Dodaj pacjenta - \u0142\xf3\u017cko ",e.patient.id]}):Object(u.jsxs)("div",{className:X.a.headerBed,children:["Edytuj pacjenta - \u0142\xf3\u017cko ",e.patient.id]}),Object(u.jsxs)("label",{children:["Imi\u0119 i nazwisko:",Object(u.jsx)("input",{className:X.a.inputs,required:!0,name:"name",type:"text",value:s.name,onChange:j})]}),Object(u.jsxs)("label",{children:["Wiek:",Object(u.jsx)("input",{className:X.a.inputs,name:"age",type:"number",min:"0",value:s.age,onChange:j})]}),Object(u.jsxs)("label",{children:["Diagnoza lekarska:",Object(u.jsx)("textarea",{name:"diagnosis",cols:"75",rows:"4",wrap:"hard",value:s.diagnosis,onChange:j})]}),Object(u.jsxs)("label",{children:["Uwagi:",Object(u.jsx)("textarea",{name:"comments",cols:"75",rows:"3",value:s.comments,onChange:j})]}),Object(u.jsxs)("label",{children:["Zlecenia:",Object(u.jsx)("textarea",{name:"tasks",cols:"75",rows:"10",value:s.tasks,onChange:j})]}),Object(u.jsx)("input",{className:"".concat(X.a.buttons," ").concat(X.a.submit),type:"submit",value:"ZAPISZ"})]}),document.body)},Y=function(e){var t=Object(n.useContext)(O),a=Object(d.a)(t,1)[0],o=Object(n.useState)({showPatient:null,activeBed:null,isOpenFormPopup:!1}),c=Object(d.a)(o,2),i=c[0],r=c[1],s=function(){return a.rooms.find((function(t){return t.id===Number(e.match.params.id)}))},m=s().areas.map((function(t){return Object(u.jsx)("div",{className:N.a.containerItem,children:Object(u.jsx)(W,{area:t,roomId:Number(e.match.params.id)})},t.id)}));return Object(u.jsx)(D.Provider,{value:{showPatientInfo:function(e){var t=s().areas.find((function(t){return t.id===e})).bed;i.showPatient!==t&&r({showPatient:t,activeBed:e,isOpenFormPopup:!0}),S()},active:i.activeBed},children:Object(u.jsxs)("div",{className:N.a.container,children:[m,null===i.showPatient?Object(u.jsx)(L,{id:s().areas.length+1,roomId:Number(e.match.params.id)}):Object(u.jsx)(V,{isOpenInfoPopup:i.isOpenFormPopup,patient:i.showPatient,closePatientInfo:function(e){var t=s().areas.find((function(t){return t.id===e})).bed;i.showPatient===t&&(console.log("hej"),r({showPatient:null,activeBed:null,isOpenFormPopup:!1})),E()},roomId:Number(e.match.params.id)})]})})},Q=a(31),$=a.n(Q),ee=a(21),te=a.n(ee),ae=function(e){return Object(u.jsxs)("div",{className:[te.a.room,function(){switch(e.roomType){case"isolation":return te.a.roomIsolation;case"intensive":return te.a.roomIntensive;default:return te.a.roomPrimary}}()].join(" "),children:[Object(u.jsx)("p",{children:function(){switch(e.roomType){case"isolation":return"IZOLATKA";case"intensive":return"SIOM";default:return"SALA ".concat(e.roomNumber)}}()}),Object(u.jsxs)("p",{children:["Stan pacjent\xf3w: ",e.checkAmountOfPatients]})]})},ne=function(){var e=Object(n.useContext)(O),t=Object(d.a)(e,1)[0];return Object(u.jsx)("div",{className:$.a.container,children:t.rooms.map((function(e){return Object(u.jsx)("div",{className:$.a.roomContainer,children:Object(u.jsx)(r.b,{to:"/Hospital-ward/room/".concat(e.id),children:Object(u.jsx)(ae,{roomNumber:e.id,roomType:e.type,checkAmountOfPatients:(a=e.id,t.rooms.find((function(e){return e.id===a})).areas.map((function(e){return e.bed})).filter((function(e){return null!==e&&""!==e.name})).length)})})},e.id);var a}))})},oe=function(){return Object(u.jsx)(h,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(y,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{exact:!0,path:"/Hospital-ward",component:ne}),Object(u.jsx)(s.a,{path:"/Hospital-ward/room/:id/patient/:id",component:x}),Object(u.jsx)(s.a,{path:"/Hospital-ward/room/:id",component:Y})]})]})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(oe,{})}),document.getElementById("root")),ce()},7:function(e,t,a){e.exports={patientBed:"Common_patientBed__itWrz",emptyBed:"Common_emptyBed__1cpsq",fillBed:"Common_fillBed__Et-F9",active:"Common_active__22Zfn",addBed:"Common_addBed__3HXqD",addBedIcon:"Common_addBedIcon__11qNy",stopAddBed:"Common_stopAddBed__hRqpS",container:"Common_container__1KcSg",containerItem:"Common_containerItem__1bvbr"}},8:function(e,t,a){e.exports={navigation:"Patient_navigation__3QJrp",navItem:"Patient_navItem__wupUH",back:"Patient_back__1wm8k",information:"Patient_information__33ZAp",inInfo:"Patient_inInfo__3nHBO",bedName:"Patient_bedName__3RiDx",bedNameText:"Patient_bedNameText__YTf0Y"}}},[[54,1,2]]]);
//# sourceMappingURL=main.47798aaa.chunk.js.map