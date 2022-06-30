import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'

export default function KeyFeatureItem(props) {
    const { t } = useTranslation('home');
    return (
        // <div className="item h-100" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={props.delay}>
        <div className="item h-100">
            <div className="icon">
                <div className="outer">
                    <div className="inner pulse">
                        <Link href={props.link}>
                            <a>
                                <img src={props.icon} alt="RightFX Key Feature" className="img-fluid" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Link href={props.link}><a  className="lrn-more">{t('Learn More')}</a></Link>
            <Link href={props.buttonLink}><a className="btn btn-primary">{props.buttonText}</a></Link>
        </div>
    )
}