import Link from 'next/link';
import {useRouter} from 'next/router';
import { Container, Table } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';


export default function PaymentMethodTable(props) {
    const lang = useRouter().locale || 'en'
    const { t } = useTranslation('deposit-withdrawal');
    return (
        <div className="market-table bg-transparent">
            <Container>
                <div className="pb-4 text-center">
                    <h1 className="fw-300">{t(props.type)}</h1>
                </div>
                <div className="table-responsive bx-shadow mb-5">
                    <Table hover borderless>
                        <thead>
                            <tr>
                                <th dangerouslySetInnerHTML={props.type === 'Withdrawals' && lang === 'ar' ? { __html: t('Payment_Methods_withdrawal') } : { __html: t('Payment_Methods') }}></th>
                                <th className="text-center" dangerouslySetInnerHTML={{ __html: t('Supported_Currencies')}}></th>
                                <th className="text-center" dangerouslySetInnerHTML={props.type === 'Withdrawals' && lang === 'ar' ? { __html: t('Fees_Commissions_withdrawal') } : { __html: t('Fees_Commissions') }}></th>
                                <th className="text-center">{props.type === 'Withdrawals' && lang === 'ar' ? t('Processing Time_withdrawal') : t('Processing Time')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.rows && props.rows.length > 0 && props.rows.map((row, i) =>
                                <tr key={i}>
                                    <td valign="middle"><img src={row.paymentMethodImage} alt="RightFX Payment Method" className="img-fluid" /> {row.productName && t(row.productName)}</td>
                                    <td valign="middle" className="text-center">{t(row.currency)}</td>
                                    <td valign="middle" className="text-center">{t(row.fees)}</td>
                                    <td valign="middle" className="text-center">{t(row.processingTime)}</td>
                                    <td valign="middle" className="text-center">
                                        <button className={`btn btn-payment-method btn-withdrawals`} onClick={() => props.handleButtonClick(row.value)}>{t(props.type)}</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}