/*criar uma nova linha de inputs que perguntem o nome da tecnologia e o tempo de experiencia com inputs radio,
 tambem deve ter um botão de remover a linha de inputs e o botão cadastrar deve ter a função de salvar os devs em um array*/

function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput (id, value, name, type = "text", placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}
 
const addTechBtn = document.getElementById('addTechBtn') 
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
   const stackInputs = document.getElementById("stackInputs")
   const newRow = document.createElement('li')
   let rowIndex = inputRows
   inputRows++
   newRow.id = "inputRow-" + rowIndex
   newRow.className = "inputRows"

   const techNameLabel = createLabel("Nome: ", "techName-" + rowIndex)
   const techNameInput = createInput("techName-" + rowIndex, null, "techName")
   const expLabel = createLabel("Experiência: ")
   const id1 = 'expRadio-' + rowIndex + '.1'
   const expRadio1 = createInput(id1, "0-2 anos",  'techExp-' + rowIndex, 'radio')
   const expLabel1 = createLabel("0-2 anos", id1)
   const id2 = 'expRadio-' + rowIndex + '.1'
   const expRadio2 = createInput(id2, "2-4 anos",  'techExp-' + rowIndex, 'radio')
   const expLabel2 = createLabel("2-4 anos", id2)
   const id3 = 'expRadio-' + rowIndex + '.1'
   const expRadio3 = createInput(id3, "5+ anos",  'techExp-' + rowIndex, 'radio')
   const expLabel3 = createLabel("5+ anos", id3)

   const removeBtn = document.createElement('button')
   removeBtn.type = 'button'
   removeBtn.innerText = 'Remover'
   removeBtn.addEventListener('click', function(){
      stackInputs.removeChild(newRow)
   })
   newRow.append(
      techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeBtn
   )
   stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev){
   ev.preventDefault()
   const fullnameInput = document.getElementById('fullname')
   const inputRows = document.querySelectorAll('.inputRows')
   let technologies = []

   inputRows.forEach(function (row) {
      const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
      const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

      technologies.push({name: techName , exp: techExp})
   })

   const newDev = {fullname: fullnameInput.value, technologies}
   developers.push(newDev)
   alert('Dev contratado com sucesso!')

   fullnameInput.value = ''
   inputRows.forEach(function(row){
      row.remove()
   })
   console.log(developers)
})
