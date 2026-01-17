import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{C as P,M as W}from"./index-C62uS0ej.js";import"./index-CC6F48bw.js";const U={title:"UI/CommonBtn",component:P,decorators:[E=>i.jsx(W,{children:i.jsx("div",{className:"p-8 max-w-md",children:i.jsx(E,{})})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["scribble","radius"],description:"버튼 스타일 변형"},color:{control:"select",options:["blue","indigo","red","green","gray"],description:"버튼 색상 (radius variant에서만 적용)"},icon:{control:"text",description:"Material Symbols 아이콘 이름"},text:{control:"text",description:"버튼 텍스트"},disabled:{control:"boolean",description:"비활성화 여부"},path:{control:"text",description:"클릭 시 이동할 경로"}}},r={args:{icon:"play_arrow",text:"게임 시작",variant:"scribble"}},a={args:{icon:"play_arrow",text:"게임 시작",variant:"scribble",disabled:!0}},e={args:{icon:"add",text:"방 만들기",variant:"radius",color:"blue"}},o={args:{icon:"login",text:"참여하기",variant:"radius",color:"indigo"}},s={args:{icon:"delete",text:"삭제",variant:"radius",color:"red"}},t={args:{icon:"check",text:"확인",variant:"radius",color:"green"}},n={args:{icon:"close",text:"취소",variant:"radius",color:"gray"}},c={args:{icon:"home",text:"홈으로",variant:"scribble",path:"/"}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: 'play_arrow',
    text: '게임 시작',
    variant: 'scribble'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: 'play_arrow',
    text: '게임 시작',
    variant: 'scribble',
    disabled: true
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,x,v;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: 'add',
    text: '방 만들기',
    variant: 'radius',
    color: 'blue'
  }
}`,...(v=(x=e.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var R,h,y;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    icon: 'login',
    text: '참여하기',
    variant: 'radius',
    color: 'indigo'
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,_,j;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: 'delete',
    text: '삭제',
    variant: 'radius',
    color: 'red'
  }
}`,...(j=(_=s.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var w,B,G;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: 'check',
    text: '확인',
    variant: 'radius',
    color: 'green'
  }
}`,...(G=(B=t.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var f,C,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: 'close',
    text: '취소',
    variant: 'radius',
    color: 'gray'
  }
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var M,k,D;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    text: '홈으로',
    variant: 'scribble',
    path: '/'
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const q=["Scribble","ScribbleDisabled","RadiusBlue","RadiusIndigo","RadiusRed","RadiusGreen","RadiusGray","WithPath"];export{e as RadiusBlue,n as RadiusGray,t as RadiusGreen,o as RadiusIndigo,s as RadiusRed,r as Scribble,a as ScribbleDisabled,c as WithPath,q as __namedExportsOrder,U as default};
