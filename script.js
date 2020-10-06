document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault()


    // option 1
    // const data = {
    //     name: document.querySelector('[name="name"]').value,
    //     petName: document.querySelector('[name="petName"]').value,
    //     favColor: document.querySelector('[name="favColour"]').value,
    //     favCar: document.querySelector('[name="favCar"]').value,
    //     goldenEye: document.querySelector('[name="goldeneye"]').value,
    //     heardAbout: document.querySelector('[name="marketing"]').value,
    //     email: document.querySelector('[name="email"]').value,
    //     recieveEmails: document.querySelector('[name="receiveEmails"]').checked,
    //     mario: document.querySelector('[name="marioKart"]').checked
    // }

    // option 2
    const data = {}
    document.querySelectorAll('input, select').forEach((field) => {
        if (field.type === 'checkbox') {
            data[field.name] = field.checked
        } else if (field.name == 'receiveEmails') {
            data[field.name] = !field.checked
        } else {
            data[field.name] = field.value
        }
    })

    console.log(JSON.stringify(data));


})