import Link from 'next/link';
import { Container, Table } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function MarketTable(props) {
    const { t } = useTranslation('markets');
    return (
        <div className="market-table">
            <Container>
                <div className="table-responsive bx-shadow">
                    <Table hover borderless>
                        <thead>
                            <tr>
                                <th>{t('Product')}</th>
                                <th className="text-center">{t('Margin Per System Lot')}</th>
                                <th className="text-center">{t('Average Spread')}</th>
                                <th className="text-center">{t('Trading Hours_Timing')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.rows && props.rows.length > 0
                                && props.rows.filter(x => !props.selectedTab || !x.type || x.type === props.selectedTab).map((row, i) =>
                                    <tr key={i}>
                                        <td valign="middle" className="market-flags">
                                            {(row.flag1 || row.flag2) &&
                                                <span className="d-inline-flex me-3 align-middle">{row.flag1 && <img src={row.flag1} alt="RightFX Market" className="img-fluid" />}{row.flag2 && <img src={row.flag2} alt="RightFX Market" className="img-fluid" />}</span>
                                            }
                                            {row.productName}
                                        </td>
                                        <td valign="middle" className="text-center">{row.margin}</td>
                                        <td valign="middle" className="text-center">{row.average}</td>
                                        <td valign="middle" className="text-center">{row.tradingHours}</td>
                                    </tr>
                                )}
                        </tbody>
                        {props.isViewAll &&
                            <tfoot>
                                <tr>
                                    <td colSpan="4"><Link href={props.viewAllLink}><a className="view-all">{t('View all')}</a></Link></td>
                                </tr>
                            </tfoot>
                        }
                    </Table>
                </div>
            </Container>
        </div>
    )
}