
function linkButton(id, link) {
    document.getElementById(id).addEventListener('click',
        function () {
            window.open(link, '_blank');
        });
}

linkButton('sponsors-button', 'https://drive.google.com/file/d/1dZLfdYeRiNUdpIZu6abrHnSioDC2V1ol/view?usp=sharing');
linkButton('register-button', 'https://microhacks.devpost.com/');