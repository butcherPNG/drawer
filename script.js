const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-picker');

let color = 'black';

colorPicker.innerHTML = `
  <div class="color" style="background: black;"></div>
  <div class="color" style="background: gray;"></div>
  <div class="color" style="background: silver;"></div>
  <div class="color" style="background: white;"></div>
  <div class="color" style="background: red;"></div>
  <div class="color" style="background: maroon;"></div>
  <div class="color" style="background: tomato;"></div>
  <div class="color" style="background: orange;"></div>
  <div class="color" style="background: gold;"></div>
  <div class="color" style="background: yellow;"></div>
  <div class="color" style="background: olive;"></div>
  <div class="color" style="background: green;"></div>
  <div class="color" style="background: lime;"></div>
  <div class="color" style="background: teal;"></div>
  <div class="color" style="background: aqua;"></div>
  <div class="color" style="background: blue;"></div>
  <div class="color" style="background: navy;"></div>
  <div class="color" style="background: purple;"></div>
  <div class="color" style="background: fuchsia;"></div>
  <div class="color" style="background: magenta;"></div>
  <div class="color" style="background: orchid;"></div>
  <div class="color" style="background: pink;"></div>
  <div class="color" style="background: coral;"></div>
  <div class="color" style="background: salmon;"></div>
  <div class="color" style="background: chocolate;"></div>
  <div class="color" style="background: sienna;"></div>
  <div class="color" style="background: brown;"></div>
  <div class="color" style="background: beige;"></div>
  <div class="color" style="background: khaki;"></div>
  <div class="color" style="background: oliveDrab;"></div>
  <div class="color" style="background: forestGreen;"></div>
  <div class="color" style="background: slateGray;"></div>
  <div class="color" style="background: midnightBlue;"></div>
`;

colorPicker.addEventListener('click', e => {
  if (e.target.classList.contains('color')) {
    color = e.target.style.background;
  }
});

canvas.addEventListener('mousedown', e => {
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = color;
});

canvas.addEventListener('mousemove', e => {
  if (e.buttons !== 1) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

ctx.lineWidth = 5;

canvas.addEventListener('mousemove', e => {
  if (e.buttons !== 1) return;

  // Увеличение толщины пера на 1 каждые 10 пикселей
  if (ctx.lineWidth < 5) {
    ctx.lineWidth += 1;
  }

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.width = 900;
canvas.height = 440;

const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'my-canvas.png';
  link.href = canvas.toDataURL();
  link.click();
});

const clearButton = document.getElementById('clearButton');

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

clearButton.addEventListener('click', clearCanvas);


ctx.fillStyle = '#FFFFFF'; // устанавливаем цвет заливки - белый
ctx.fillRect(0, 0, canvas.width, canvas.height); 




const colors = document.querySelectorAll('.color');

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('mouseenter', function() {
    this.style.boxShadow = `0 0 7px 1px ${this.style.backgroundColor}`;
  });

  colors[i].addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
}

canvas.addEventListener('mousedown', function(event) {
    context.strokeStyle = selectedColor;
    context.lineWidth = 10;
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(event.offsetX, event.offsetY);
    canvas.addEventListener('mousemove', draw);
  });
  
  canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', draw);
  });
  
  function draw(event) {
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
  }