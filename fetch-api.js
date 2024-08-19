//key=n1aUlw4Sso54k28c0E2HgTI3LRQKu7dq

const apiKey = 'n1aUlw4Sso54k28c0E2HgTI3LRQKu7dq'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey}`)

peticion
    .then( resp => resp.json() )
    .then(({ data })  => {
       const {url} = data.images.original
        console.log(data)
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch( console.warn)
