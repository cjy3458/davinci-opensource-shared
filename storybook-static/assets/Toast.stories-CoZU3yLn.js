import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-CC6F48bw.js";import{d as T}from"./index-B_F3uuPQ.js";const N={title:"UI/Toast",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{message:{control:"text",description:"토스트 메시지"},type:{control:"select",options:["success","error","info"],description:"토스트 타입"},duration:{control:"number",description:"표시 시간 (ms)"}}},s={args:{message:"성공적으로 저장되었습니다.",type:"success",onClose:()=>{}}},r={args:{message:"오류가 발생했습니다.",type:"error",onClose:()=>{}}},o={args:{message:"새로운 알림이 있습니다.",type:"info",onClose:()=>{}}},v=()=>{const[a,c]=j.useState(null),n=p=>{c({message:{success:"성공적으로 완료되었습니다!",error:"오류가 발생했습니다.",info:"새로운 정보가 있습니다."}[p],type:p})};return e.jsxs("div",{className:"p-8 flex gap-4",children:[e.jsx("button",{onClick:()=>n("success"),className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600",children:"Success Toast"}),e.jsx("button",{onClick:()=>n("error"),className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"Error Toast"}),e.jsx("button",{onClick:()=>n("info"),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"Info Toast"}),a&&e.jsx(T,{message:a.message,type:a.type,onClose:()=>c(null),duration:3e3})]})},t={render:()=>e.jsx(v,{})};var m,i,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    message: '성공적으로 저장되었습니다.',
    type: 'success',
    onClose: () => {}
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,d,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    message: '오류가 발생했습니다.',
    type: 'error',
    onClose: () => {}
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var x,f,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    message: '새로운 알림이 있습니다.',
    type: 'info',
    onClose: () => {}
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <InteractiveToast />
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const k=["Success","Error","Info","Interactive"];export{r as Error,o as Info,t as Interactive,s as Success,k as __namedExportsOrder,N as default};
