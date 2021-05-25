import { Link } from 'react-router-dom';
import styled from './Title.module.scss';


const Title = () => {

    return (
        <Link to="/Hospital-ward">
            <h1 className={styled.title}>
                CHIRURGIA OGÓLNA
            </h1>
        </Link>
    )
}

export default Title;