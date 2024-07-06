!(function (factory) {
    "use strict";
    factory(globalThis);
})(function (obj_) {

    let team = {};
    function addMember(element, option) {
        const card = document.createElement("div")
        card.className = "teams-card"
        const imgCard = document.createElement("div")
        imgCard.className = "team-img-card"
        const picture = document.createElement("img")
        picture.src = option.img
        imgCard.append(picture)
        card.append(imgCard);

        const title = document.createElement("p")
        title.className = "team-card-title";
        title.innerHTML = `<span>@</span>${option.title}\n<p>${option.bio}</p>`

        const foot = document.createElement("div");
        foot.className = "team-card-foot"
        foot.append(title);

        const btn = document.createElement("p");
        btn.textContent = "En savoir plus";

        btn.className = "btn"
        foot.append(btn)
        card.append(foot)
        element.append(card)

        btn.onclick = async function (e) {

            fetch(picture.src).then(async (data) => {
                const b = await data.blob();
                const reader = new FileReader()
                reader.onload = function (e) {
                    let link = document.createElement("a");
                    let content = team.set(e.target.result, option)

                    let file = new Blob([content], { type: "text/html; utf-8" });
                    link.href = URL.createObjectURL(file)
                    link.click();
                }
                reader.readAsDataURL(b)
            })

        }
    }


    obj_.team = team;
    obj_.addMember = addMember;

    fetch(location.href + "/../style/identity.css").then(async (data) => {
        const txt = await data.text()
        team.style = txt
    })
})