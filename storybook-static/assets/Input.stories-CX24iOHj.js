import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CC6F48bw.js";import{I as W}from"./index-B_F3uuPQ.js";const E={title:"UI/Input",component:W,decorators:[r=>e.jsx("div",{className:"p-8 max-w-md",children:e.jsx(r,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"text",description:"입력값"},placeholder:{control:"text",description:"플레이스홀더 텍스트"},maxLength:{control:"number",description:"최대 입력 길이"},autoFocus:{control:"boolean",description:"자동 포커스 여부"}}},n=r=>{const[c,f]=v.useState("");return e.jsx(W,{value:c,onChange:f,placeholder:r.placeholder,maxLength:r.maxLength,autoFocus:r.autoFocus,onEnter:()=>alert(`입력값: ${c}`)})},a={render:()=>e.jsx(n,{placeholder:"닉네임을 입력하세요"})},o={args:{autoFocus:!0},render:()=>e.jsx(n,{placeholder:"최대 10자",maxLength:10})},t={render:()=>e.jsx(n,{placeholder:"방 코드를 입력하세요",maxLength:6})},s={args:{value:"플레이어1",onChange:()=>{},placeholder:"닉네임"}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <InputWrapper placeholder="닉네임을 입력하세요" />
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: () => <InputWrapper placeholder="최대 10자" maxLength={10} />
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var i,x,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <InputWrapper placeholder="방 코드를 입력하세요" maxLength={6} />
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var L,j,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: '플레이어1',
    onChange: () => {},
    placeholder: '닉네임'
  }
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const R=["Default","WithMaxLength","RoomCode","WithValue"];export{a as Default,t as RoomCode,o as WithMaxLength,s as WithValue,R as __namedExportsOrder,E as default};
