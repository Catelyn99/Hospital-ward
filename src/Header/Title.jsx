import styled from './Title.module.scss';


const Title = () => {

    function refresh() {
          return window.location.reload(true);
    }

    return (
        <h1 onClick={refresh} className={styled.h1}>CHIRURGIA OGÓLNA</h1>
    )
}

export default Title;