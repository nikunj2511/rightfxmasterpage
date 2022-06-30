export default function Blockquote(props) {
    return (
        <div className={`cust-blockquote ${props.className ? props.className : ''}`}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}