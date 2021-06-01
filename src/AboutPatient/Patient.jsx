import { useContext } from "react";
import { Context } from "../Store/Store";
import styles from "./Patient.module.scss";
import PatientForm from "./PatientForm";

const Patient = (props) => {

  const [state, dispatch] = useContext(Context);

  const goBack = () => {
    props.history.goBack()
  }

  const url = props.match.url.split('/');
  const roomId = Number(url[3]);
  const areaId = Number(props.match.params.id);
  const patient = state.rooms.find(room => room.id === roomId).areas.find(area => area.id === areaId).bed;

  return (
    <>
      <nav className={styles.navigation}>
        <button className={`${styles.navItem} ${styles.back}`} onClick={goBack}>Powrót</button>
        <div className={styles.navItem}>Edytuj</div>
        <div className={styles.navItem}>Wskazówki</div>
        <div className={styles.navItem}>Historia</div>
      </nav>
      <div className={styles.information}>
        <div>
          <h2>Imię i nazwisko:</h2>
          <span className={styles.inInfo}>{patient.name}</span>
        </div>
        <div>
          <h2>Wiek:</h2>
          <span className={styles.inInfo}>{patient.age}</span>
        </div>
        <div>
          <h2>Diagnoza:</h2>
          <span className={styles.inInfo}>{patient.diagnosis}</span>
        </div>
        <div>
          <h2>Zlecenia:</h2>
          <span className={styles.inInfo}>{patient.tasks}</span>
        </div>
        <div>
          <h2>Uwagi:</h2>
          <span className={styles.inInfo}>{patient.comments}</span>
        </div>
      </div>
    </>
  )
}

export default Patient;