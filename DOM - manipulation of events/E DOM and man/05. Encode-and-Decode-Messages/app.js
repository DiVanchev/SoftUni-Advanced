function encodeAndDecodeMessages() {
    document.querySelector('#main > div:nth-child(1) button').addEventListener('click',(e) => {
        const encodeInputEl = e.target.parentNode.querySelector('textarea');
        const message = encodeInputEl.value;
        const receiverEl = document.querySelector('#main > div:nth-child(2) textarea');
        const encodedMessage = message.split('').map((ch) => String.fromCharCode(ch.charCodeAt() + 1)).join('')
        
        receiverEl.value = encodedMessage;
        encodeInputEl.value = '';
    })  

    document.querySelector('#main > div:nth-child(2) button').addEventListener('click',(e) => {
        const decodeInputEl = e.target.parentNode.querySelector('textarea');
        const message = decodeInputEl.value;

        const decodedMessage = message.split('').map((ch) => String.fromCharCode(ch.charCodeAt() - 1)).join('');

        decodeInputEl.value = decodedMessage
        
    })
}