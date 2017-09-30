import { Component, Input } from '@angular/core';


@Component({
  selector: 'red',
  template: `<div style="color: red; width: 50px; height: 50px"></div>`
})
export class RedComponent {
}

@Component({
  selector: 'blue',
  template: `<div style="color: blue; width: 50px; height: 50px"></div>`
})
export class BlueComponent {
}

@Component({
  selector: 'yellow',
  template: `<div style="color: yellow; width: 50px; height: 50px"></div>`
})
export class YellowComponent {
}

@Component({
  selector: 'green',
  template: `<div style="color: green; width: 50px; height: 50px"></div>`
})
export class GreenComponent {
}

export const ColorSwitchComponent =
  [ RedComponent, BlueComponent, YellowComponent, GreenComponent ];
