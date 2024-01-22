/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_fmtljvk','template_l4d732n','#contact-form','5awoUKFE1AJaRGIGh')
    .then(() => {
        //mensagem enviada exibir
        contactMessage.textContent = 'Mensagem enviada com sucesso✅'

        //remover mensagem depois de 5 segundos
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //limpar campos de input
        contactForm.reset()
    }, () =>{
        //mostrar mensagem de erro
        contactMessage.textContent = 'Mensagem não enviada (Erro de Serviço)❌'
    })
}

contactForm.addEventListener('submit', sendEmail)