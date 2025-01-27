/* eslint-disable @next/next/next-script-for-ga */
import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');`,
            }}
          />

          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/21700422.js"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
                            `,
            }}
          />
          {/* <!-- production Google Tag Manager --> */}

          {/* {(
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    window['_fs_debug'] = false;
                                    window['_fs_host'] = 'fullstory.com';
                                    window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
                                    window['_fs_org'] = '18PZAE';
                                    window['_fs_namespace'] = 'FS';
                                    (function(m,n,e,t,l,o,g,y){
                                        if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
                                        g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
                                        o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
                                        y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
                                        g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
                                        g.anonymize=function(){g.identify(!!0)};
                                        g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
                                        g.log = function(a,b){g("log",[a,b])};
                                        g.consent=function(a){g("consent",!arguments.length||a)};
                                        g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
                                        g.clearUserCookie=function(){};
                                        g.setVars=function(n, p){g('setVars',[n,p]);};
                                        g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
                                        if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
                                        g._v="1.3.0";
                                    })(window,document,window['_fs_namespace'],'script','user');
                                `,
                            }}
                        />
                    )} */}
          {/* <!-- Google Tag Manager --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
                                `,
            }}
          />

          {/* <!-- End Google Tag Manager --> */}
        </Head>

        <body>
          {/* development  */}
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}

          {/* Production  */}
          {/* <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-WL3DZFQ"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript> */}

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
