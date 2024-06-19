import "./style.css";
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAños = (pacientes: Pacientes[]): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
};
const pacientesReasignados = pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      paciente.especialidad = "Medico de familia";
    }
    return paciente;
  });

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.especialidad === "Pediatra");
};

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    return pacientes.reduce((contador, paciente) => {
        if (paciente.especialidad === "Medico de familia") {
            contador.medicoDeFamilia++;
        } else if (paciente.especialidad === "Pediatra") {
            contador.pediatria++;
        } else if (paciente.especialidad === "Cardiólogo") {
            contador.cardiologia++;
        }
        return contador;
    }, {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0
    });
};
console.log('Pacientes asignados a pediatria', obtenPacientesAsignadosAPediatria(pacientes));
console.log('Pacientes asignados a pediatria y menores de 10 años', obtenPacientesAsignadosAPediatriaYMenorDeDiezAños(pacientes));
console.log('¿Activar protocolo de urgencia?', activarProtocoloUrgencia(pacientes));
console.log( 'Pacientes Reasignados' ,(pacientesReasignados));
console.log('¿Hay pacientes de Pediatría?', hayPacientesDePediatria(pacientes));
console.log('Cantidad de pacientes por especialidad', cuentaPacientesPorEspecialidad(pacientes));

