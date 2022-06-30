import TopStaticCarousel from "../components/common/TopStaticCarousel.Component";
import PaymentMethodTable from "../components/deposit-withdrawal/PaymentMethodTable.Component";
import useTranslation from "next-translate/useTranslation";

const depositTableData = [
  {
    paymentMethodImage: "/Trading/CashU.png",
    value: "CashU",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/Neteller.png",
    value: "Neteller",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/Skrill.png",
    value: "Skrill",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/Visa.png",
    value: "Visa",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/WireTransfer.png",
    value: "WireTransfer",
    currency: "USD AED EUR",
    fees: "Remitting bank charges only",
    processingTime: "2 to 5 working days",
  },
  {
    paymentMethodImage: "/Trading/bitpay.svg",
    value: "BitPay",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/Crypto.png",
    value: "Crypto",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/PERFECT MONEY.png",
    value: "PerfactMoney",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
  {
    paymentMethodImage: "/Trading/THUNDERXPAY.png",
    value: "ThunderXPay",
    currency: "USD",
    fees: "No Fees Charged by RightFX",
    processingTime: "Instant",
  },
];

const withdrawalTableData = [
  {
    paymentMethodImage: "/Trading/WireTransfer.png",
    value: "WireTransfer",
    currency: "USD",
    fees: "USD 25 per withdrawal",
    processingTime: "2 to 5 working days",
  },
  {
    paymentMethodImage: "/Trading/Neteller.png",
    value: "Neteller",
    currency: "USD",
    fees: "No Fees Charged_50 Minimum Withdrawal",
    processingTime: "Same day",
  },
  {
    paymentMethodImage: "/Trading/Skrill.png",
    value: "Skrill",
    currency: "USD",
    fees: "No Fees Charged_50 Minimum Withdrawal",
    processingTime: "Same day",
  },
  {
    paymentMethodImage: "/Trading/CashU.png",
    value: "CashU",
    currency: "USD",
    fees: "No Fees Charged_50 Minimum Withdrawal",
    processingTime: "Same day",
  },
  {
    paymentMethodImage: "/Trading/PERFECT MONEY.png",
    value: "PerfactMoney",
    currency: "USD",
    fees: "No Fees Charged_50 Minimum Withdrawal",
    processingTime: "Same day",
  },
];

export default function DepositWithdrawal() {
  const { t } = useTranslation("deposit-withdrawal");
  const handleDepostButtonClick = (value) => {
    window.open("https://portal.rightfx.com", "_blank");
  };
  const handleWithdrawalButtonClick = (value) => {
    window.open("https://portal.rightfx.com", "_blank");
  };
  return (
    <>
      <div className="economic-calendars">
        <TopStaticCarousel
          image="/Trading/deposit-withdrawal-banner.png"
          title={
            <label
              dangerouslySetInnerHTML={{ __html: t("Deposit_Withdrawal") }}
            ></label>
          }
          description={t("Deposit_Withdrawal Description")}
          position="center"
          noButton={true}
        />

        <div className="pt-5">
          <PaymentMethodTable
            type="Deposit"
            rows={depositTableData}
            handleButtonClick={handleDepostButtonClick}
          />
        </div>
        <div>
          <PaymentMethodTable
            type="Withdrawals"
            rows={withdrawalTableData}
            handleButtonClick={handleWithdrawalButtonClick}
          />
        </div>
      </div>
    </>
  );
}
