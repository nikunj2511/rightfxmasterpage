import Link from 'next/link';

export default function WhyRightFXItem(props) {
    return (
        <>
            {/* <Link href={props.link}>
             <a className={`text-decoration-none item`}> */}
            <div className="item">
                <img src={props.icon} alt="Why RightFX" />
                <div className="data">
                    <h4 className={props.titleColor}>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            {/* </a>
         </Link> */}
        </>
    )
}