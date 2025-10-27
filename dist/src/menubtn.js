export function menusBtn() {
    
    
    
    const divInto = document.querySelector('#content');

    const topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    const paIntd = document.createElement('p');
    paIntd.textContent = "Delightful Menus";
    topDiv.appendChild(paIntd);
    divInto.appendChild(topDiv);

    const midDiv = document.createElement('div');
    midDiv.id = 'midDiv';
    const paInmd = document.createElement('p');
    paInmd.textContent = "So many dishes to choose from";
    midDiv.appendChild(paInmd);
    divInto.appendChild(midDiv);

    

}