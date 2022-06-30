
export default function TopTabItem(props) {
    return (
        <div className={`item cursor-pointer ${props.active?'active':''}`} onClick={() => props.onChangeTab(props.title)}>
            <img src={props.image} alt="RightFX Market" />
            <div className="points-data">
                <h4>{props.title}</h4>
                <p className="mb-0">{props.description}</p>
            </div>
        </div>
    )
}