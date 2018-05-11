// import {Pipe, PipeTransform} from '@angular/core';
// import { Guitar } from "./models/guitar.model";
//
// @Pipe({
//   name: "filter",
//   pure: false
// })
//
// export class FilterResults implements PipeTransform {
//   transform(input: Guitar[], desiredSort) {
//     let output: Guitar[] = [];
//     if (desiredSort === "gear") {
//       for(let i = 0; i < input.length; i++) {
//           output.push(input[i]);
//       }
//     } else if (desiredSort === "NEWEST MODELS") {
//       for(let i = 0; i < input.length; i++) {
//         if(input[i].newness === true) {
//           output.push(input[i]);
//         }
//       }
//     } else if (desiredSort === "THE BIG BODY SOUND") {
//       for(let i = 0; i < input.length; i++) {
//         if(input[i].hollow === true) {
//           output.push(input[i]);
//         }
//       }
//     } else if (desiredSort === "ARTIST MODELS") {
//       for(let i = 0; i < input.length; i++) {
//         if(input[i].artistModel === true) {
//           output.push(input[i]);
//         }
//       }
//     }
//     return output;
//   }
// }
