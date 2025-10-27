export function initialloadPage() {
    
    const divInto = document.querySelector('#content');

    const topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    const paIntd = document.createElement('p');
    paIntd.textContent = "Treaty delight for all";
    topDiv.appendChild(paIntd);
    divInto.appendChild(topDiv);

    const midDiv = document.createElement('div');
    midDiv.id = 'midDiv';
    const paInmd = document.createElement('p');
    paInmd.textContent = "All refreshing menus and drinks to choose from";
    midDiv.appendChild(paInmd);
    divInto.appendChild(midDiv);

    const locaDiv = document.createElement('div');
    locaDiv.id = 'locaDiv';
    const paInloca = document.createElement('p');
    paInloca.textContent = "location";
    locaDiv.appendChild(paInloca);
    divInto.appendChild(locaDiv);

}

