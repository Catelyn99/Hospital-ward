(this["webpackJsonphospital-ward"]=this["webpackJsonphospital-ward"]||[]).push([[0],[,,,,function(e,n,t){e.exports={room:"RoomInWard_room__3BRqr",roomPrimary:"RoomInWard_roomPrimary__1l-5g",roomIntensive:"RoomInWard_roomIntensive__1cCxK",roomIsolation:"RoomInWard_roomIsolation__37Wu4",amountPatient:"RoomInWard_amountPatient__2cxbP"}},function(e,n,t){e.exports={form:"Patient_form__2jBF1",submit:"Patient_submit__1VtbT",headerBed:"Patient_headerBed__2EWWD"}},function(e,n,t){e.exports={patientBed:"PatientInRoom_patientBed__3PfS7",bedWords:"PatientInRoom_bedWords__3CGlj",inputAge:"PatientInRoom_inputAge__dbzij"}},,,,function(e,n,t){e.exports={container:"App_container__kjRhy"}},function(e,n,t){},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var o=t(1),a=t.n(o),s=t(9),r=t.n(s),i=(t(16),t(3)),c=t(10),m=t.n(c),u=t(2),l=t(4),d=t.n(l),j=t(0),p=function(e){return Object(j.jsxs)("div",{className:[d.a.room,function(){switch(e.roomType){case"isolation":return d.a.roomIsolation;case"intensive":return d.a.roomIntensive;default:return d.a.roomPrimary}}()].join(" "),children:["normal"===e.roomType?Object(j.jsx)("p",{children:"SALA "}):null,Object(j.jsx)("p",{children:e.roomNumber}),Object(j.jsxs)("p",{className:d.a.amountPatient,children:["Stan pacjent\xf3w: ",e.checkAmountOfPatients]})]})},b=t(7),h=a.a.createContext({showPatientInfo:function(e){},saveInfo:function(e){}}),O=t(5),f=t.n(O),x=function(e){var n=Object(o.useContext)(h),t=Object(o.useState)(Object(u.a)({},e.patient)),a=Object(i.a)(t,2),s=a[0],r=a[1],c=function(e){var n=e.target.name,t=e.target.value;r(Object(u.a)(Object(u.a)({},s),{},Object(b.a)({},n,t)))};return Object(j.jsxs)("form",{className:f.a.form,onSubmit:function(e){e.preventDefault(),n.saveInfo(s)},children:[null===e.patient.name?Object(j.jsx)("div",{className:f.a.headerBed,children:"Stw\xf3rz pacjenta"}):Object(j.jsx)("div",{className:f.a.headerBed,children:"Edytuj pacjenta"}),Object(j.jsxs)("label",{children:["Imi\u0119 i nazwisko:",Object(j.jsx)("input",{name:"name",type:"text",value:s.name,onChange:c})]}),Object(j.jsxs)("label",{children:["Wiek:",Object(j.jsx)("input",{name:"age",type:"number",value:s.age,onChange:c})]}),Object(j.jsxs)("label",{children:["Diagnoza lekarska:",Object(j.jsx)("input",{name:"diagnosis",type:"textarea",value:s.diagnosis,onChange:c})]}),Object(j.jsxs)("label",{children:["Uwagi:",Object(j.jsx)("input",{name:"comments",type:"textarea",value:s.comments,onChange:c})]}),Object(j.jsxs)("label",{children:["Zlecenia:",Object(j.jsx)("input",{name:"tasks",type:"textarea",value:s.tasks,onChange:c})]}),Object(j.jsx)("input",{className:f.a.submit,type:"submit",value:"ZAPISZ"})]})},v=t(6),_=t.n(v),P=function(e){var n=Object(o.useContext)(h);return Object(j.jsx)("div",{className:_.a.patientBed,onClick:function(){return n.showPatientInfo(e.id)},children:null!==e.name?Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsxs)("p",{className:_.a.bedWords,children:["Pacjent: ",e.name]}),Object(j.jsxs)("p",{className:_.a.bedWords,children:["Wiek: ",e.age]})," "]}):Object(j.jsx)("p",{className:_.a.bedWords,children:"Puste \u0142\xf3\u017cko"})})},g=function(e){var n=e.persons.map((function(n){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{name:n.name,age:n.age,id:n.id}),null!==e.showPersons&&e.showPersons.id===n.id?Object(j.jsx)(x,{patient:n}):null]})}));return Object(j.jsx)(j.Fragment,{children:n})},I=function(e){var n=Object(o.useState)({persons:function(){for(var n=[],t=1;t<=e.room.amount;t++)n.push({name:null,age:null,diagnosis:null,comments:null,tasks:null,id:t});return n}(),showPersons:null}),t=Object(i.a)(n,2),a=t[0],s=t[1];return Object(j.jsx)(h.Provider,{value:{showPatientInfo:function(e){var n=a.persons.find((function(n){return n.id===e}));a.showPersons!==n?s({showPersons:n,persons:a.persons}):s({showPersons:null,persons:a.persons})},saveInfo:function(e){var n=a.persons.map((function(n){return n.id===e.id?e:n}));s(Object(u.a)(Object(u.a)({},a),{},{persons:n}))}},children:null===e.openedRoom?Object(j.jsx)("div",{onClick:e.showRoom,children:Object(j.jsx)(p,{roomNumber:e.room.id,roomType:e.room.type,checkAmountOfPatients:a.persons.filter((function(e){return null!==e.name})).length})}):e.openedRoom===e.room?Object(j.jsx)(g,{persons:a.persons,showPersons:a.showPersons}):null})},y=t(11),w=t.n(y),R=function(){return Object(j.jsx)("h1",{onClick:function(){return window.location.reload(!0)},className:w.a.h1,children:"CHIRURGIA OG\xd3LNA"})},k=function(){var e=Object(o.useState)({rooms:[{id:1,type:"normal",amount:3},{id:2,type:"normal",amount:3},{id:3,type:"normal",amount:3},{id:4,type:"normal",amount:3},{id:5,type:"normal",amount:3},{id:6,type:"normal",amount:3},{id:7,type:"normal",amount:3},{id:"IZOLATKA",type:"isolation",amount:1},{id:"SIOM",type:"intensive",amount:2}],openedRoom:null}),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{}),Object(j.jsx)("div",{className:m.a.container,children:t.rooms.map((function(e){return Object(j.jsx)(I,{showRoom:function(){return n=e.id,void a({openedRoom:t.rooms.find((function(e){return e.id===n})),rooms:t.rooms});var n},openedRoom:t.openedRoom,room:e},e.id)}))})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),o(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),C()}],[[18,1,2]]]);
//# sourceMappingURL=main.4982c575.chunk.js.map