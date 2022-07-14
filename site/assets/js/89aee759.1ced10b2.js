"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={slug:1,authors:"piraeus"},i="Federated AI and Piraeus Storage",l={permalink:"/site/blog/1",editUrl:"https://github.com/piraeusdatastore/blog/2022-7-12_Federated-AI.md",source:"@site/blog/2022-7-12_Federated-AI.md",title:"Federated AI and Piraeus Storage",description:"Overview",date:"2022-07-12T00:00:00.000Z",formattedDate:"July 12, 2022",tags:[],readingTime:6.4,hasTruncateMarker:!1,authors:[{name:"Piraeus Team",title:"Developers",url:"https://github.com/piraeusdatastore",imageURL:"https://avatars.githubusercontent.com/u/52698954?s=200&v=4",key:"piraeus"}],frontMatter:{slug:"1",authors:"piraeus"}},s={authorsImageUrls:[void 0]},d=[{value:"Overview",id:"overview",level:2},{value:"Piraeus Storage System in Cloud-Native Big Data Platform",id:"piraeus-storage-system-in-cloud-native-big-data-platform",level:2},{value:"High-Performance Replicas",id:"high-performance-replicas",level:3},{value:"Efficient Pool Management",id:"efficient-pool-management",level:3},{value:"Fast Failover",id:"fast-failover",level:3},{value:"Cloud-Native Federated AI",id:"cloud-native-federated-ai",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Performance Test",id:"performance-test",level:2},{value:"Challenges in cloud-native big data platforms",id:"challenges-in-cloud-native-big-data-platforms",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"As data workload continues to move up to the cloud, adopting cloud-native technology has become one of the biggest trends in the big data ecosystem. In the meantime, SPDB's ",(0,r.kt)("em",{parentName:"p"},"14th Five-Year Plan for Digital Technology")," also emphasizes cloud-native as a critical technology. Therefore, SPDB strives to innovate a cloud-native framework and apply it in their big data productions."),(0,r.kt)("p",null,"A traditional big data platform is an infrastructure that holds a huge amount of data and streamingly computes them. A typical big data platform includes components such as Hadoop, Spark, Flume, Flink, Kafka, etc. The containerization and orchestration of those components give birth to ",(0,r.kt)("strong",{parentName:"p"},"Cloud-Native Big Data Platforms"),"."),(0,r.kt)("p",null,"After studying mainstream big data platforms, such as Cloudera CDP, and fully understanding the advantages and challenges of adopting cloud-native workflows, SPDB recognized that storage technology is the key to achieving success in building a cloud-native big data platform. Therefore, they introduced ",(0,r.kt)("strong",{parentName:"p"},"Piraeus cloud-native storage")," into their stack and tested its functionalities in various big data scenarios."),(0,r.kt)("h2",{id:"piraeus-storage-system-in-cloud-native-big-data-platform"},"Piraeus Storage System in Cloud-Native Big Data Platform"),(0,r.kt)("p",null,"Containerized big data services have a lot of stateful applications that require attaching and mounting Kubernetes persistent volumes (a.k.a PVs). Piraeus fulfills different PV specs by providing enterprise features such as high-performance replicas, efficient pool management and fast failover."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Big Data",src:a(3698).Z,width:"2156",height:"1032"})),(0,r.kt)("h3",{id:"high-performance-replicas"},"High-Performance Replicas"),(0,r.kt)("p",null,"MySQL database, Hadoop name node, and FedAI node-managers all have data that requires both high availability and high performance. Piraeus provides volumes with dual or triple replicas, by which data are synchronized between different nodes to avoid any single point of failure (SPOF)."),(0,r.kt)("h3",{id:"efficient-pool-management"},"Efficient Pool Management"),(0,r.kt)("p",null,"Contemporary enterprise servers are typically equipped with physical hard drives, faster SATA SSD drives and even faster NVMe SSD drives. Piraeus provisions volumes with various performance specs by grouping different storage media in separated storage pools. For example, in the below chart, MySQL uses PV from NVMe SSD pool (marked by red); Hadoop name node uses PV from SATA SSD pool (marked by blue); Federated AI node0manager uses PV from physical hard drive pool (marked by green)."),(0,r.kt)("h3",{id:"fast-failover"},"Fast Failover"),(0,r.kt)("p",null,"When a Kubernetes node has hardware failures, Kubernetes will reschedule the pods on it to another healthy node. Piraeus operates a smart failover controller which intervenes the rescheduling pipeline to make sure that the pod land on a node with the replicated data. By default, it takes at least 12 minutes for Kubernetes to reschedule a stateful pod. The failover controller may shorten that time to 1 minute or even 30 seconds."),(0,r.kt)("h2",{id:"cloud-native-federated-ai"},"Cloud-Native Federated AI"),(0,r.kt)("p",null,"As one of the first major banks that employ Federated AI, SPDB has developed a secure, highly-available, and high-performance cloud-native federated AI platform from the open-source framework FATE. The new platform enables rapid integration and application of federated learning technology into a wide range of banking businesses, provides full-lifecycle solutions for marketing, risk control, customer management, and operational decision-making, breaks down barriers to data cooperation, and facilitates business scenarios with partners in various fields. The innovation helps SPDB expands its business scale."),(0,r.kt)("p",null,"To ensure the entire federated learning platform can provide high-performance secure computing in a cloud-native environment, the node-manager has the following data requirements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mount POSIX file system for data access"),(0,r.kt)("li",{parentName:"ol"},"Access the data anywhere in the cluster"),(0,r.kt)("li",{parentName:"ol"},"No single point of failure (SPOF)"),(0,r.kt)("li",{parentName:"ol"},"High throughput and low latency")),(0,r.kt)("p",null,"SPDB's engineers first used the NFS service from an external enterprise-grade NAS storage to mount the data to the container of the computing storage engine, in the form of Kubernetes persistent volume (PV). Although this can meet the first three requirements, the performance was very bad. After that, they used the local path for mounting, which solved the performance problem but created a single point of failure. Besides, the mounted local path prevents the container from migrating to any new node."),(0,r.kt)("p",null,"After much research and experiments, SPDB's engineers adopted Piraeus cloud native storage to meet the above four requirements. Piraeus data volumes are block devices, mounted natively using ext4 or xfs file systems. Piraeus Kubernetes-CSI driver and DRBD Transport remote mount technology enable containers to access data volumes from any node in the cluster. Piraeus multi-replica volumes use DRBD synchronous replication technology to ensure high availability while providing high throughput and low latency that are comparable to local disks."),(0,r.kt)("p",null,"After successfully using Piraeus to support node-managers, they also configured their MySQL containers to mount a Piraeus replica volumes, which also achieved very satisfying results."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"The PVs for Eggroll NodeManager and MySQL are provided by Piraeus."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fate Flow",src:a(2919).Z,width:"1528",height:"1104"})),(0,r.kt)("p",null,"Configuration Details: Set ",(0,r.kt)("inlineCode",{parentName:"p"},"storageClass: piraeus-2-replica")," in NodeManager ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# https://github.com/FederatedAI/KubeFATE/blob/master/helm-charts/FATE/values.yaml\npersistence:\n  enabled: true\nmodules:\n  mysql:\n    storageClass: "piraeus-2-replica"\n  nodemanager:\n    list:\n    - name: nodemanager-0\n      storageClass: "piraeus-2-replica"\n    - name: nodemanager-1\n      storageClass: "piraeus-2-replica"\n')),(0,r.kt)("h2",{id:"performance-test"},"Performance Test"),(0,r.kt)("p",null,"After replacing NFS PV with Piraeus 2-replica volume, Federated AI workloads gain a considerable performance boost."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Performance",src:a(5834).Z,width:"1659",height:"999"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test/Storage"),(0,r.kt)("th",{parentName:"tr",align:null},"NAS NFS"),(0,r.kt)("th",{parentName:"tr",align:null},"Piraeus 2-replica"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upload (40w)"),(0,r.kt)("td",{parentName:"tr",align:null},"3m50s"),(0,r.kt)("td",{parentName:"tr",align:null},"1m25s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exchange (40w vs 40w)"),(0,r.kt)("td",{parentName:"tr",align:null},"13m31s"),(0,r.kt)("td",{parentName:"tr",align:null},"10m43s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model Traning"),(0,r.kt)("td",{parentName:"tr",align:null},"80m23s"),(0,r.kt)("td",{parentName:"tr",align:null},"40m2s")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above tests are not results per the same hardware. The NFS comes from an enterprise-grade NAS storage server; whereas the Piraeus uses the virtual machines' local virtual disks in its storage pools, which means the NFS backend hardware performance is much higher than that of the Piraeus. Therefore, if the Piraeus backend uses NAS-equivalent hardware, the performance will be even better.")),(0,r.kt)("h2",{id:"challenges-in-cloud-native-big-data-platforms"},"Challenges in cloud-native big data platforms"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Kubernetes CSI Interface Standard"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},'Cloud native storage must support the Kubernetes CSI interface standard.\nThe Piraeus open source project has been following each technical iteration from CSI community, developing a full set of "sidecar" containers that implement the features described by the CSI framework, on top of which it has developed advanced features such as HA failover and NFS Export.'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Data Affinity and Intelligent Scheduling"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Cloud-native storage needs to support the data affinity (VolumeNodeAffinity) which defines on which node a pod can access its data.\nPiraeus implements VolumeNodeAffinity at the CSI level and provides an advanced scheduler which ensures a container, during its lifecycle, can be scheduled to a node closest to the data."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"High availability of data"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Cloud-native storage needs to ensure that data has no single point of failure.\nThe data volume of Piraeus employs DRBD, a mature data replication technology, which provides high availability of double and triple replicas, and also has the ability to remotely attach the device. Together with the intelligent scheduler, the container can alway run on the nodes where the replica is located."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fast failover"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Kubernetes reschedules the containers when the Kubernetes node is powered off or the local data is corrupted. Piraeus' intelligent HA controller can intervene the container scheduling process (pipeline) to ensure that containers are scheduled to nodes with data replicas, and at the same time shorten the scheduling time as much as possible: by default, the container rescheduling takes 12 minutes or more, Piraeus can cut it down to  1 minute or even 30 seconds")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Big data technology and cloud-native technology, one is a cornerstone technology in the field of data processing, and the other is an emerging technology that has revolutionized business orchestration in recent years. The two are constantly growing and evolving in their respective ecosystems. Now, they interact and integrate through a common storage technology stack. Therefore, SPDB will continue to explore cloud-native storage technology in the future, study the comprehensive cloud-native Hadoop ecosystem, and explore cloud-native projects, computing engines, scheduling systems and other application solutions which can help more big data applications ride on the wave of cloud-native transformation that further empowers the financial industry."))}c.isMDXComponent=!0},3698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bigdata-012a39be8d53a3e29a32a999b1e937d0.png"},2919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/fateflow-a6b1e1816116525135baf037d4eaf341.png"},5834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/performance-ed862ad0f9d191fe881b872678c97b44.png"}}]);