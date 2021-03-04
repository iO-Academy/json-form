document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault()

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

    const jsonData = JSON.stringify(data);

    fetch('post.php', {
        method: 'POST',
        body: jsonData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })


})