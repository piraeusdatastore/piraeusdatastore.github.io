"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="Preparing the host for DRBD",l={unversionedId:"host-setup",id:"host-setup",title:"Preparing the host for DRBD",description:"Piraeus depends on DRBD for data replication across multiple nodes. [DRBD] is a kernel module that must be loaded on",source:"@site/docs/01.host-setup.md",sourceDirName:".",slug:"/host-setup",permalink:"/site/docs/host-setup",draft:!1,editUrl:"https://github.com/piraeusdatastore/docs/01.host-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Piraeus Operator Documentation",permalink:"/site/docs/intro"},next:{title:"Configuring Storage",permalink:"/site/docs/storage"}},s={},d=[{value:"Software compatibility",id:"software-compatibility",level:2},{value:"Multipathd",id:"multipathd",level:3},{value:"Build and load DRBD using the Kernel Module Injection Image (Preferred)",id:"build-and-load-drbd-using-the-kernel-module-injection-image-preferred",level:2},{value:"Flatcar Container Linux",id:"flatcar-container-linux",level:3},{value:"Injector image for compiling without headers on host",id:"injector-image-for-compiling-without-headers-on-host",level:3},{value:"Install DRBD on the host",id:"install-drbd-on-the-host",level:2},{value:"Disable Lvmetad on CentOS 7 and Ubuntu 18.04",id:"disable-lvmetad-on-centos-7-and-ubuntu-1804",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preparing-the-host-for-drbd"},"Preparing the host for DRBD"),(0,r.kt)("p",null,"Piraeus depends on DRBD for data replication across multiple nodes. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LINBIT/drbd/"},"DRBD")," is a kernel module that must be loaded on\nevery node that should access the storage. Depending on your exact host OS and set up, you can choose ",(0,r.kt)("strong",{parentName:"p"},"one")," from the\nfollowing options to load DRBD:"),(0,r.kt)("h2",{id:"software-compatibility"},"Software compatibility"),(0,r.kt)("p",null,"Certain pieces of software conflict with Piraeus and either need to be configured to not interfere with Piraeus or they need\nto be disabled to ensure Piraeus can function properly."),(0,r.kt)("h3",{id:"multipathd"},"Multipathd"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd"),", you will most likely need to change some configuration settings to ensure that Piraeus can function\nproperly as ",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd")," by default will interfere with Piraeus. ",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd")," by default opens up DRBD devices which prevents Piraeus\nfrom working properly. To configure ",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd"),", put the following in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/multipath/conf.d/drbd.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'blacklist {\n        devnode "^drbd[0-9]+"\n}\n')),(0,r.kt)("p",null,"You will most likely need to create the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/multipath/conf.d/")," if you have not made any other configuration changes to\n",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd")," before. Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"multipathd")," is enabled on Ubuntu 20.04 by default and this configuration change will need to be made\non fresh installations of Ubuntu 20.04 before Piraeus will be able to function properly."),(0,r.kt)("h2",{id:"build-and-load-drbd-using-the-kernel-module-injection-image-preferred"},"Build and load DRBD using the Kernel Module Injection Image (Preferred)"),(0,r.kt)("p",null,"Every satellite container created by the operator will use an ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"InitContainer")," to ensure DRBD is available. This init\nstep can also compile and load DRBD directly. To build DRBD, the container needs access to the kernel sources. It will\nlook for the sources on the host under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/src")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/lib/modules/$(uname -r)"),". Most distributions provide a convenient package\nfor the kernel source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu: ",(0,r.kt)("inlineCode",{parentName:"li"},"apt-get install linux-headers-$(uname -r)")),(0,r.kt)("li",{parentName:"ul"},"CentOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"yum install kernel-devel-$(uname -r)"))),(0,r.kt)("p",null,"Install these packages and use the injector image matching your distribution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Distribution"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker image"),(0,r.kt)("th",{parentName:"tr",align:null},"Original Dockerfile"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/piraeusdatastore/drbd9-centos7")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus/blob/master/dockerfiles/drbd-driver-loader/Dockerfile.centos7"},"Dockerfile.centos7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CentOS 8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/piraeusdatastore/drbd9-centos8")," (See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus-operator/issues/137"},"#137")," for CentOS 8 Stream)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus/blob/master/dockerfiles/drbd-driver-loader/Dockerfile.centos8"},"Dockerfile.centos8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 22.04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/piraeusdatastore/drbd9-jammy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus/blob/master/dockerfiles/drbd-driver-loader/Dockerfile.jammy"},"Dockerfile.jammy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 20.04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/piraeusdatastore/drbd9-focal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus/blob/master/dockerfiles/drbd-driver-loader/Dockerfile.focal"},"Dockerfile.focal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ubuntu 18.04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"quay.io/piraeusdatastore/drbd9-bionic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/piraeusdatastore/piraeus/blob/master/dockerfiles/drbd-driver-loader/Dockerfile.bionic"},"Dockerfile.bionic"))))),(0,r.kt)("p",null,"You can set the image by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--set operator.satelliteSet.kernelModuleInjectionImage=<image>")," to Helm."),(0,r.kt)("h3",{id:"flatcar-container-linux"},"Flatcar Container Linux"),(0,r.kt)("p",null,"Flatcar Container Linux requires building DRBD from source. Piraeus by default bind mounts ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/src")," into the injection\ncontainer, as that is required on most distributions. This will fail on Flatcar Container Linux, as that directory\ndoes not exist there, and can't easily be created (",(0,r.kt)("inlineCode",{parentName:"p"},"/usr")," is always read-only)."),(0,r.kt)("p",null,"For this case, you can disable mounting of ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/src")," by passing\n",(0,r.kt)("inlineCode",{parentName:"p"},"--set operator.satelliteSet.kernelModuleInjectionAdditionalSourceDirectory=none")," to Helm."),(0,r.kt)("h3",{id:"injector-image-for-compiling-without-headers-on-host"},"Injector image for compiling without headers on host"),(0,r.kt)("p",null,"Installing the kernel headers is not always feasible on the host. A prime example is Fedora CoreOS (FCOS), which uses\nolder versions of the mainline Fedora kernel. Often, the matching kernel-headers are no longer available to install and\nmanually manipulating the ",(0,r.kt)("inlineCode",{parentName:"p"},"ostree")," is cumbersome. In this section we will show you how to build your own injector image\nthat automatically fetches the right kernel headers using FCOS as example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": While DRBD tries to stay compatible with the mainline kernel, there is no guarantee that a released version\nwill compile for every kernel."),(0,r.kt)("p",null,"For our custom injector image for FCOS we will need two files, a ",(0,r.kt)("inlineCode",{parentName:"p"},"entry-override.sh")," script and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". We will\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"entry-override.sh")," as our entrypoint in the injector image, i.e. the script that gets executed when the container\nstarts running. It will download the kernel headers and invoke the DRBD build process:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# download package matching the current kernel from build artifacts\nkoji download-build --rpm --arch=x86_64 kernel-devel-$(uname -r)\n# unpack the kernel headers in the /opt directory. The default /usr/src directory is mounted read only at this point and cannot be used\nrpm2cpio ./kernel-devel-$(uname -r).rpm | cpio -idD /opt\n\n# set the KDIR variable, telling DRBD to search for the headers in /opt\nexport KDIR=/opt/usr/src/kernels/$(uname -r)\nexec /entry.sh "$@"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/entry.sh")," script is taken from the existing injector image. It will invoke the right build steps and ensure all\nkernel modules are loaded. We only influence where it searches for the kernel headers by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"KDIR")," variable."),(0,r.kt)("p",null,"For our ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", we first pull in an existing injector image to access the DRBD source and the regular injector\nimage entrypoint. We base our actual injector image on Fedora 33 as the FCOS kernel (currently) also comes from that\ndistribution."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# Pull in DRBD sources and entrypoint\nFROM quay.io/piraeusdatastore/drbd9-centos8:latest as SOURCE\n\nFROM fedora:33\n\n# Packages needed for the DRBD build process.\nRUN yum install -y gcc make coccinelle koji cpio patch perl-interpreter diffutils kmod elfutils-libelf-devel \\\n  && yum clean all\n\n# Our script from above\nCOPY entry-override.sh /\n# The DRBD sources and build script from an existing injector image\nCOPY --from=SOURCE /entry.sh /drbd.tar.gz /\n\nENV LB_HOW=compile\n# Use our download script as entrypoint\nENTRYPOINT ["sh", "-e", "/entry-override.sh"]\n')),(0,r.kt)("p",null,"Build the image, tag it and push it to a registry accessible to your cluster. You can start using your custom injector\nimage by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--set operator.satelliteSet.kernelModuleInjectionImage=<your-custom-image>")," to Helm."),(0,r.kt)("h2",{id:"install-drbd-on-the-host"},"Install DRBD on the host"),(0,r.kt)("p",null,"Some users may prefer to install the DRBD directly on the host. While a DRBD package is available on some distributions,\nthey are often out of date and can't be used for Piraeus. Instead, you should follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.linbit.com/drbd-user-guide/users-guide-9-0/#p-build-install-configure"},"link to DRBDs user guide")," to\nensure you install a recent enough version. After that, please read the instructions below to make DRBD ready for\ncontainerized workloads."),(0,r.kt)("p",null,"You have to disable DRBD's user mode helper. This feature of the DRBD module enables running user configured commands on\nchanges in DRBDs state. When using it with containers, it could confuse programs that expect to know of all configured\nDRBD resources, such as the default ",(0,r.kt)("inlineCode",{parentName:"p"},"drbdadm"),". This command then reports an error, which is interpreted by DRBD to abort\nthe current transition. In the end, you are left with a lot of ",(0,r.kt)("inlineCode",{parentName:"p"},"StandAlone")," resources that can't be used."),(0,r.kt)("p",null,"To prevent this issue, you have to set the DRBD module parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"usermode_helper")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled"),". To check the current\nvalue, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cat /sys/module/drbd/parameters/usermode_helper\n/sbin/drbdadm\n")),(0,r.kt)("p",null,"To disable the helper without reloading the module ",(0,r.kt)("em",{parentName:"p"},"AND")," ensure it persist after reboots use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# echo -n "disabled" > /sys/module/drbd/parameters/usermode_helper\n# echo "options drbd usermode_helper=disabled" > /etc/modprobe.d/drbd.conf\n')),(0,r.kt)("p",null,"Checking the current value again will reveal that the helper is now disabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# cat /sys/module/drbd/parameters/usermode_helper\ndisabled\n")),(0,r.kt)("h2",{id:"disable-lvmetad-on-centos-7-and-ubuntu-1804"},"Disable Lvmetad on CentOS 7 and Ubuntu 18.04"),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://access.redhat.com/solutions/2053483"},"https://access.redhat.com/solutions/2053483")),(0,r.kt)("p",null,"CentOS 7 and Ubuntu 18.04 by default use ",(0,r.kt)("inlineCode",{parentName:"p"},"lvmetad"),",  a metadata caching daemon for LVM. The daemon improves performance of LVM commands by avoiding rescanning the disks on every execution. ",(0,r.kt)("inlineCode",{parentName:"p"},"piraeus-ns-node")," pods run LVM commands inside a container without access to lvmetad. Since that means  ",(0,r.kt)("inlineCode",{parentName:"p"},"lvmetad")," would get out of sync, it is recommended to disable ",(0,r.kt)("inlineCode",{parentName:"p"},"lvmetad")," in CentOS 7 and Ubuntu 18.04 Bionic."),(0,r.kt)("p",null,"Note: Newer distributions no longer include with ",(0,r.kt)("inlineCode",{parentName:"p"},"lvmetad"),", no changes necessary."),(0,r.kt)("p",null,"Follow below steps to disable lvmetad completely:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl stop lvm2-lvmetad.socket lvm2-lvmetad.service\n\n$ systemctl disable lvm2-lvmetad.service\n\n$ systemctl mask lvm2-lvmetad.socket\n\n$ sed -i 's/use_lvmetad = 1/use_lvmetad = 0/' /etc/lvm/lvm.conf\n\n$ cat /etc/lvm/lvm.conf | grep use_lvmetad\nuse_lvmetad = 0\n")),(0,r.kt)("p",null,"If the root partition already uses LVM, you also need to update the initial ram-disk:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# CentOS 7\n$ cp -vf /boot/initramfs-$(uname -r).img /boot/initramfs-$(uname -r).img.$(date +%m-%d-%H%M%S).bak\n$ dracut -f -v\n\n# Ubuntu 18.04\n$ cp -vf /boot/initrd.img-$(uname -r) /boot/initd.img.$(uname -r).$(date +%m-%d-%H%M%S).bak\n$ update-initramfs -c -k $(uname -r)\n$ update-grub\n")))}p.isMDXComponent=!0}}]);