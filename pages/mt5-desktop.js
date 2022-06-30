import Link from 'next/link';
import MetaTrader from '../components/mt5Desktop/MetaTrader.Component';
import MT4And5Info from '../components/mt5Desktop/MT4And5Info.Component';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import useTranslation from 'next-translate/useTranslation';

export default function MT5Desktop() {
  const { t } = useTranslation('mt-4-5');
  const data = [
    {
      title: <>{t('RightFX')} <span className="text-red">{t('MT5 Desktop')}</span></>,
      description: t('MT5_Desktop Download for free to take advantage')
    }
  ];
  return (
    <>
      <TopStaticCarousel
        image='/Trading/MT4-MT5-Banner.jpg'
        title={<label dangerouslySetInnerHTML={{ __html: t('MT5_Desktop') }}></label>}
        description={t('MT5_Desktop MT5 is regarded in the trading industry')}
        position='center'
        noButton={true}
        extraSection={
          <div className="d-flex align-item-center justify-content-center pt-md-4">
            <div className="pe-4" >
              <Link href="https://download.mql5.com/cdn/web/rightfx.limited/mt5/rightfxlimited5setup.exe"><a><img src="/Trading/WINDOWS.png" alt="RightFX MT5-Desktop Windows" className="img-fluid img-shad" /></a></Link>
            </div>
            <div>
              <Link href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg?server=RightFXLimited-Demo,RightFXLimited-Live"><a><img src="/Trading/IOS.png" alt="RightFX MT5-Desktop IOS" className="img-fluid img-shad" /></a></Link>
            </div>
          </div>
        }
      />
      <MetaTrader image='/Trading/MetaTrader5.png' carouselData={data} />
      <MT4And5Info
       desc1={ <>{t('It will meet your needs as an experienced or novice trader')}</>
      }
        desc2={ <>{t('MT5 is renowned for its user friendly functionality')}</>
      }
        image='/Trading/MT4-MT5-Desktop.png'
        title={
          <>
            {t('RightFX')} <span className="text-red">{t('MT5 Desktop')}</span>
          </>
        } />
    </>
  )
}
