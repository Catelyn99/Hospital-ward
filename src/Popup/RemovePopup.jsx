import ReactDOM from "react-dom";
import styles from './RemovePopup.module.scss';

const RemovePopup = ({isOpen, onReject, onAccept, name}) => {
    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className={styles.main}>
            <h1>Czy chcesz usunąć {name}?</h1>
            <h4 className={styles.description}>Usunięcie oznacza utratę wszystkich zawartych w nim danych!</h4>
            <div className={styles.buttons}>
                <button className={styles.accept} onClick={onAccept}>TAK</button>
                <button className={styles.reject} onClick={onReject}>ANULUJ</button>
            </div>
        </div>, document.body
    )
}

export default RemovePopup;