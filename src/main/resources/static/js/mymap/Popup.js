(function () {

    let popup = {
        closePopup : o2.mymap.Popup.closePopup,
    }

    document.querySelector("#close").addEventListener("click", popup.closePopup);

})()