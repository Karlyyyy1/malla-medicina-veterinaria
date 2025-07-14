const ramos = [
  { id: "VET0010", nombre: "Introducción a Medicina Veterinaria", codigo: "VET0010", año: 1, semestre: 1, requisitos: [] },
  { id: "QIM201", nombre: "Química", codigo: "QIM201", año: 1, semestre: 1, requisitos: [] },
  { id: "FIS119V", nombre: "Física para Ciencias Biomédicas", codigo: "FIS119V", año: 1, semestre: 1, requisitos: [] },
  { id: "MAT1023", nombre: "Cálculo", codigo: "MAT1023", año: 1, semestre: 1, requisitos: [] },
  { id: "VET0140", nombre: "Biología y Diversidad Animal", codigo: "VET0140", año: 1, semestre: 1, requisitos: [] },
  { id: "FIL2001", nombre: "Filosofía: ¿Para qué?", codigo: "FIL2001", año: 1, semestre: 1, requisitos: [] },
  { id: "VET0110", nombre: "Anatomía Veterinaria 1", codigo: "VET0110", año: 1, semestre: 2, requisitos: ["VET0140"] },
  { id: "BIO239M", nombre: "Biología Molecular de la Célula", codigo: "BIO239M", año: 1, semestre: 2, requisitos: ["QIM201", "FIS119V"] },
  { id: "VET0100", nombre: "Histología y Embriología", codigo: "VET0100", año: 1, semestre: 2, requisitos: [] },
  { id: "VET0130", nombre: "Bioestadística", codigo: "VET0130", año: 1, semestre: 2, requisitos: ["MAT1023"] },
  { id: "VET0020", nombre: "Ética Veterinaria", codigo: "VET0020", año: 1, semestre: 2, requisitos: [] },
  { id: "EFG1", nombre: "Electivo de formación general 1", codigo: "EFG1", año: 1, semestre: 2, requisitos: [] },
  { id: "VET0120", nombre: "Anatomía Veterinaria 2", codigo: "VET0120", año: 2, semestre: 1, requisitos: ["VET0110"] },
  { id: "VET1100", nombre: "Fisiología Animal", codigo: "VET1100", año: 2, semestre: 1, requisitos: ["BIO239M", "VET0100"] },
  { id: "VET1400", nombre: "Ecología Veterinaria", codigo: "VET1400", año: 2, semestre: 1, requisitos: ["VET0140"] },
  { id: "VET0500", nombre: "Etología y Bienestar Animal", codigo: "VET0500", año: 2, semestre: 1, requisitos: ["VET0140"] },
  { id: "EFG2", nombre: "Electivo de formación general 2", codigo: "EFG2", año: 2, semestre: 1, requisitos: [] },
  { id: "VET1110", nombre: "Microbiología e Inmunología", codigo: "VET1110", año: 2, semestre: 2, requisitos: ["BIO239M"] },
  { id: "VET1130", nombre: "Fisiopatología Veterinaria", codigo: "VET1130", año: 2, semestre: 2, requisitos: ["VET1100"] },
  { id: "VET1120", nombre: "Genética y Evolución", codigo: "VET1120", año: 2, semestre: 2, requisitos: ["BIO239M", "VET0130"] },
  { id: "VET0510", nombre: "Procedimientos del Manejo Animal", codigo: "VET0510", año: 2, semestre: 2, requisitos: ["VET0500"] },
  { id: "EFG3", nombre: "Electivo de formación general 3", codigo: "EFG3", año: 2, semestre: 2, requisitos: [] },
  { id: "EFG4", nombre: "Electivo de formación general 4", codigo: "EFG4", año: 2, semestre: 2, requisitos: [] },
  { id: "VET1140", nombre: "Enfermedades Parasitarias", codigo: "VET1140", año: 3, semestre: 1, requisitos: ["VET1110", "VET1130"] },
  { id: "VET1150", nombre: "Patología General y Sistemática", codigo: "VET1150", año: 3, semestre: 1, requisitos: ["VET1100", "VET0120", "VET1130"] },
  { id: "AGZ341", nombre: "Nutrición y Metabolismo Animal", codigo: "AGZ341", año: 3, semestre: 1, requisitos: ["VET1100", "VET1120"] },
  { id: "AGZ331", nombre: "Alimentos y Alimentación Animal", codigo: "AGZ331", año: 3, semestre: 1, requisitos: ["VET1100", "VET1120"] },
  { id: "EFG5", nombre: "Electivo de formación general 5", codigo: "EFG5", año: 3, semestre: 1, requisitos: [] },
  { id: "VET1160", nombre: "Enfermedades infecciosas", codigo: "VET1160", año: 3, semestre: 2, requisitos: ["VET1110", "VET1150"] },
  { id: "VET1180", nombre: "Fisiopatología y Toxicología", codigo: "VET1180", año: 3, semestre: 2, requisitos: ["VET0130", "VET1130"] },
  { id: "VET1170", nombre: "Reproducción Animal", codigo: "VET1170", año: 3, semestre: 2, requisitos: ["VET1150"] },
  { id: "EFG6", nombre: "Electivo de formación general 6", codigo: "EFG6", año: 3, semestre: 2, requisitos: [] },
  { id: "EFG7", nombre: "Electivo de formación general 7", codigo: "EFG7", año: 3, semestre: 2, requisitos: [] },
  { id: "VET1800", nombre: "Enfermedades Infecciosas", codigo: "VET1800", año: 4, semestre: 1, requisitos: ["VET0120", "VET0510"] },
  { id: "VET1810", nombre: "Patología Clínica", codigo: "VET1810", año: 4, semestre: 1, requisitos: ["VET1130", "VET1140", "VET1160"] },
  { id: "VET1190", nombre: "Ginecología y Obstetricia", codigo: "VET1190", año: 4, semestre: 1, requisitos: ["VET1170"] },
  { id: "VET1600", nombre: "Salud Pública y Epidemiología", codigo: "VET1600", año: 4, semestre: 1, requisitos: ["VET0130"] },
  { id: "VET1300", nombre: "Producción de Monogástricos", codigo: "VET1300", año: 4, semestre: 1, requisitos: ["VET1120", "AGZ341", "AGZ331"] },
  { id: "VET1830", nombre: "Medicina Interna 1", codigo: "VET1830", año: 4, semestre: 2, requisitos: ["VET1800", "VET1810", "VET1180"] },
  { id: "VET1700", nombre: "Calidad e Inocuidad de Prod. Pecuarios", codigo: "VET1700", año: 4, semestre: 2, requisitos: ["VET1600"] },
  { id: "VET1310", nombre: "Reproducción de Rumiantes", codigo: "VET1310", año: 4, semestre: 2, requisitos: ["VET1120", "VET1300", "AGZ341", "AGZ331"] },
  { id: "VET1000", nombre: "Economía y Administración Veterinaria", codigo: "VET1000", año: 4, semestre: 2, requisitos: ["VET0130"] },
  { id: "VET1410", nombre: "Manejo de Vida Silvestre y Med. de Animales Exóticos", codigo: "VET1410", año: 4, semestre: 2, requisitos: ["VET1400", "VET1130", "VET1160"] },
  { id: "VET2830", nombre: "Medicina Interna 2", codigo: "VET2830", año: 5, semestre: 1, requisitos: ["VET1830"] },
  { id: "VET2800", nombre: "Cirugía y Anestesia", codigo: "VET2800", año: 5, semestre: 1, requisitos: ["VET1830", "VET1810"] },
  { id: "VET2000", nombre: "Formulación y Eval. de Proyectos", codigo: "VET2000", año: 5, semestre: 1, requisitos: ["VET1000", "VET1310", "VET1700"] },
  { id: "OP1", nombre: "Optativo de Profundización 1", codigo: "OP1", año: 5, semestre: 1, requisitos: [] },
  { id: "OP2", nombre: "Optativo de Profundización 2", codigo: "OP2", año: 5, semestre: 1, requisitos: [] },
  { id: "VET2820", nombre: "Imagenología Veterinaria", codigo: "VET2820", año: 5, semestre: 2, requisitos: ["VET2830"] },
  { id: "VET2810", nombre: "Cirugía y Anestesia Avanzada", codigo: "VET2810", año: 5, semestre: 2, requisitos: ["VET2800"] },
  { id: "OP3", nombre: "Optativo de Profundización 3", codigo: "OP3", año: 5, semestre: 2, requisitos: [] },
  { id: "OP4", nombre: "Optativo de Profundización 4", codigo: "OP4", año: 5, semestre: 2, requisitos: [] },
  { id: "INT1", nombre: "Internado en Caninos y Felinos o Equinos", codigo: "INT1", año: 6, semestre: 1, requisitos: [] },
  { id: "INT2", nombre: "Internado en Caninos y Felinos o Equinos", codigo: "INT2", año: 6, semestre: 2, requisitos: [] }
];

const mallaContainer = document.getElementById("malla-container");
const aprobados = new Set();

function crearMalla() {
  const años = Array.from({ length: 6 }, (_, i) => i + 1);
  años.forEach(año => {
    const columna = document.createElement("div");
    columna.className = "año-columna";

    const tituloAño = document.createElement("h2");
    tituloAño.textContent = `Año ${año}`;
    tituloAño.style.textAlign = "center";
    tituloAño.style.color = "#880e4f";
    columna.appendChild(tituloAño);

    const semestreContenedor = document.createElement("div");
    semestreContenedor.style.display = "flex";
    semestreContenedor.style.gap = "1rem";
    semestreContenedor.style.justifyContent = "space-between";

    for (let semestre = 1; semestre <= 2; semestre++) {
      const ramosSemestre = ramos.filter(r => r.año === año && r.semestre === semestre);
      if (ramosSemestre.length === 0) continue;

      const semDiv = document.createElement("div");
      semDiv.className = "semestre";
      const titulo = document.createElement("h3");
      titulo.textContent = `Semestre ${semestre}`;
      semDiv.appendChild(titulo);

      ramosSemestre.forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = `${ramo.codigo} - ${ramo.nombre}`;
        div.dataset.id = ramo.id;
        if (ramo.requisitos.length === 0) {
          div.classList.add("habilitado");
        }
        div.addEventListener("click", () => aprobarRamo(ramo.id));
        semDiv.appendChild(div);
      });

      semestreContenedor.appendChild(semDiv);
    }

    columna.appendChild(semestreContenedor);
    mallaContainer.appendChild(columna);
  });
}

function aprobarRamo(id) {
  if (aprobados.has(id)) return;
  aprobados.add(id);

  const div = document.querySelector(`.ramo[data-id="${id}"]`);
  if (div) {
    div.classList.remove("habilitado");
    div.classList.add("aprobado");
  }

  habilitarRamos();
}

function habilitarRamos() {
  ramos.forEach(ramo => {
    if (aprobados.has(ramo.id)) return;
    const puedeHabilitar = ramo.requisitos.every(req => aprobados.has(req));
    if (puedeHabilitar) {
      const div = document.querySelector(`.ramo[data-id="${ramo.id}"]`);
      if (div && !div.classList.contains("aprobado")) {
        div.classList.add("habilitado");
      }
    }
  });
}

crearMalla();
