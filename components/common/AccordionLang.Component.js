import AccordionComp from 'react-bootstrap/Accordion';
import useTranslation from 'next-translate/useTranslation';

export default function AccordionLang(props) {
    const { t } = useTranslation('career');
    return (
        <AccordionComp  {...(!props.isCollapseAll && { defaultActiveKey: "0" })}>
            {props.items && props.items.map((item, i) =>
                <AccordionComp.Item key={i} eventKey={i + ''}>
                    <AccordionComp.Header>{props.icon && <img src={props.icon} className="me-3 w-40p" />}{item.rep_title[0].text}</AccordionComp.Header>
                    <AccordionComp.Body>
                        {item.rep_body.map((body, j) => {
                            switch (body.type) {
                                case 'paragraph':
                                    return <p key={i + '_' + j} className={body.class} dangerouslySetInnerHTML={{ __html: body.text }}></p>
                                case 'h5':
                                    return <h5 key={i + '_' + j} className={body.class} dangerouslySetInnerHTML={{ __html: body.text }}></h5>
                                case 'h4':
                                    return <h4 key={i + '_' + j} className={body.class} dangerouslySetInnerHTML={{ __html: body.text }}></h4>
                                case 'h3':
                                    return <h3 key={i + '_' + j} className={body.class} dangerouslySetInnerHTML={{ __html: body.text }}></h3>
                                case 'list-item':
                                    return <ul key={i + '_' + j} className={body.class}>
                                        {body.items && body.items.map((listItem, listIndex) =>
                                            <li key={listIndex} dangerouslySetInnerHTML={{ __html: listItem }}></li>
                                        )}
                                    </ul>
                            }
                        })}

                        {props.isUpload &&
                            <div className="d-flex w-100 position-relative btn-upload">
                                <label className="form-control d-flex align-items-center cursor-pointer">
                                    <input type="file" placeholder="Email address" className="form-control d-none" />
                                    {t('Submit Your CV')}
                                </label>
                                <button type="submit" className="btn btn-primary">{t('Join Our Team')}</button>
                            </div>
                        }
                    </AccordionComp.Body>
                </AccordionComp.Item>
            )}
        </AccordionComp>
    );
}