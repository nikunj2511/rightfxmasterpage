import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import TopCarouselOverlay from '../components/market/TopCarouselOverlay.Component';
import ExchangeQuickInfo from '../components/market/ExchangeQuickInfo.Component';
// import ExchangeTradeFeatures from '../components/market/ExchangeTradeFeatures.Component';
import EbookYouWillLearnAbout from '../components/Insights/EbookYouWillLearnAbout';
import ExchangeList from '../components/market/ExchangeList.Component';
import useTranslation from 'next-translate/useTranslation';

export default function EBook() {
  const { t } = useTranslation('markets');
  return (
    <>
      <TopStaticCarousel
        image='/Market/exchange-banner.png'
        title={<label dangerouslySetInnerHTML={{ __html: t('EBook_Title') }}></label>}
        description=''
        noButton={true}
        // buttonLink='/'
        // buttonText={t('Start Trading')}
      />
      <TopCarouselOverlay image='/Market/exchange-overlay.png' />

      <ExchangeQuickInfo />
      <EbookYouWillLearnAbout />
      <ExchangeList />
    </>
  )
}
