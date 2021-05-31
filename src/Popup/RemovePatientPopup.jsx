import ReactDOM from "react-dom";
import styles from './RemovePatientPopup.module.scss';
const RemovePatientPopup = ({isOpen, onReject, onAccept}) => {
    if (!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div className={styles.main}>
            <h1>Czy chcesz usunąć pacjenta?</h1>
            <h4 className={styles.description}>Usunięcie pacjenta oznacza usunięcie wszystkich zawartych w nim danych!</h4>
            <div className={styles.buttons}>
                <button className={styles.accept} onClick={onAccept}>TAK</button>
                <button className={styles.reject} onClick={onReject}>ANULUJ</button>
            </div>
        </div>, document.body
    )
}

export default RemovePatientPopup;