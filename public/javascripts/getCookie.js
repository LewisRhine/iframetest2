const cookie = document.cookie

document.getElementById('cookieLine').textContent = cookie
console.log('test log')
window.addEventListener(
    "message",
    (event) => {
        console.log(event)
        document.getElementById('cookieLine').textContent = event.data
    },
    false,
);

window.postMessage('this is a test')
