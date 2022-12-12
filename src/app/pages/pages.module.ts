import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarCategoriasModule } from './administrar-categorias/administrar-categorias.module';
import { AdministrarProductosModule } from './administrar-productos/administrar-productos.module';
import { CuentasComponent } from './cuentas/cuentas.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { EspedientesgpvComponent } from './espedientesgpv/espedientesgpv.component';
import { RequisitosgpvComponent } from './requisitosgpv/requisitosgpv.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';



@NgModule({
  declarations: [
    CuentasComponent,
    RequisitosComponent,
    ParametrosComponent,
    SolicitudesComponent,
    ExpedientesComponent,
    EspedientesgpvComponent,
    RequisitosgpvComponent,
    OrganizacionesComponent
  ],
  imports: [
    CommonModule,
    AdministrarCategoriasModule,
    AdministrarProductosModule
  ]
})
export class PagesModule { }
