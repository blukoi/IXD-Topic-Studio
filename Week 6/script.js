function distortsvg() {
    const middleSvg = document.getElementById('scroll1');
    const viewportHeight = window.innerHeight;
    const maxScrollableDistance = document.documentElement.scrollHeight - viewportHeight;
    const scrollPosition = window.pageYOffset;
    const scrollPercentage = (scrollPosition / maxScrollableDistance) * 100;
    let svgHeight = (scrollPercentage / 100) * viewportHeight - 100;

    svgHeight = Math.max(svgHeight, 4);
  
    middleSvg.style.height = `${svgHeight}px`;
}

window.addEventListener('scroll', distortsvg);