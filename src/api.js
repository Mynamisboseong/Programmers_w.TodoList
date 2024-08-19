export function request (url, successCallback, failcallback) {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("load", (e) => {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                successCallback(JSON.parse(xhr.responseText))
            } else {
                failcallback(xhr.statusText)
            }
        }
    })
    xhr.addEventListener('error', (e) => failcallback(xhr.statusText))

    xhr.open('GET', url)
    xhr.send()
}