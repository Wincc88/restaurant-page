

export function homeBtn() {
    
    
    
    const divInto = document.querySelector('#content');

    const topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    const paIntd = document.createElement('p');
    paIntd.textContent = "Welcome to our restaurant";
    topDiv.appendChild(paIntd);
    divInto.appendChild(topDiv);

    const midDiv = document.createElement('div');
    midDiv.id = 'midDiv';
    const paInmd = document.createElement('p');
    paInmd.textContent = "A place for fulfilling meals and memories";
    midDiv.appendChild(paInmd);
    divInto.appendChild(midDiv);

    const locaDiv = document.createElement('div');
    locaDiv.id = 'locaDiv';
    const paInloca = document.createElement('p');
    paInloca.textContent = "We are always here to serve you better";
    locaDiv.appendChild(paInloca);
    divInto.appendChild(locaDiv);

    

}