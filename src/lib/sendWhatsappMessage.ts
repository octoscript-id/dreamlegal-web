export function sendWhatsappMessage(number:string, message:string) {
    const url = `https://wa.me/${number}?text=${encodeURI(message)}`

    window.open(url, '_blank')
}