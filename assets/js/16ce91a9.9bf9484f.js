"use strict";(self.webpackChunkfrontik_website=self.webpackChunkfrontik_website||[]).push([[682],{2039:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>B,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var a=n(7462),o=n(7294),r=n(3905),i=n(9747);const d="DemoBlock_PASw";function l(t){const{children:e}=t;return o.createElement("div",{className:d},e)}var c=n(5488),u=n(5162);const m={sidebar_position:2},s=void 0,p={unversionedId:"React/Components/Button",id:"React/Components/Button",title:"Button",description:"Button is a UI component in React that provides an `` functional with extra power.",source:"@site/docs/React/Components/Button.mdx",sourceDirName:"React/Components",slug:"/React/Components/Button",permalink:"/docs/React/Components/Button",draft:!1,editUrl:"https://github.com/fluxtech-me/frontik/edit/master/website/docs/React/Components/Button.mdx",tags:[],version:"current",lastUpdatedBy:"Ruben Arushanyan",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useDevice",permalink:"/docs/React/Hooks/useDevice"}},k={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic Button",id:"basic-button",level:3},{value:"Disabled Button",id:"disabled-button",level:3},{value:"Loading Button",id:"loading-button",level:3},{value:"Loading State",id:"loading-state",level:4},{value:"Loading Indicator",id:"loading-indicator",level:4},{value:"Loading Position",id:"loading-position",level:4},{value:"Button colors",id:"button-colors",level:3},{value:"Button sizes",id:"button-sizes",level:3},{value:"API",id:"api",level:2},{value:"Customization With CSS / SCSS",id:"customization-with-css--scss",level:2}],N={toc:g};function B(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Button")," is a UI component in React that provides an ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," functional with extra power."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {Button} from 'frontik/react/Button'\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"basic-button"},"Basic Button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button>Text</Button>\n<Button variant="contained">Contained</Button>\n<Button variant="outlined">Outlined</Button>\n')),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{mdxType:"Button"},"Text"),(0,r.kt)(i.z,{variant:"contained",mdxType:"Button"},"Contained"),(0,r.kt)(i.z,{variant:"outlined",mdxType:"Button"},"Outlined")),(0,r.kt)("h3",{id:"disabled-button"},"Disabled Button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button disabled >Text</Button>\n<Button disabled variant="contained">Contained</Button>\n<Button disabled variant="outlined">Outlined</Button>\n')),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{disabled:!0,mdxType:"Button"},"Text"),(0,r.kt)(i.z,{disabled:!0,variant:"contained",mdxType:"Button"},"Contained"),(0,r.kt)(i.z,{disabled:!0,variant:"outlined",mdxType:"Button"},"Outlined")),(0,r.kt)("h3",{id:"loading-button"},"Loading Button"),(0,r.kt)("h4",{id:"loading-state"},"Loading State"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button loading >Text</Button>\n<Button loading variant="contained">Contained</Button>\n<Button loading variant="outlined">Outlined</Button>\n')),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{loading:!0,mdxType:"Button"},"Text"),(0,r.kt)(i.z,{loading:!0,variant:"contained",mdxType:"Button"},"Contained"),(0,r.kt)(i.z,{loading:!0,variant:"outlined",mdxType:"Button"},"Outlined")),(0,r.kt)("h4",{id:"loading-indicator"},"Loading Indicator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Button loading loadingIndicator="Loading...">Click me!</Button>\n<Button loading loadingIndicator={<div>\u23f3</div>}>Click me!</Button>\n')),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{loading:!0,loadingIndicator:"Loading...",mdxType:"Button"},"Click me!"),(0,r.kt)(i.z,{loading:!0,loadingIndicator:(0,r.kt)("div",null,"\u23f3"),mdxType:"Button"},"Click me!")),(0,r.kt)("h4",{id:"loading-position"},"Loading Position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button loading loadingPosition='start' startIcon='start' variant='contained'>Click me!</Button>\n<Button loading loadingPosition='end' endIcon='end' variant='contained'>Click me!</Button>\n<Button loading loadingPosition='center' variant='contained'>Click me!</Button>\n")),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{loading:!0,loadingPosition:"start",startIcon:"start",variant:"contained",mdxType:"Button"},"Click me!"),(0,r.kt)(i.z,{loading:!0,loadingPosition:"end",endIcon:"end",variant:"contained",mdxType:"Button"},"Click me!"),(0,r.kt)(i.z,{loading:!0,loadingPosition:"center",variant:"contained",mdxType:"Button"},"Click me!")),(0,r.kt)("h3",{id:"button-colors"},"Button colors"),(0,r.kt)(c.Z,{groupId:"colors",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"text",label:"Text",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"    <Button color='primary'>Primary</Button>\n    <Button color='secondary'>Secondary</Button>\n    <Button color='success'>Success</Button>\n    <Button color='error'>Error</Button>\n    <Button color='info'>Info</Button>\n    <Button color='warning'>Warning</Button>\n"))),(0,r.kt)(u.Z,{value:"contained",label:"Contained",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"    <Button variant='contained' color='primary'>Primary</Button>\n    <Button variant='contained' color='secondary'>Secondary</Button>\n    <Button variant='contained' color='success'>Success</Button>\n    <Button variant='contained' color='error'>Error</Button>\n    <Button variant='contained' color='info'>Info</Button>\n    <Button variant='contained' color='warning'>Warning</Button>\n"))),(0,r.kt)(u.Z,{value:"outlined",label:"Outlined",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"    <Button variant='outlined' color='primary'>Primary</Button>\n    <Button variant='outlined' color='secondary'>Secondary</Button>\n    <Button variant='outlined' color='success'>Success</Button>\n    <Button variant='outlined' color='error'>Error</Button>\n    <Button variant='outlined' color='info'>Info</Button>\n    <Button variant='outlined' color='warning'>Warning</Button>\n")))),(0,r.kt)(c.Z,{groupId:"colors",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"text",label:"Text",default:!0,mdxType:"TabItem"},(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{color:"primary",mdxType:"Button"},"Primary"),(0,r.kt)(i.z,{color:"secondary",mdxType:"Button"},"Secondary"),(0,r.kt)(i.z,{color:"success",mdxType:"Button"},"Success"),(0,r.kt)(i.z,{color:"error",mdxType:"Button"},"Error"),(0,r.kt)(i.z,{color:"info",mdxType:"Button"},"Info"),(0,r.kt)(i.z,{color:"warning",mdxType:"Button"},"Warning"))),(0,r.kt)(u.Z,{value:"contained",label:"Contained",default:!0,mdxType:"TabItem"},(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{variant:"contained",color:"primary",mdxType:"Button"},"Primary"),(0,r.kt)(i.z,{variant:"contained",color:"secondary",mdxType:"Button"},"Secondary"),(0,r.kt)(i.z,{variant:"contained",color:"success",mdxType:"Button"},"Success"),(0,r.kt)(i.z,{variant:"contained",color:"error",mdxType:"Button"},"Error"),(0,r.kt)(i.z,{variant:"contained",color:"info",mdxType:"Button"},"Info"),(0,r.kt)(i.z,{variant:"contained",color:"warning",mdxType:"Button"},"Warning"))),(0,r.kt)(u.Z,{value:"outlined",label:"Outlined",default:!0,mdxType:"TabItem"},(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{variant:"outlined",color:"primary",mdxType:"Button"},"Primary"),(0,r.kt)(i.z,{variant:"outlined",color:"secondary",mdxType:"Button"},"Secondary"),(0,r.kt)(i.z,{variant:"outlined",color:"success",mdxType:"Button"},"Success"),(0,r.kt)(i.z,{variant:"outlined",color:"error",mdxType:"Button"},"Error"),(0,r.kt)(i.z,{variant:"outlined",color:"info",mdxType:"Button"},"Info"),(0,r.kt)(i.z,{variant:"outlined",color:"warning",mdxType:"Button"},"Warning")))),(0,r.kt)("h3",{id:"button-sizes"},"Button sizes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button variant='outlined' size='small'>Primary</Button>\n<Button variant='outlined' size='medium'>Secondary</Button>\n<Button variant='outlined' size='large'>Success</Button>\n")),(0,r.kt)(l,{mdxType:"DemoBlock"},(0,r.kt)(i.z,{variant:"outlined",size:"small",mdxType:"Button"},"Small"),(0,r.kt)(i.z,{variant:"outlined",size:"medium",mdxType:"Button"},"Medium"),(0,r.kt)(i.z,{variant:"outlined",size:"large",mdxType:"Button"},"Large")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Values"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true/false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Makes button state disabled/enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"loading")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true/false")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Change button loading state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"small"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"medium"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"large"')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"medium"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"The more common sizes of the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"error"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"info"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"warning"')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"primary"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"The color of the button. It supports both default and custom theme colors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"className")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Override or extend the styles applied to the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"children")),(0,r.kt)("td",{parentName:"tr",align:"center"},"node"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The content of the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"loadingIndicator")),(0,r.kt)("td",{parentName:"tr",align:"center"},"node"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"<CircularProgress>")),(0,r.kt)("td",{parentName:"tr",align:"center"},'Element placed before the children if the button is in loading state. The node should contain an element with role="progressbar" with an accessible name.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"loadingPosition")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"start"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"end"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"center"')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"center"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"The loading indicator can be positioned in the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"endIcon")),(0,r.kt)("td",{parentName:"tr",align:"center"},"node"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Element placed after children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"startIcon")),(0,r.kt)("td",{parentName:"tr",align:"center"},"node"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Element placed before children")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"outlined"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"text"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"contained"')),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'"text"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"Three common variants for button, any of which you can customize with overriding classnames")))),(0,r.kt)("h2",{id:"customization-with-css--scss"},"Customization With CSS / SCSS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ClassName",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can override the style of the button using your own classname with selecting and overriding ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterialUi v5")," default classnames. More about of default classnames you can know folow this link ",(0,r.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/api/button/#css"},"https://mui.com/material-ui/api/button/#css"),"."),(0,r.kt)("li",{parentName:"ul"},"Also you can use other variants of styles customization provided by ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterialUi v5"),". More about styles customization systems in ",(0,r.kt)("inlineCode",{parentName:"li"},"MaterialUi v5")," you can know folow this link ",(0,r.kt)("a",{parentName:"li",href:"https://mui.com/material-ui/customization/how-to-customize/"},"https://mui.com/material-ui/customization/how-to-customize/"))))))}B.isMDXComponent=!0}}]);