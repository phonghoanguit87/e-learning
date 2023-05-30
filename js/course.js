document.addEventListener("DOMContentLoaded", function (event) {
    /*===== collapse event =====*/
    const collapseSection = (lnkCollapse) => {
        const elements = document.getElementsByClassName("lnkCollapse");

        const changeIcon = function() {
            const icon = this.querySelector('.fa');
            icon.classList.toggle('fa-angle-up')
        };
        
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', changeIcon, false);
        }
    }

    collapseSection('lnk-topic');
});