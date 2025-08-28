import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tea_project';

  constructor() {
  }



//   let icons = {
//     header: "defaultIcon",
//     activeHeader: "selectedIcon"
//   };
//
//   $("#accordion").accordion({
//                               heightStyle: "content",
//                               collapsible: true,
//                               icons: icons
//                             });
//
//
//   let index = $('#index')
//   $('.formButton').on('click', function () {
//     let flag = true
//     for (let i of $('.orderForm')) {
//       if ($(i).val().length === 0) {
//         alert('Заполните ' + $(i).prev().text())
//         flag = false
//       }
//     }
//
//     if ($(index).val().length !== 6) {
//       alert('Индекс должен содержать 6 символов')
//       flag = false
//     }
//
//     if (flag === true) {
//       $('.makeOrder').css('display', 'none')
//       $('.popup').attr('class', 'popup w-50 mx-auto d-block wow animate__animated animate__bounceIn')
//     }
//   })
//
//   index.on("keydown", (e) => {
//   let number = parseInt(e.key);
//   if (e.key === 'Backspace') {
//   return e.key;
// }
// else if (isNaN(number)) {
//   alert('Индекс должен состоять из цифр')
//   return false
// }
// })
}
