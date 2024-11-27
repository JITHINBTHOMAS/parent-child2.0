import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child2.0';

  EnterName = "Monkey D Luffy"
  EnterAge="22"
  EnterStatus="Single"
  filePath=""
  ParentData1 = ""
  ParentData2 = ""
  ParentData3 = ""
  parentData4=""

  transferData(){
    this.ParentData1=this.EnterName
    this.ParentData2=this.EnterAge
    this.ParentData3=this.EnterStatus
    this.parentData4=this.filePath
  }

  value=""
  sendData(value:string){
    this.value=value;
  }

  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
    }
  }
}
