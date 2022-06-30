import Link from 'next/link';

export default function LimitedOfferItem(props) {
    return (
        <div className={`item ${props.active ? 'active' : ''}`}>
            <img src={props.image} alt="RightFX Offers" className="img-fluid" />
            <Link href={props.link}>
                <a className="text-decoration-none">
                    <h5>{props.title}</h5>
                </a>
            </Link>
            <p>{props.description}</p>
        </div>
    )
}