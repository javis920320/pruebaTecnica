/* 
Se te proporciona un arreglo de capacidades de doctores doctorsCapacities, que
representa el número de horas que cada doctor puede dedicar a la atención de pacientes, y
un objetivo attentionHours, que representa el total de horas de atención necesarias por los
pacientes. Debes determinar el mínimo número de doctores requeridos para cubrir la
cantidad de horas de atención objetivo. Cada doctor puede ser utilizado múltiples veces si
es necesario. La respuesta debe ser exacta (no pueden sobrar horas). Si no existe una
combinación exacta para cumplir con las horas se debe retornar -1.
Por ejemplo, dado doctorsCapacities = [3, 5, 8] (donde cada número representa la
capacidad de un doctor en horas) y attentionHours = 14, el mínimo número de doctores
requeridos para cubrir 14 horas de atención sería 3 (utilizando un doctor con una
capacidad de 8 horas y dos doctores con una capacidad de 3 horas cada uno). */





export function minDoctoresRequeridos(doctorsCapacities, attentionHours) {
 //desarrollo del algoritmo
 const dp = new Array(attentionHours + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= attentionHours; i++) {
    for (let j = 0; j < doctorsCapacities.length; j++) {
      if (doctorsCapacities[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - doctorsCapacities[j]]);
      }
    }
  }

  return dp[attentionHours] === Infinity ? -1 : dp[attentionHours];

}

//ejemplo de prueba - atencion la suite de pruebas está en el archivo  .test.js

const doctorsCapacities = [3, 5, 8];
const attentionHours = 14;
console.log(minDoctoresRequeridos(doctorsCapacities, attentionHours)); // Salida: 3 (doctor de 8 horas + 2 doctores de 3 horas = 14 horas)
 
