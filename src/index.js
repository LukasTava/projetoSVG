function searchCity(){

    const city = document.getElementById('city').value;

    async function searchSvg(){
        const response1 = await fetch(`http://localhost:3000/getSvg/${city}`);
        return response1;
    }

    async function viewBoxfunc(){
        const response2 = await fetch(`http://localhost:3000/getViewBox/${city}`);
        return response2;
    }

    searchSvg().then(res => {
        return res.json();}).then(res => {
            document.getElementById('svgDraw').setAttribute('d', res[0].st_assvg);
    })

    viewBoxfunc().then(res => {
        return res.json();}).then(res =>{
            document.getElementById('svg').setAttribute('viewBox', res[0].getviewbox);
    })

}

