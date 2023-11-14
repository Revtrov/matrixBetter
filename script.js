let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = (window.innerHeight/100)*16;
let characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ",
  "ァ",
  "ィ",
  "ゥ",
  "ェ",
  "ォ",
  "ー",
  "ぁ",
  "ぃ",
  "ぅ",
  "ぇ",
  "ぉ",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

ctx.font = "1vmin monospace";
let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

let createCells = (x, y) => {
  return Array(x * y).fill(0);
};
let x = Math.floor(canvas.width/10) ;
let y = Math.floor(canvas.height/10);
let cells = createCells(x, y);
let cellBacks = createCells(x, y);
for (i in cells) {
  cells[i] = characters[getRandomInt(0, characters.length)];
}
for (i in cellBacks) {
  cellBacks[i] = getRandomInt(0, 100) / 100;
}
let udpateCells = () => {
  let newRow = Array(x).fill(0);
  for (i in newRow) {
    newRow[i] = characters[getRandomInt(0, characters.length)];
  }
  let noLast = cells.slice(0, -x);
  cells = newRow.concat(noLast);
  newRow = Array(x).fill(0);
  for (i in newRow) {
    newRow[i] = getRandomInt(0, 50) / 100;
  }
  noLast = cellBacks.slice(0, -x);
  cellBacks = newRow.concat(noLast);
};
let drawMatrix = (cells, x, y) => {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      ctx.fillStyle = `rgba(0, 255, 0, ${cellBacks[j * x + i]})`;
      cellBacks[j * x + i] *= (getRandomInt(0, 70) / 40) * (1.5-(j/(y/.65)))
      ctx.fillText(
        cells[j * x + i],
        (canvas.width / x) * i + canvas.width / x / 4,
        (canvas.height / y) * j + canvas.height / y / 1.5
      );
    }
  }
};
setInterval(() => {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  drawMatrix(cells, x, y);
  udpateCells();
}, 100);
