const students = [
  {
    name: "Ana",
    firstNote: 7,
    secondNote: 8.5,
  },
  {
    name: "Bia",
    firstNote: 9,
    secondNote: 7,
  },
  {
    name: "Caio",
    firstNote: 5.5,
    secondNote: 8,
  }
]

function calculateAverage (firstNote, secondNote) {
  return ((firstNote + secondNote) / 2).toFixed(2);
}

function printStudentsAverage (student) {
  if(calculateAverage(student.firstNote, student.secondNote) < 7) {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${calculateAverage(student.firstNote, student.secondNote)}
      Não foi dessa vez, ${student.name}! Tente novamente!`)
  } else {
    return alert(`A média do(a) aluno(a) ${student.name} é: ${calculateAverage(student.firstNote, student.secondNote)}
      Parabéns, ${student.name}! Você foi aprovado no concurso!`)
  }
}

for (let student of students) {
  printStudentsAverage(student)
}