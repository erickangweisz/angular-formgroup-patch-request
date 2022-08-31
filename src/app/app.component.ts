import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup: FormGroup;
  public valuesChanged: Array<any> = [];

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.buildForm();
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public onSubmit() {
    this.valuesChanged = [];
    // Iteramos los controles del formulario
    Object.keys(this.formGroup.controls).map((key) => {
      // Creamos un objeto con la propiedad changed para saber si el control ha sido modificado
      const parsedValue = {
        [key]: this.formGroup.get(key).value, // key representa el nombre del control iterado
        changed: this.formGroup.get(key).dirty, // con esta línea identificamos que el control ha sido modificado
      };

      // comprobamos si el control ha sido modificado, y si es así, hacemos push en el array
      if (parsedValue.changed) {
        this.valuesChanged.push({ [key]: this.formGroup.get(key).value });
      }
    });

    console.log('patch request!', this.valuesChanged);
  }
}
