import { NumberOfPatientPerProducts } from "../number-of-patient-per-products/number-of-patient-per-products";
import { NumberOfPatients } from "../number-of-patients/number-of-patients";

export interface MainChart {
    number_of_patients: NumberOfPatients,
    patient_per_products: NumberOfPatientPerProducts
}
