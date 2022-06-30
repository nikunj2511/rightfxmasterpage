import PricingPlans from '../components/accounts/PricingPlans.Component';
import TopStaticCarousel from '../components/common/TopStaticCarousel.Component';
import useTranslation from 'next-translate/useTranslation';

export default function Accounts() {
  const { t } = useTranslation('accounts');
  return (
    <>
      <TopStaticCarousel
        image='/Trading/account-types-banner.jpg'
        title={<label dangerouslySetInnerHTML={{ __html: t('Account_Types') }}></label>}
        description={t('Trade CFDs on')}
        position='center'
        noButton={true}
      />
      <PricingPlans />
    </>
  )
}
