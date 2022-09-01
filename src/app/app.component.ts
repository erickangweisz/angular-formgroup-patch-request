import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup: FormGroup;
  public objectPatched: Object;

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
    this.objectPatched = {};

    // Iteramos los controles del formulario
    Object.keys(this.formGroup.controls).map((key: string) => {
      // Creamos un objeto con la propiedad changed para saber si el control ha sido modificado
      const parsedValue = {
        [key]: this.formGroup.get(key).value, // key representa el nombre del control iterado
        changed: this.formGroup.get(key).dirty, // con esta línea identificamos que el control ha sido modificado
      };

      // comprobamos si el control ha sido modificado, y si es así, hacemos push en el array
      if (parsedValue.changed) {
        this.objectPatched[key] = this.formGroup.get(key).value;
      }
    });

    // En este punto ya tendríamos el objeto sólo con los valores modificados con el que hacer una petición patch
    console.log('patch request here!', this.objectPatched);

    // Por último marcamos los controles del formulario a limpio
    this.formGroup.markAsPristine();
  }
}
