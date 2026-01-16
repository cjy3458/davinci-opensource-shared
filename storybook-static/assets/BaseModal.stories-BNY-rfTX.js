import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-CC6F48bw.js";import{C as O,M as w}from"./CommonBtn-HvQb6nmC.js";import{I as l}from"./Input-DGzx8VGI.js";const d=({isOpen:r,title:t,children:n,onConfirm:c,confirmText:I="확인",confirmDisabled:N=!1})=>r?e.jsx("div",{className:"bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-white",children:e.jsxs("div",{className:"w-full max-w-md rounded-2xl border-2 border-gray-400 bg-white p-8 shadow-xl",children:[e.jsx("h2",{className:"font-handwriting mb-6 text-center text-3xl font-bold",children:t}),n,e.jsx("div",{className:"mt-6",children:e.jsx(O,{variant:"scribble",icon:"check_circle",text:I,onClick:N?void 0:c})})]})}):null;d.__docgenInfo={description:"",methods:[],displayName:"BaseModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},confirmText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'확인'",computed:!1}},confirmDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S={title:"UI/BaseModal",component:d,decorators:[r=>e.jsx(w,{children:e.jsx("div",{style:{minHeight:"500px",position:"relative"},children:e.jsx(r,{})})})],parameters:{layout:"fullscreen",docs:{story:{inline:!0,iframeHeight:500}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"모달 열림 여부"},title:{control:"text",description:"모달 제목"},confirmText:{control:"text",description:"확인 버튼 텍스트"},confirmDisabled:{control:"boolean",description:"확인 버튼 비활성화 여부"}}},o={args:{isOpen:!0,title:"알림",confirmText:"확인",onClose:()=>{},onConfirm:()=>alert("확인 클릭!"),children:e.jsx("p",{className:"text-center text-gray-600",children:"모달 내용입니다."})}},s={args:{isOpen:!0,title:"닉네임 입력",confirmText:"입장하기",onClose:()=>{},onConfirm:()=>{},children:e.jsx(l,{value:"",onChange:()=>{},placeholder:"닉네임을 입력하세요",maxLength:10})}},a={args:{isOpen:!0,title:"닉네임 입력",confirmText:"입장하기",confirmDisabled:!0,onClose:()=>{},onConfirm:()=>{},children:e.jsx(l,{value:"",onChange:()=>{},placeholder:"닉네임을 입력하세요",maxLength:10})}},D=()=>{const[r,t]=m.useState(!0),[n,c]=m.useState("");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!0),className:"m-4 px-4 py-2 bg-blue-500 text-white rounded",children:"모달 열기"}),e.jsx(d,{isOpen:r,onClose:()=>t(!1),title:"닉네임 입력",confirmText:"입장하기",confirmDisabled:!n.trim(),onConfirm:()=>{alert(`닉네임: ${n}`),t(!1)},children:e.jsx(l,{value:n,onChange:c,placeholder:"닉네임을 입력하세요",maxLength:10})})]})},i={render:()=>e.jsx(D,{})};var u,p,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '알림',
    confirmText: '확인',
    onClose: () => {},
    onConfirm: () => alert('확인 클릭!'),
    children: <p className="text-center text-gray-600">모달 내용입니다.</p>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    onClose: () => {},
    onConfirm: () => {},
    children: <Input value="" onChange={() => {}} placeholder="닉네임을 입력하세요" maxLength={10} />
  }
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,b,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    confirmDisabled: true,
    onClose: () => {},
    onConfirm: () => {},
    children: <Input value="" onChange={() => {}} placeholder="닉네임을 입력하세요" maxLength={10} />
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,j,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <InteractiveModal />
}`,...(T=(j=i.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const L=["Default","NicknameInput","ConfirmDisabled","Interactive"];export{a as ConfirmDisabled,o as Default,i as Interactive,s as NicknameInput,L as __namedExportsOrder,S as default};
