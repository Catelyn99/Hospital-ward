const blur = () => {
    document.body.style.overflow = "hidden";
    const rootStyle = document.querySelector('#root').style;
    rootStyle.filter = "blur(5px)";
    rootStyle.pointerEvents = "none";
}

const unblur = () => {
    document.body.style.overflow = "initial";
    const rootStyle = document.querySelector('#root').style;
    rootStyle.filter = "initial";
    rootStyle.pointerEvents = "initial";
}

export { blur, unblur };