function addMovie(){
    fetch('https://localhost:3000/movie', {
        method: 'POST',
        body: JSON.stringify({key: 'value'}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}