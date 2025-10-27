export function hoursBtn() {
    
    const divInto = document.querySelector('#content');

    const topDiv = document.createElement('div');
    topDiv.id = 'topDiv';
    const paIntd = document.createElement('p');
    paIntd.textContent = "Our opening hours";
    topDiv.appendChild(paIntd);
    divInto.appendChild(topDiv);

    const midDiv = document.createElement('div');
    midDiv.id = 'midDiv';
    const paInmd = document.createElement('p');
    paInmd.textContent = "Our closing hours";
    midDiv.appendChild(paInmd);
    divInto.appendChild(midDiv);
}