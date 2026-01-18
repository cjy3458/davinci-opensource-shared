import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-CC6F48bw.js";import{B as b,M as T,I as c}from"./index-B_F3uuPQ.js";const S={title:"UI/BaseModal",component:b,decorators:[s=>e.jsx(T,{children:e.jsx("div",{style:{minHeight:"500px",position:"relative"},children:e.jsx(s,{})})})],parameters:{layout:"fullscreen",docs:{story:{inline:!0,iframeHeight:500}}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"모달 열림 여부"},title:{control:"text",description:"모달 제목"},confirmText:{control:"text",description:"확인 버튼 텍스트"},confirmDisabled:{control:"boolean",description:"확인 버튼 비활성화 여부"}}},r={args:{isOpen:!0,title:"알림",confirmText:"확인",onClose:()=>{},onConfirm:()=>alert("확인 클릭!"),children:e.jsx("p",{className:"text-center text-gray-600",children:"모달 내용입니다."})}},t={args:{isOpen:!0,title:"닉네임 입력",confirmText:"입장하기",onClose:()=>{},onConfirm:()=>{},children:e.jsx(c,{value:"",onChange:()=>{},placeholder:"닉네임을 입력하세요",maxLength:10})}},o={args:{isOpen:!0,title:"닉네임 입력",confirmText:"입장하기",confirmDisabled:!0,onClose:()=>{},onConfirm:()=>{},children:e.jsx(c,{value:"",onChange:()=>{},placeholder:"닉네임을 입력하세요",maxLength:10})}},y=()=>{const[s,a]=l.useState(!0),[i,O]=l.useState("");return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(!0),className:"m-4 px-4 py-2 bg-blue-500 text-white rounded",children:"모달 열기"}),e.jsx(b,{isOpen:s,onClose:()=>a(!1),title:"닉네임 입력",confirmText:"입장하기",confirmDisabled:!i.trim(),onConfirm:()=>{alert(`닉네임: ${i}`),a(!1)},children:e.jsx(c,{value:i,onChange:O,placeholder:"닉네임을 입력하세요",maxLength:10})})]})},n={render:()=>e.jsx(y,{})};var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '알림',
    confirmText: '확인',
    onClose: () => {},
    onConfirm: () => alert('확인 클릭!'),
    children: <p className="text-center text-gray-600">모달 내용입니다.</p>
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    onClose: () => {},
    onConfirm: () => {},
    children: <Input value="" onChange={() => {}} placeholder="닉네임을 입력하세요" maxLength={10} />
  }
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,g,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    title: '닉네임 입력',
    confirmText: '입장하기',
    confirmDisabled: true,
    onClose: () => {},
    onConfirm: () => {},
    children: <Input value="" onChange={() => {}} placeholder="닉네임을 입력하세요" maxLength={10} />
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var j,v,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <InteractiveModal />
}`,...(I=(v=n.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const k=["Default","NicknameInput","ConfirmDisabled","Interactive"];export{o as ConfirmDisabled,r as Default,n as Interactive,t as NicknameInput,k as __namedExportsOrder,S as default};
