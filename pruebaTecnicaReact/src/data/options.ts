// Definición de la interfaz única
interface CatalogoItem {
  value: number;
  text: string;
}

export const OperadorTelefonico:CatalogoItem[] = [
  { value: 1, text: "Telcel" },
  { value: 2, text: "Movistar" },
  { value: 3, text: "AT&T" },
  { value: 4, text: "Bait" },
  { value: 5, text: "Virgin Mobile" },
  { value: 6, text: "Pillofon" },
  { value: 7, text: "FreedomPop" },
  { value: 8, text: "Unefon" },
  { value: 9, text: "Oxxo Cel" },
  { value: 10, text: "Izzi Móvil" },
  { value: 11, text: "Diri" },
  { value: 12, text: "Flash Mobile" }
];

export const EntidadDePertenencia:CatalogoItem[] = [
  { value: 1, text: "México +52" },
  { value: 2, text: "Estados Unidos +1" },
  { value: 3, text: "España +34" },
  { value: 4, text: "Argentina +54" },
  { value: 5, text: "Colombia +57" },
  { value: 6, text: "Chile +56" },
  { value: 7, text: "Perú +51" },
  { value: 8, text: "Canadá +1" },
  { value: 9, text: "Venezuela +58" },
  { value: 10, text: "Ecuador +593" },
  { value: 11, text: "Guatemala +502" },
  { value: 12, text: "Bolivia +591" },
  { value: 13, text: "Honduras +504" },
  { value: 14, text: "El Salvador +503" },
  { value: 15, text: "Paraguay +595" },
  { value: 16, text: "Nicaragua +505" },
  { value: 17, text: "Costa Rica +506" },
  { value: 18, text: "Puerto Rico +1" },
  { value: 19, text: "Panamá +507" },
  { value: 20, text: "Uruguay +598" },
  { value: 21, text: "Brasil +55" },
  { value: 22, text: "República Dominicana +1" },
  { value: 23, text: "Reino Unido +44" },
  { value: 24, text: "Francia +33" },
  { value: 25, text: "Alemania +49" },
  { value: 26, text: "Italia +39" }
];

export const TipoDomicilio:CatalogoItem[] = [
  { value: 1, text: "Particular / Residencial" },
  { value: 2, text: "Trabajo / Oficina" },
  { value: 3, text: "Comercial" },
  { value: 4, text: "Fiscal" },
  { value: 5, text: "Bodega / Almacén" },
  { value: 6, text: "Rancho / Parcela" },
  { value: 7, text: "Departamento" },
  { value: 8, text: "Casa de Huéspedes" },
  { value: 9, text: "Sucursal" }
];

export const TipoDepartamento:CatalogoItem[] = [
  { value: 1, text: "Estudio / Monoambiente" },
  { value: 2, text: "Departamento Estándar" },
  { value: 3, text: "Duplex" },
  { value: 4, text: "Loft" },
  { value: 5, text: "Penthouse" },
  { value: 6, text: "Garden House (con jardín/patio)" },
  { value: 7, text: "Departamento de Lujo / Residencial" },
  { value: 8, text: "Suite" },
  { value: 9, text: "Departamento de Interés Social" }
];