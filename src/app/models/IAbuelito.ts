export interface IAbuelito {
  id?: string;
  nombre: string;
  fecha_nac: Date;
  edad: string;
  foto: string;
  contactoId: string;
  ciudad: string;
  dni: string;
  descripcion: string;
  // contactoId: string;
  //   TIMESTAMPS
  fecha_creac?: Date;
  fecha_modif?: Date;
}
