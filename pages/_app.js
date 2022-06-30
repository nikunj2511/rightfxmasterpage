import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AOS from "aos";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../resources/styles/bootstrap-icons.css';
import 'swiper/css/bundle';
import '../resources/styles/style.scss';
import '../resources/styles/custom.scss';
import "aos/dist/aos.css";
import TopNav from '../components/layout/TopNav.Component';
import Footer from '../components/layout/Footer.Component';
import { HeadContents } from '../helpers/Constants';
import { languages } from '../helpers/Constants';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const GetHeadData = (route) => {
  let pageName = route;
  if (!pageName) pageName = 'home';
  let objHedaContent = HeadContents.filter(x => x.page === pageName)[0];
  if (!objHedaContent)
    objHedaContent = { title: 'RightFX' };
  return objHedaContent;
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'mobile'
    });
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6034a7db9c4f165d47c6171a/1ev6qvco7';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    // AOS.refresh();
  }, []);

  const router = useRouter();
  const objHeadContent = GetHeadData(router.route);
  const isRTL = languages.filter(x => x.code === router.locale)[0].isRtl;
  return (
    <>
      <Head>
        <title>{objHeadContent.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {objHeadContent.meta && objHeadContent.meta.length > 0 && objHeadContent.meta.map((x, i) =>
          <meta name={x.name} content={x.content} key={i} />
        )}

        <link rel="icon" href="favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap" rel="stylesheet" />
        {/* <script defer id="convrs-webchat" src="https://webchat.conv.rs/86061d38b0bc3ff793f0c8ee19c23e6e30f10858.js"></script> 
        <script type="text/javascript">
          {`window.zESettings = {
            webWidget: {
            answerBot: {
            avatar: {
            url: 'https://rightfx.com/Layout/top-logo.svg',
            name: { "*" : 'RightFX Support'
            }
            },
            title: { "en-US": "RightFX"
            },
            search: { labels:
            ['live', 'regulation', 'platform', 'password', 'demo', 'deposit', 'withdraw', 'transfer', 'bonus', 'referral link', 'complaint', 'request', 'types', 'swap free', 'commission', 'products', 'spread', 'partnership', 'introducing broker', 'scalping', 'stop out', 'margin', 'leverage', 'additional', 'contact']
            }
            }
            }
            };`}
        </script>
        <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=df41e3d9-8906-4208-9a1e-f02601565dfa"> </script>
        <script defer id="convrs-webchat" src="https://webchat.conv.rs/86061d38b0bc3ff793f0c8ee19c23e6e30f10858.js"></script>*/}
      </Head>
      <div className={isRTL ? 'rtl' : ''}>
        <TopNav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
