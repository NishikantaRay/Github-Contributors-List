const getData = async () => {
    const api = "https://api.github.com/repos/SWITCH-CLUB/ASCI-2021/contributors";
    try {
        let data = await fetch(api);
        realData = await data.json();
        console.log(realData);
        realData.forEach(element => {
            const bo_dy = document.createElement('div');
            bo_dy.innerHTML = `
                            <div class=" card mt-5 card_red text-center">
                                <div class="title">
                                <img src="${element.avatar_url}" alt="" id="imgbg" >
                                <div class="mt-3">
                                <h4>${element.login}</h4>
                                <p class="commit">Total Commits-${element.contributions}</>
                                <a class="link" href="${element.html_url}">GitHub</a>
                                </div>
                            </div>`
            let row = document.getElementById("rowdy");
            row.appendChild(bo_dy);
        });
    } catch (error) {
        console.log(error);
    }
};

getData();

// html_url