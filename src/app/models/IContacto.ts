export interface IContacto {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  password: string;
  direccion: string;
  dni: string;
  fecha_creac?: Date;
  fecha_modif?: Date;
}
