import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function AccordionCust(props) {
    const { t } = useTranslation('trading-faq');
    const [selected, setSelected] = useState(0);

    const toggleSelected = (value) => {
        const isMobileWidth = window.innerWidth < 768;
        if (value == selected && isMobileWidth)
            setSelected(-1);
        else
            setSelected(value);
    }

    return (
        <div className="accordion custom-accordion row">
            <div className="col">
                {props.items && props.items.map((item, i) =>
                    <div className="accordion-item" key={i}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${i !== selected ? 'collapsed' : ''}`} onClick={() => toggleSelected(i)} type="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                {t(item.header)}
                            </button>
                        </h2>
                        <div className={`d-md-none accordion-collapse collapse ${selected === i ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <p dangerouslySetInnerHTML={{ __html: t(item.body) }}></p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {selected !== -1 && props.items && props.items.length > 0 ?
                <div className={`d-none d-md-block col accordion-collapse collapse show`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p dangerouslySetInnerHTML={{ __html: t(props.items[selected].body) }}></p>
                    </div>
                </div>
                : <></>
            }
        </div>
    );
}