document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('#form').onsubmit = () => {

        //Initialize new request
        const request = new XMLHttpRequest();
        const currency = document.querySelector('#currency').value;
        request.open('POST', '/convert');

        // Callback function for when request complete
        request.onload = () => {

            // Extract json data from request
            const data = JSON.parse(request.responseText);

            // Update the result
            if (data.success) {
                const contents = `1 USD is equal to ${data.rate} ${currency}.`
                document.querySelector('#result').innerHTML = contents;

            }
            else {
                document.querySelector('#result').innerHTML = 'There was an error!'
            }
        }
        // Add data to send request
        const data = new FormData();
        data.append('currency', currency);

        // Send Request
        request.send(data);
        return false;

    }
});

