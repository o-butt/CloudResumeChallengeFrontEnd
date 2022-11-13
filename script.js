console.log('wow, such visitors.');

fetch('https://ga82v3zdxf.execute-api.us-east-1.amazonaws.com/prod/GET')
    .then(response => response.json())
    .then((data) => {
        document.getElementById('idgoeshere').innerText = data.count
    })