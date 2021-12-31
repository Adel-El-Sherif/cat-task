export interface NumberOfPatients {
    total_number_of_patients: number,
    patients_per_year: PatientsPerYear[],
    patients_per_year_percentage: string
}

interface PatientsPerYear {
    year: string,
    total: number
}
