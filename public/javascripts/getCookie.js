const cookie = document.cookie

document.getElementById('cookieLine').textContent = cookie

window.addEventListener(
    "message",
    (event) => {
        console.log(event)
        document.getElementById('cookieLine').textContent = event.data
    },
    false,
);