export const sitio = {
  nombre: 'Estudio Manrique',
  titulo: 'Estudio Manrique | Abogados en Puerto Maldonado, Madre de Dios',
  descripcion:
    'Estudio de abogados en Puerto Maldonado con más de 40 años de ejercicio. Conflictos inmobiliarios, minería, penal, agricultura y derecho forestal en Madre de Dios.',
  direccion: 'Jr. Moquegua 750',
  ciudad: 'Puerto Maldonado',
  region: 'Madre de Dios',
  whatsappVisible: '+51 982 329 343',
  whatsappNumero: '51982329343',
  whatsappMensaje: 'Hola, tengo una consulta',
  // Perfil de Empresa en Google (identificador CID del lugar)
  perfilGoogle: 'https://maps.google.com/?cid=675553147503306023',
  horario: 'Lunes a sábado, de 7:00 a. m. a 6:00 p. m.',
  horarioDias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  horarioApertura: '07:00',
  horarioCierre: '18:00',
  lat: -12.596340146222591,
  lng: -69.18231302360188,
  anioCopyright: 2027,
};

export const whatsappUrl = `https://wa.me/${sitio.whatsappNumero}?text=${encodeURIComponent(sitio.whatsappMensaje)}`;
export const mapaEmbedUrl = `https://maps.google.com/maps?q=${sitio.lat},${sitio.lng}&z=17&hl=es&output=embed`;
