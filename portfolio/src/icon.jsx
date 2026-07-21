function Icon({ image, label, onDoubleClick }) {
    return (
        <div className="icon" onDoubleClick={onDoubleClick}>
            <button><img src={image} /></button>
            <p>{label}</p>
        </div>
    );
}

export default Icon;