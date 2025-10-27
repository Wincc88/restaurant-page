export function contactBtn() {
    
    const divInto = document.querySelector('#content');

    const midDiv = document.createElement('div');
    midDiv.id = 'midDiv';
    const paInmd = document.createElement('p');
    paInmd.textContent = "Contact us at: 123-456-7890 or email us at we@menu.com for any inquiries.";
    midDiv.appendChild(paInmd);
    divInto.appendChild(midDiv);

}