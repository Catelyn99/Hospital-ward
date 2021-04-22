const Title = () => {

  const refreshPage = ()=>{
    window.location.reload();
 }
 
    return (
        <h1  onClick={refreshPage}>CHIRURGIA OGÓLNA</h1>
    )
}

export default Title;