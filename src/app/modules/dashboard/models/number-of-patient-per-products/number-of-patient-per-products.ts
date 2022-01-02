export interface NumberOfPatientPerProducts {
    total_patients: number,
    data: patientPerProductsData[],
}



interface patientPerProductsData {
    id: number,
    name: string,
    total: string
}
