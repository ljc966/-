import{b as s,a as e,j as t}from"./vendor.3c5322a1.js";import{M as o}from"./src/pages/qixi/index.page.client.tsx.6ef607f5.js";const r=()=>{const[t,o]=s.exports.useState(!1);return s.exports.useEffect((()=>{o(e())}),[]),t};var n="_toast-container_1d3zl_1";const a=e=>{const{msg:r,duration:a=1500,visible:i,hideToast:c,style:m}=e,p=s.exports.useMemo((()=>t("div",{className:n,style:m,children:r})),[r,m]);return s.exports.useEffect((()=>{i&&setTimeout((()=>{c()}),a)}),[i]),t(o,{visible:i,containerStyle:{pointerEvents:"none",backgroundColor:"transparent"},hideModal:()=>{c()},children:p})};function i(){const[e,o]=s.exports.useState(!1),[r,n]=s.exports.useState(""),i=s.exports.useCallback((()=>{o(!1)}),[]);return{toastComponent:s.exports.useMemo((()=>t(a,{visible:e,msg:r,hideToast:i})),[r,e,i]),showToast:s.exports.useCallback((s=>{o(!0),n(s)}),[])}}const c=0,m=2110,p=9002,g=9003,u="Network Error",f={0:{msg:"获取图片成功！",type:"success",confirmMsg:"好的"},1001:{msg:"未检测到用户面部，请更换照片",type:"none",confirmMsg:"换张图片"},1005:{msg:"请换张图再试吧～",type:"none",confirmMsg:"换张图片"},1004:{msg:"识别到多人，请选择其中一位",type:"toomany",confirmMsg:"好的"},1003:{msg:"未检测到用户人体，请更换照片",type:"none",confirmMsg:"换张图片"},2114:{msg:"未检测到用户面部，请更换照片",type:"danger",confirmMsg:"换张图片"},[-2110]:{msg:"图片处理失败, 请稍后再试吧~",type:"error",confirmMsg:"好的"},2111:{msg:"活动太火爆啦, 请稍后再试吧~",type:"error",confirmMsg:"好的"}};export{f as E,g as F,u as N,c as S,p as a,m as b,i as c,r as u};
