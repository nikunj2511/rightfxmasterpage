import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MarketTable from "../components/market/MarketTable.Component";
import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import TopCarouselOverlay from "../components/market/TopCarouselOverlay.Component";
import TopTabItem from "../components/market/TopTabItem.Component";
import useTranslation from "next-translate/useTranslation";

const tableData = [
  {
    type: "Pro",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "AUD/CAD",
    margin: "From 0.2%",
    average: 2.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "AUD/CHF",
    margin: "From 0.2%",
    average: 1.9,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "AUD/JPY",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "AUD/NZD",
    margin: "From 0.2%",
    average: 2.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "AUD/USD",
    margin: "From 0.2%",
    average: 1.5,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "CAD/CHF",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CAD/JPY",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/chf.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CHF/JPY",
    margin: "From 0.2%",
    average: 2.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "EUR/AUD",
    margin: "From 0.2%",
    average: 2.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "EUR/CAD",
    margin: "From 0.2%",
    average: 2.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "EUR/CHF",
    margin: "From 0.2%",
    average: 1.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/gbp.svg",
    productName: "EUR/GBP",
    margin: "From 0.2%",
    average: 1.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "EUR/JPY",
    margin: "From 0.2%",
    average: 1.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "EUR/NZD",
    margin: "From 0.2%",
    average: 3.1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "EUR/USD",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "GBP/AUD",
    margin: "From 0.2%",
    average: 2.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "GBP/CAD",
    margin: "From 0.2%",
    average: 2.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "GBP/CHF",
    margin: "From 2%",
    average: 2.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "GBP/JPY",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "GBP/NZD",
    margin: "From 0.2%",
    average: 2.9,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "GBP/USD",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "NZD/CAD",
    margin: "From 0.4%",
    average: 2.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "NZD/CHF",
    margin: "From 0.2%",
    average: 2.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "NZD/JPY",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "NZD/USD",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "USD/CAD",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "USD/CHF",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "Pro",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "USD/JPY",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },

  {
    type: "VIP",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "AUD/CAD",
    margin: "From 0.2%",
    average: 1.9,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "AUD/CHF",
    margin: "From 0.2%",
    average: 1.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "AUD/JPY",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "AUD/NZD",
    margin: "From 0.2%",
    average: 1.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "AUD/USD",
    margin: "From 0.2%",
    average: 0.9,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "CAD/CHF",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CAD/JPY",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/chf.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CHF/JPY",
    margin: "From 0.2%",
    average: 1.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "EUR/AUD",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "EUR/CAD",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "EUR/CHF",
    margin: "From 0.2%",
    average: 1.1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/gbp.svg",
    productName: "EUR/GBP",
    margin: "From 0.2%",
    average: 1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "EUR/JPY",
    margin: "From 0.2%",
    average: 1.1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "EUR/NZD",
    margin: "From 0.2%",
    average: 2.5,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "EUR/USD",
    margin: "From 0.2%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "GBP/AUD",
    margin: "From 0.2%",
    average: 1.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "GBP/CAD",
    margin: "From 0.2%",
    average: 2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "GBP/CHF",
    margin: "From 2%",
    average: 1.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "GBP/JPY",
    margin: "From 0.2%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "GBP/NZD",
    margin: "From 0.2%",
    average: 2.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "GBP/USD",
    margin: "From 0.2%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "NZD/CAD",
    margin: "From 0.4%",
    average: 1.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "NZD/CHF",
    margin: "From 0.2%",
    average: 1.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "NZD/JPY",
    margin: "From 0.2%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "NZD/USD",
    margin: "From 0.2%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "USD/CAD",
    margin: "From 0.2%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "USD/CHF",
    margin: "From 0.2%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "VIP",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "USD/JPY",
    margin: "From 0.2%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },

  {
    type: "ECN",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "AUD/CAD",
    margin: "From 1%",
    average: 1.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "AUD/CHF",
    margin: "From 1%",
    average: 0.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "AUD/JPY",
    margin: "From 1%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "AUD/NZD",
    margin: "From 1%",
    average: 1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/aud.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "AUD/USD",
    margin: "From 1%",
    average: 0.3,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "CAD/CHF",
    margin: "From 1%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/cad.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CAD/JPY",
    margin: "From 1%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/chf.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "CHF/JPY",
    margin: "From 1%",
    average: 1.1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "EUR/AUD",
    margin: "From 1%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "EUR/CAD",
    margin: "From 1%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "EUR/CHF",
    margin: "From 1%",
    average: 0.5,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/gbp.svg",
    productName: "EUR/GBP",
    margin: "From 1%",
    average: 0.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "EUR/JPY",
    margin: "From 1%",
    average: 0.5,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "EUR/NZD",
    margin: "From 1%",
    average: 1.9,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/eur.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "EUR/USD",
    margin: "From 1%",
    average: 0.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/aud.svg",
    productName: "GBP/AUD",
    margin: "From 1%",
    average: 1.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "GBP/CAD",
    margin: "From 1%",
    average: 1.4,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "GBP/CHF",
    margin: "From 8%",
    average: 1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "GBP/JPY",
    margin: "From 1%",
    average: 0.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/nzd.svg",
    productName: "GBP/NZD",
    margin: "From 1%",
    average: 1.7,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/gbp.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "GBP/USD",
    margin: "From 1%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "NZD/CAD",
    margin: "From 1.60%",
    average: 1.1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "NZD/CHF",
    margin: "From 1%",
    average: 1,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "NZD/JPY",
    margin: "From 1%",
    average: 0.8,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/nzd.svg",
    flag2: "/Market/Flags/usd.svg",
    productName: "NZD/USD",
    margin: "From 1%",
    average: 0.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/cad.svg",
    productName: "USD/CAD",
    margin: "From 1%",
    average: 0.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/chf.svg",
    productName: "USD/CHF",
    margin: "From 1%",
    average: 0.6,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
  {
    type: "ECN",
    flag1: "/Market/Flags/usd.svg",
    flag2: "/Market/Flags/jpy.svg",
    productName: "USD/JPY",
    margin: "From 1%",
    average: 0.2,
    tradingHours: "Monday 00:00 - Friday 24:00",
  },
];

export default function ForexMarket() {
  const { t } = useTranslation("markets");
  const [selectedTab, setSelectedTab] = useState("Pro");

  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <TopStaticCarousel
        image="/Market/Forex-BG.jpg"
        title={
          <label
            dangerouslySetInnerHTML={{ __html: t("Forex_Trading") }}
          ></label>
        }
        description={t("Title_Description")}
        position="center"
        buttonLink="https://portal.rightfx.com/register"
        buttonText={t("Start Trading")}
      />
      {/* <TopCarouselOverlay image='/Market/FOREX-ELEMENT.png' /> */}
      <div className="forex-points mt-5">
        <Container>
          <Row>
            <Col md="4">
              <TopTabItem
                title={t("Pro")}
                image={"/Market/executive.svg"}
                description={
                  <label
                    dangerouslySetInnerHTML={{
                      __html: t("Open an RightFX Trading Account"),
                    }}
                  ></label>
                }
                onChangeTab={(tab) => {
                  onChangeTab(tab);
                }}
                active={selectedTab === "Pro"}
              />
            </Col>
            <Col md="4">
              <TopTabItem
                title={t("VIP")}
                image={"/Market/vip.svg"}
                description={
                  <label
                    dangerouslySetInnerHTML={{
                      __html: t("Open an RightFX Trading Account"),
                    }}
                  ></label>
                }
                onChangeTab={(tab) => {
                  onChangeTab(tab);
                }}
                active={selectedTab === "VIP"}
              />
            </Col>
            <Col md="4">
              <TopTabItem
                title={t("ECN")}
                image={"/Market/pro.svg"}
                description={
                  <label
                    dangerouslySetInnerHTML={{
                      __html: t("Open an RightFX Trading Account"),
                    }}
                  ></label>
                }
                onChangeTab={(tab) => {
                  onChangeTab(tab);
                }}
                active={selectedTab === "ECN"}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <MarketTable
        selectedTab={selectedTab}
        rows={tableData}
        viewAllLink={"/"}
        isViewAll={false}
      />
    </>
  );
}
