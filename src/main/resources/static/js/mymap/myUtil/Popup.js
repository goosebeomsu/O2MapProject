(function (){

    let _class = {
        renderPopup : function (propertiesData) {
            let html = "";
            const keys = Object.keys(propertiesData);

            for (const key of keys) {
                html += `<li>${key}: ${propertiesData[key]}</li>`;
            }

            document.querySelector(".inner-popup").innerHTML = html;




        //     document.querySelector(".inner-popup").innerHTML = `
        //         <li>${keys[0]}: ${values[0]}</li>
        //         <li>${keys[1]}: ${values[1]}</li>
        //         <li>${keys[2]}: ${values[2]}</li>
        // `;
        },


        // renderPopup : function (keys, values) {
        //     document.querySelector(".inner-popup").innerHTML = `
        //         <li>${keys[0]}: ${values[0]}</li>
        //         <li>${keys[1]}: ${values[1]}</li>
        //         <li>${keys[2]}: ${values[2]}</li>
        // `;
        // },

      /*  getPopupHtml : function (keys, values) {
            return `
                <li>${keys[0]}: ${values[0]}</li>
                <li>${keys[1]}: ${values[1]}</li>
                <li>${keys[2]}: ${values[2]}</li>
        `
        },*/

        showPopup : function (){
            document.querySelector(".background").className = "background show";
        },

        closePopup :  function () {
            document.querySelector(".background").className = "background";
        },

    }

    o2.mymap = Object.assign(o2.mymap || {}, {
        Popup : _class
    });


})()