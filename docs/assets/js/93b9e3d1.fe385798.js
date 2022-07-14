"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={},a="Influencing Kubernetes scheduling",l={unversionedId:"scheduling",id:"scheduling",title:"Influencing Kubernetes scheduling",description:"This is meant as a short introduction to the various options that influence scheduling when using the Piraeus chart.",source:"@site/docs/07.scheduling.md",sourceDirName:".",slug:"/scheduling",permalink:"/docs/scheduling",draft:!1,editUrl:"https://github.com/piraeusdatastore/docs/07.scheduling.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Optional components",permalink:"/docs/optional-components"}},s={},p=[{value:"High Availability by distributing pods",id:"high-availability-by-distributing-pods",level:2},{value:"Place pods on master nodes",id:"place-pods-on-master-nodes",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"influencing-kubernetes-scheduling"},"Influencing Kubernetes scheduling"),(0,o.kt)("p",null,"This is meant as a short introduction to the various options that influence scheduling when using the Piraeus chart.\nTo influence pod placement, we use the Kubernetes concepts of ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"tolerations")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity"},"affinity"),"."),(0,o.kt)("h2",{id:"high-availability-by-distributing-pods"},"High Availability by distributing pods"),(0,o.kt)("p",null,"If you are running multiple replicas to achieve High Availability, you want pods to be distributed across as many\nnodes as possible. This ensures that failure of a single node does not interrupt a critical set of pods."),(0,o.kt)("p",null,"The way to achieve scheduling on different nodes is by using ",(0,o.kt)("inlineCode",{parentName:"p"},"podAntiAffinity"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'affinity:\n  podAntiAffinity:\n    requiredDuringSchedulingIgnoredDuringExecution:\n      - labelSelector:\n          matchLabels:\n            app: etcd\n        topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"This affinity setting ensures that only one pod with label ",(0,o.kt)("inlineCode",{parentName:"p"},"app: etcd")," will be scheduled per node."),(0,o.kt)("p",null,"Piraeus will use such ",(0,o.kt)("inlineCode",{parentName:"p"},"affinity")," settings by default for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"etcd")," change by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.etcd")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operator")," change by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.affinity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Piraeus controller")," change by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.controller.affinity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CSI controller")," change by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.controllerAffinity"))),(0,o.kt)("h2",{id:"place-pods-on-master-nodes"},"Place pods on master nodes"),(0,o.kt)("p",null,"To allow pods to be placed on master nodes, you need add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"tolerations"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n- key: node-role.kubernetes.io/control-plane # New value since Kubernetes 1.24\n  operator: Exists\n  effect: NoSchedule\n- key: node-role.kubernetes.io/master\n  operator: Exists\n  effect: NoSchedule\n")),(0,o.kt)("p",null,"This toleration allows pods to be scheduled on master nodes."),(0,o.kt)("p",null,"Note that using tolerations this way only ",(0,o.kt)("em",{parentName:"p"},"allows")," scheduling on master nodes, but does not force it. The pod can still\nend up on a worker node. To force scheduling on master nodes, use affinity settings to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeAffinity"),"."),(0,o.kt)("p",null,"By default, piraeus will set this toleration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," pods. Tolerations can be set on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"etcd")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"etcd.tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operator")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Piraeus controller")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.controller.tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Piraeus satellites")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"operator.satelliteSet.tolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CSI controller")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.controllerTolerations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CSI nodes")," by setting ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.nodeTolerations"))))}u.isMDXComponent=!0}}]);