class FormSubmit{
    constructor(settings){
        this.settings= settings;
        this.form = document.querySelector(settings.form);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }


displaySucess(){
    this.form.innerHTML = this.settings.success;
}
displayError(){
    this.form.innerHTML =  this.settings.error;
} 
getFormObject(){
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
}
 onSubmission(event){
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerHTML = "Enviando...";
 }
async sendForm(event){
   try {    await fetch(this.url, {
            method:"POST",
            headers:{
                "content-Type": "apllication/json",
                accept: "application/json",
            },
            body: JSON.stringify(this.getFormObject()),
        });
        this.displaySucess();
    } catch (error) {
       this.displayError(); 
       throw new Error(error);
    }
}

init(){
    if(this.form) 
        this.formButton.eddEventListener("click", this.sendForm);
    return this;
}

}

// const FormSubmit = new FormSubmit({
//     form: "[data-form]",
//     button: "[data-button]",
//     success: "<h1 class='sucesso'>Mensagem enviada com sucesso!</h1>",
//     error: "<h1 class='error'>Não foi possível enviar sua mensagem</h1>",
// });
// FormSubmit.init();