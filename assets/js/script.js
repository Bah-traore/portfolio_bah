"use strict"
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const cursdyn = document.getElementById('cursDyn')
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const msgInput = document.getElementById("message")
  



btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
    const isclickInMenu = menu.contains(event.target)
    const isclickOnMenu = btn.contains(event.target)
    if(!isclickInMenu && !isclickOnMenu) {
        menu.classList.add("hidden")
    }
})

// Cursus tableau
const dbs = [['2014 - 2015', "diplome d'etude fondamentale"], ["2019 - 2020", "Baccalaureat"], ["2022 - 2025", "Licence III <span class='italic'>IG </span>"]]
console.log(dbs.length)
function dbdyn (db) {
    if (typeof db === 'object' && db.length >= 0) {
        let i = 0
        while (i < dbs.length){
            const ul = document.createElement('ul')
            ul.className = 'grid grid-cols-2 text-white max-sm:text-[12px]'
            ul.innerHTML = `
                        <li class="inline border-b-2">
                            ${db[i][0]}
                        </li>
        
                        <li class="inline border-t-2 border-green-900">
                            ${db[i][1]}
                        </li>
                    `
            cursdyn.insertBefore(ul, cursdyn.firstChild)
            i++
            console.log(i)
        }
    }
}
dbdyn(dbs)


// recuperation Form Enter
//nameInput.


