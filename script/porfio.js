
team.set = function (img, option) {

    const content = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./main.js"></script>
    <style> ${team.style}</style>
    <link rel="shortcut icon" href="../img/icon.jpg" type="image/x-icon">
    <title>${option.title}</title>  

</head>

<body>
  <div class="container">
    <div class="portfo">
            <div class="portfo-item1">
                <div class="portfo-item1-img">
                    <img src="${img}" alt="">
                </div>
                <div class="portfo-item1-text">
                    <h2>${option.title}</h2>
                    <h3>Informaticien</h3>
                    <p>${option.moi}</p>
                </div>
            </div>
            <div class="portfo-item2">
            ${option.identity.replace(/:/g, " : ")}
            </div>

    </div>
  </div>
</body>

</html>`;

    return content
}

