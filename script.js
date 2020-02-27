fetch('http://localhost:3000')
.then(response => response.json())
.then((menu) => {
  const menuContainer = document.querySelector('#menu')
  menu.forEach((coffee)  => {
  const name = document.createElement('p')
        name.textContent = coffee.name
        menuContainer.appendChild(name)

  })
})
