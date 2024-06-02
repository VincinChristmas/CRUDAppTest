const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')



update.addEventListener('click', _ => {
  fetch('/BookTitles', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Napoleon Hill',
        quote: 'Think And Grow Rich',
      })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    console.log(response)
  })
})

deleteButton.addEventListener('click', _ => {
    fetch('/BookTitles', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Napoleon Hill'
    })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
    
      .then(response => {
        if (response === 'No BookTitles to delete') {
          messageDiv.textContent = 'No Darth Vadar quote to delete'
        } else {
          window.location.reload(true)
        }
      })

      /*.then(data =>{ 
        window.location.reload()
      })*/
       .catch(console.error)

  })