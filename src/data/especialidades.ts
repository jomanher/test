import type { ImageMetadata } from 'astro';
import inmobiliarios from '../assets/especialidades/conflictos-inmobiliarios.jpg';
import mineria from '../assets/especialidades/mineria.jpg';
import penal from '../assets/especialidades/penal.jpg';
import agricultura from '../assets/especialidades/agricultura.jpg';
import forestal from '../assets/especialidades/forestal.jpg';

export interface Especialidad {
  id: string;
  nombre: string;
  resumen: string;
  casos: string[];
  imagen: ImageMetadata;
  alt: string;
}

export const especialidades: Especialidad[] = [
  {
    id: 'conflictos-inmobiliarios',
    nombre: 'Conflictos inmobiliarios',
    resumen:
      'Saneamos y defendemos la propiedad de terrenos urbanos y rurales: títulos, inscripción en SUNARP, invasiones y superposición de predios, un problema frecuente en la expansión de Puerto Maldonado.',
    casos: [
      'Títulos e inscripción en SUNARP',
      'Invasiones y desalojo',
      'Reivindicación: defensa del derecho de propiedad',
      'Prescripción adquisitiva de dominio',
      'Superposición de predios, linderos y títulos',
    ],
    imagen: inmobiliarios,
    alt: 'Maqueta de una casa sobre un escritorio con documentos de propiedad',
  },
  {
    id: 'mineria',
    nombre: 'Minería',
    resumen:
      'Acompañamos a mineros de Madre de Dios en su formalización y en la defensa de sus derechos: petitorios, concesiones, contratos de explotación y conflictos con concesiones o predios superpuestos.',
    casos: [
      'Formalización minera y REINFO',
      'Petitorios y concesiones',
      'Contratos de cesión y explotación',
      'Conflictos con concesiones o predios superpuestos',
    ],
    imagen: mineria,
    alt: 'Zona de minería aluvial con dragas sobre agua turbia',
  },
  {
    id: 'penal',
    nombre: 'Penal',
    resumen:
      'Defensa técnica desde la investigación preliminar hasta el juicio oral, con experiencia en los delitos que más se investigan en la región.',
    casos: [
      'Delitos ambientales: minería ilegal y tala',
      'Usurpación y daños: defensa frente a estos delitos',
      'Delitos contra la administración pública',
      'Cobertura procesal',
    ],
    imagen: penal,
    alt: 'Esposas junto al martillo de un juez sobre una mesa de madera',
  },
  {
    id: 'agricultura',
    nombre: 'Agricultura',
    resumen:
      'Formalizamos la tierra de quienes la trabajan: titulación de predios rústicos, constancias de posesión, contratos agrarios y conflictos entre parceleros o asociaciones.',
    casos: [
      'Titulación de predios rústicos',
      'Constancias y certificados de posesión',
      'Contratos agrarios',
      'Conflictos entre parceleros o asociaciones',
      'Linderos y servidumbres',
    ],
    imagen: agricultura,
    alt: 'Agricultor trabajando en un cultivo de hortalizas',
  },
  {
    id: 'forestal',
    nombre: 'Forestal',
    resumen:
      'Asesoramos a titulares de concesiones forestales, de castaña y de shiringa, y los defendemos en procedimientos sancionadores ante OSINFOR y la autoridad forestal regional.',
    casos: [
      'Concesiones de castaña y madera',
      'Planes de manejo y permisos',
      'Procedimientos ante OSINFOR',
      'Defensa en procedimientos sancionadores',
    ],
    imagen: forestal,
    alt: 'Manos sosteniendo un árbol pequeño con su tierra',
  },
];
