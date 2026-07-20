function Icon(props) {
    return (
        <div className="icon">
            <button><img src={props.image} /></button>
            <p>{props.label}</p>
        </div>
    );
}

export default Icon;