import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Container } from "react-bootstrap";
import Link from "next/link";

export default function TryDemo() {
  const { t } = useTranslation();

  return (
    <div className="try-demo">
      <Container className="p-5">
        <div className="left-side">
          <h2 className="mb-4">{t("Try demo trading")}</h2>
          <p className="mb-5">
            {t(
              "Start practicing trade with virtual funds on the RightFX Demo Trading Account."
            )}
          </p>
          <Link href="https://portal.rightfx.com/opendemoaccount">
            <a className="demo-button">
              <span>{t("Get a demo Account")}</span>
            </a>
          </Link>
        </div>
        {/* <div className='right-side text-center'>
                    <div className='right-side-box m-auto'>
                        <div>
                            <i className="bi bi-emoji-smile"></i>
                        </div>
                        <div>{t('No stress')}</div>
                    </div>
                    <div className='right-side-box second-box m-auto'>
                        <div>
                            <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div>{t('No deposit')}</div>
                    </div>
                    <div className='right-side-box m-auto'>
                        <div>
                            <i className="bi bi-badge-cc"></i>
                        </div>
                        <div>{t('No Credit Card')}</div>
                    </div>
                </div> */}
        <div>
          <Link href="https://portal.rightfx.com/register">
            <a className="demo-button-mobile mt-5">
              <span>{t("Get a demo Account")}</span>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
}
