import type { ImageMetadata } from 'astro';
import inmobiliarios from '../assets/especialidades/conflictos-inmobiliarios.jpg';
import mineria from '../assets/especialidades/mineria.jpg';
import penal from '../assets/especialidades/penal.jpg';
import agricultura from '../assets/especialidades/agricultura.jpg';
import forestal from '../assets/especialidades/forestal.jpg';

export interface Especialidad {
  id: string;
  nombre: string;
  casos: string[];
  imagen: ImageMetadata;
  alt: string;
}

export const especialidades: Especialidad[] = [
  {
    id: 'conflictos-inmobiliarios',
    nombre: 'Conflictos inmobiliarios',
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
