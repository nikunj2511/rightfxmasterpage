import dynamic from 'next/dynamic';
import ComplientTrading from '../components/home/ComplientTrading.Component';
import PlatformTraders from '../components/home/PlatformTraders.Component';
import TopCarousel from '../components/home/TopCarousel.Component';
import KeyFeatures from '../components/home/KeyFeatures.Component';
import TradingOptions from '../components/home/TradingOptions.Component';
import Widgets from '../components/home/Widgets.Component';
import ConnectTradeInnovate from '../components/home/ConnectTradeInnovate.Component';
import LimitedOffers from '../components/home/LimitedOffers.Component';
import DotNav from '../components/home/DotNav.Component';
import AccountTypes from '../components/accountTypes/AccountTypes.Component';
import Features from '../components/features/Features';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Offers from '../components/home/Offers.Component';
import TryDemo from '../components/home/TryDemo.Component';

const WhyRightFXNoSSR = dynamic(
  () => import('../components/home/WhyRightFX.Component'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <TopCarousel />
      <AccountTypes />
      <Features />
      <Widgets />
      <ComplientTrading />
      <PlatformTraders />
      <TradingOptions />
      <ConnectTradeInnovate />
      <Offers></Offers>
      <TryDemo></TryDemo>
    </>
  )
}
