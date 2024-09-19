function getApi(){

    const ul = document.querySelector('ul')
    ul.innerHTML = ''
    const user = document.querySelector('#user').value
    

    fetch(`https://api.github.com/users/${user}/repos`)
    .then(async res => {

        let data = await res.json()

        data.map(
            item => {
                
           let li = document.createElement('li')
           li.classList.add('m-10')
           let hr = document.createElement('hr')

           li.innerHTML = `<strong> ${item.name} </strong>
           <span>${item.html_url}</span>`
           ul.appendChild(li)
           ul.appendChild(hr)

            }
        )



    })

    .catch(e =>{
        console.log(e);
        ul.innerHTML = ''
        let li = document.createElement('li')
        li.classList.add('m-10')
        li.innerHTML = `<strong> Erro ao buscar Usuário </strong>`
        ul.appendChild(li)
        
        
    }

    )

}
