import ReactDOM from "react-dom";
const RemoveBedPopup = ({isOpen, onReject, onAccept}) => {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div>
            <h1>Czy chcesz usunąć łóżko?</h1>
            <h2>Usunięcie łóżka oznacza usunięcie wszystkich zawartych w nim danych!</h2>
            <div>
                <button onClick={onAccept}>TAK</button>
                <button onClick={onReject}>NIE</button>
            </div>
        </div>, document.body
    )
}

export default RemoveBedPopup;