import { Link } from 'react-router-dom';
import styled from './Title.module.scss';


const Title = () => {

    function refresh() {
        return window.location.reload(true);
    }

    return (
        <Link to="/">
            <h1 onClick={refresh} className={styled.title}>
                CHIRURGIA OGÓLNA
            </h1>
        </Link>
    )
}

export default Title;