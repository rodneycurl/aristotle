import { getBoxStyle } from 'react-armory-spiral'

const boxes = []
for (let i = 1; i <= 15; i++) {
  let content = ''
  if (i % 3 === 0) content += 'Fizz'
  if (i % 5 === 0) content += 'Buzz'
  if (content === '') content = String(i)
  else content = React.createElement('strong', {}, content)
  boxes.push(
    React.createElement('div', { style: getBoxStyle(i - 1), key: i }, content),
  )
}

ReactDOM.render(
  React.createElement('div', {}, boxes),
  document.getElementById('app')
)
