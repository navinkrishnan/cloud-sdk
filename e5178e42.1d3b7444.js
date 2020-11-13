(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{161:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return h}));var t=n(2),i=n(6),c=(n(0),n(183)),r={id:"caching",title:"Caching Capabilities of the SAP Cloud SDK for Java",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Caching",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",keywords:["sap","cloud","sdk","caching","cache","JCache","CacheConfiguration"],image:null},o={unversionedId:"java/features/resilience/caching",id:"java/features/resilience/caching",isDocsHomePage:!1,title:"Caching Capabilities of the SAP Cloud SDK for Java",description:"How to use SAP Cloud SDK for Java to introduce caching into your application.",source:"@site/docs/java/features/resilience/caching.mdx",slug:"/java/features/resilience/caching",permalink:"/cloud-sdk/docs/java/features/resilience/caching",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/resilience/caching.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1601638515,sidebar_label:"Caching",sidebar:"someSidebar",previous:{title:"Resilience Capabilities of the SAP Cloud SDK for Java",permalink:"/cloud-sdk/docs/java/features/resilience/resilience"},next:{title:"Extensions overview",permalink:"/cloud-sdk/docs/java/features/extensions/extensions-supported-by-sap-cloud-sdk-for-java"}},l=[{value:"Using the Resilience API for Caching",id:"using-the-resilience-api-for-caching",children:[{value:"Adding a JCache Provider",id:"adding-a-jcache-provider",children:[]},{value:"Creating a Cache configuration",id:"creating-a-cache-configuration",children:[]},{value:"Applying a Cache configuration",id:"applying-a-cache-configuration",children:[]}]},{value:"Configuring the Caching Strategy",id:"configuring-the-caching-strategy",children:[{value:"Multi Tenancy",id:"multi-tenancy",children:[]}]},{value:"Manipulating the State of Caches",id:"manipulating-the-state-of-caches",children:[]}],s={rightToc:l};function h(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Caching may improve your application's performance and responsiveness to your consumers.\nThe SAP Cloud SDK for Java provides abstractions for caching that make it easy to integrate caching into an application with almost no configuration overhead.\nAlso it integrates with other SDK features and most importantly is tenant aware out of the box.\nThe following article describes how to enable caching with the Cloud SDK for Java in your application."),Object(c.b)("h2",{id:"using-the-resilience-api-for-caching"},"Using the Resilience API for Caching"),Object(c.b)("h3",{id:"adding-a-jcache-provider"},"Adding a JCache Provider"),Object(c.b)("p",null,"The Cloud SDK relies on the ",Object(c.b)("inlineCode",{parentName:"p"},"JCache")," SPI to create and manage cache instances.\n",Object(c.b)("inlineCode",{parentName:"p"},"JCache")," is a ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.baeldung.com/java-spi"}),"Service Provider Interface")," which requires an implementation of this interface to be present at runtime.\nBe sure to that such an implementation is present on your classpath.\nWe recommend ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ben-manes/caffeine"}),"Caffeine")," which you can use by simply adding the below dependency to your application ",Object(c.b)("inlineCode",{parentName:"p"},"pom.xml"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"<dependency>\n    <groupId>com.github.ben-manes.caffeine</groupId>\n    <artifactId>jcache</artifactId>\n    <version>2.8.5</version>\n    <scope>runtime</scope>\n</dependency>\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Caching only works when a service provider or implementation for JCache is available at runtime.\nOtherwise you will face a runtime exception."))),Object(c.b)("h3",{id:"creating-a-cache-configuration"},"Creating a Cache configuration"),Object(c.b)("p",null,"As described in our ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience"}),"Resilience section")," the Cloud SDK allows to run any code in the context of one or more resilience patterns.\nCaching is also a resilience pattern so you can leverage the same API to build and apply a ",Object(c.b)("inlineCode",{parentName:"p"},"CacheConfiguration"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"CacheConfiguration cacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withoutParameters();\n")),Object(c.b)("p",null,"This builds a simple cache that will store values for one day and does not require any additional parameters.\nThe builder pattern requires at least a duration and whether or not the cache requires parameters.\nThe configuration options are explained further below."),Object(c.b)("p",null,"This configuration must then be added to a ",Object(c.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"ResilienceConfiguration resilienceConfig = ResilienceConfiguration\n        .empty(resilienceId)\n        .cacheConfiguration(cacheConfig);\n")),Object(c.b)("p",null,"The above creates an otherwise empty ",Object(c.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," and thus only enabling caching.\nOf course you may use other resilience patterns as well."),Object(c.b)("h3",{id:"applying-a-cache-configuration"},"Applying a Cache configuration"),Object(c.b)("p",null,"Since the cache configuration is part of a resilience configuration it is applied in the same way:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"ResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n")),Object(c.b)("p",null,"The above code will invoke ",Object(c.b)("inlineCode",{parentName:"p"},"operation()")," only once since the result of the first invocation will be cached.\nOnly if the first call fails the second one would still happen."),Object(c.b)("p",null,"Note that a specific cache instance is not yet created when configuration is created.\nInstead it is only created when an operation is decorated or executed by the ",Object(c.b)("inlineCode",{parentName:"p"},"ResilienceDecorator"),"."),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The cache functionality is tenant aware by default.\nThat means that by default cache entries created under a specific tenant will not be shared with other tenants.\nSee the section on ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"#multi-tenancy"}),"multi tenancy")," below."))),Object(c.b)("h2",{id:"configuring-the-caching-strategy"},"Configuring the Caching Strategy"),Object(c.b)("p",null,"The cache configuration offers 3 options:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Cache Duration (Required)"),Object(c.b)("li",{parentName:"ol"},"Expiration Strategy (Optional)"),Object(c.b)("li",{parentName:"ol"},"Parameters (Optional)")),Object(c.b)("p",null,"Each cache configuration must at least specify a duration after which a cache expires.\nHow this timeout is applied can be configured through the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/CacheExpirationStrategy.html"}),"Expiration Strategy"),".\nBy default a cache entry is cleared once the configured duration has passed since the entry was created."),Object(c.b)("p",null,"Finally, parameters can be listed that further refine the caching functionality.\nParameters values will be attached to cache key.\nWhen the cache is accessed only entries with matching parameter values will be returned."),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),'// Set a parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is empty, so this will be a cache miss\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n// Cache is hit, cached value will be returned\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\n// Set a different parameter value\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value2");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// Cache is not hit because the existing cache entry has a different parameter value\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n\ncacheConfig = CacheConfiguration\n        .of(Duration.ofDays(1))\n        .withParameters("value1");\nresilienceConfig.cacheConfiguration(cacheConfig);\n\n// The cached value from the very first invocation is returned as the parameter is "value1" again\nResilienceDecorator.executeSupplier(() -> operation(), resilienceConfig);\n')),Object(c.b)("p",null,"So you can use parameters to separate cache entries as you see fit.\nPlease note that there is no need to do this to achieve multi tenancy.\nThe SDK is tenant aware by default as described below."),Object(c.b)("h3",{id:"multi-tenancy"},"Multi Tenancy"),Object(c.b)("p",null,"By default this caching functionality is tenant aware.\nIf a tenant is available the SDK will create cache entries only for that specific tenant.\nOther tenants will not see the value cached for that specific tenant."),Object(c.b)("p",null,"For this example assume that ",Object(c.b)("inlineCode",{parentName:"p"},"config")," is a ",Object(c.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," that has a ",Object(c.b)("inlineCode",{parentName:"p"},"CacheConfiguration")," in place:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"cachedOperation = ResilienceDecorator.decorateSupplier(() -> operation(), config)\n\n// cachedOperation() will be evaluated\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n// cached value will be taken\nTenantAccessor.executeWithTenant(tenantA, () -> cachedOperation());\n\n// cachedOperation() will be evaluated because the cached value is only accessible for tenantA\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n// cached value for tenantB will be taken\nTenantAccessor.executeWithTenant(tenantB, () -> cachedOperation());\n")),Object(c.b)("p",null,"This isolation is configured via the isolation mode of the resilience configuration.\nSo you can disable tenant aware caching by setting the isolation mode to ",Object(c.b)("inlineCode",{parentName:"p"},"NO_ISOLATION"),".\nSee the section on isolation levels under ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://sap.github.io/cloud-sdk/docs/java/features/resilience/resilience#multi-tenancy"}),"Resilience")," for more details."),Object(c.b)("h2",{id:"manipulating-the-state-of-caches"},"Manipulating the State of Caches"),Object(c.b)("p",null,"You may manually clear caches by:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"// invalidate\nResilienceDecorator.invalidateCache(resilienceConfig);\n")),Object(c.b)("p",null,"This currently clears all cache entries associated with the resilience configuration irrespective of the current tenant and principal."),Object(c.b)("p",null,"To get hold of the created cache instance and to use it for advanced operations like for e.g registering ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://www.baeldung.com/jcache#listeners"}),"event listeners")," you can use JCache API:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"final Cache<SomeCacheKey, SomeResult> cache = Caching.getCachingProvider()\n                                                     .getCacheManager()\n                                                     .getCache(resilienceConfig.identifier()) //Returns the cache created using the resilienceId passed\n                                                     .registerCacheEntryListener(SimpleCacheEntryListener); //Registers the event listener\n")),Object(c.b)("p",null,"where ",Object(c.b)("inlineCode",{parentName:"p"},"SimpleCacheEntryListener")," is a class that implements the interfaces of the required events w.r.t cache defined in ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"https://javadoc.io/doc/javax.cache/cache-api/latest/javax/cache/event/EventType.html"}),"EventType"),"\nNote that the identifier of the resilience configuration is also the identifier of the cache associated with it."))}h.isMDXComponent=!0},183:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return b}));var t=n(0),i=n.n(t);function c(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){c(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),h=function(e){var a=i.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=h(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=h(n),d=t,b=p["".concat(r,".").concat(d)]||p[d]||u[d]||c;return n?i.a.createElement(b,o(o({ref:a},s),{},{components:n})):i.a.createElement(b,o({ref:a},s))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var c=n.length,r=new Array(c);r[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,r[1]=o;for(var s=2;s<c;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);