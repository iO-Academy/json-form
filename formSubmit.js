//Find the mailing list form in the DOM using its class name
const form = document.getElementsByClassName('mailingForm')[0];

// Checks that an element has a non-empty `name` and `value` property. 
const isValidElement = element => {
  return element.name && element.value;
};

 //Checks if an element’s value can be saved (e.g. not an unselected checkbox).
const isValidValue = element => {
  return (!['checkbox', 'radio'].includes(element.type) || element.checked);
};

//Checks if an input is a checkbox, because checkboxes allow multiple values.
const isCheckbox = element => element.type === 'checkbox';

//Checks if an input is a `select` with the `multiple` attribute.
const isMultiSelect = element => element.options && element.multiple;

//Retrieves input data from a form and returns it as a JSON object.
const formToObject = elements => [].reduce.call(elements, (data, element) => {

    // Make sure the element has the required properties and should be added.
    if (isValidElement(element) && isValidValue(element)) {
        //Some fields allow for more than one value, so this will check if this is one of those fields and if so, store the values as an array.
        if (isCheckbox(element)) {
          
          data[element.name] = (data[element.name] || []).concat(element.value);
        } else {
          data[element.name] = element.value;
        }
    }

    return data;

}, {});

const postRequest = (data) => {
    //set the root + uri where will we post the data
    const root = 'http://json-form.test/';
    let uri = root + 'post.php';
    
    //set options for the request
    let options = {
        method: 'post',
        mode: 'same-origin',
        credentials: 'same-origin',
        body: JSON.stringify(data, null, "  "),
        redirect: 'follow', 
    }

    //attach the uri + options to the request
    let request = new Request(uri, options);

    //initiate the fetch request and log either the response or catch the error
    fetch(request)
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            console.log(response);
        })
        .catch((error) => {
            console.log('ERROR:' + error.message)
        });
}



function handleFormSubmit(e) {
    // Stop the form from submitting since we’re handling that with AJAX
    e.preventDefault();

    //Call the function to get the form data & store in a new object.
    const data = formToObject(form.elements);

    //call the function to post the request
    postRequest(data);

    //TO DO: add polyfill for fetch api in IE
};
  
//Attach the `handleFormSubmit()` function to the `submit` event
form.addEventListener('submit', handleFormSubmit);;








