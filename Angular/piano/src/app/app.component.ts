import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'piano';

  public playSound(sound: string) {
    let audio = new Audio();
    audio.src = `../../assets/sounds/${sound}.wav`;
    audio.load();
    audio.play();
  }
}
