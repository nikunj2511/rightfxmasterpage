import Link from 'next/link';
import { Container, Table } from 'react-bootstrap';
import useTranslation from 'next-translate/useTranslation';

export default function MarketTable(props) {
    const { t } = useTranslation('markets');
    return (
        <div className="market-table tieredmrginTbl">
            <Container>
                <div className="table-responsive bx-shadow  mt-5">
                    <div>
                    <h2>
                       {props.heading}
                    </h2>
                    </div>
                    <Table hover borderless>
                        <thead>
                            <tr>
                                <th className="text-center">Margin Tier </th>
                                <th className="text-center">Number of Open LOTS</th>
                                <th className="text-center">Leverage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.rows && props.rows.length > 0
                                && props.rows.map((row, i) =>
                                    <tr key={i}>
                                        <td valign="middle" className="text-center"><strong>{row.tier}</strong></td>
                                        <td valign="middle" className="text-center"><strong> {row.lots}</strong></td>
                                        <td valign="middle" className="text-center"><strong>{row.laverage}</strong></td>
                                    </tr>
                                )}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}