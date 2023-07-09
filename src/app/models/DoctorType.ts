export const DoctorTypes = [
	"NONE",
	"ALLERGIST",
	"ANAESTHETICS",
	"CARDIOLOGY",
	"DERMATOLOGY",
	"ENDOCRINOLOGY",
	"GENERAL",
	"GASTROENTEROLOGY",
	"GERIATRICS",
	"HEMATOLOGY",
	"IMMUNOLOGY",
	"INFECTIOUS_DISEASES",
	"INTERNAL_MEDICINE",
	"NEPHROLOGY",
	"NEUROPSYCHIATRY",
	"NEUROLOGY",
	"NEUROSURGERY",
	"GYNAECOLOGY",
	"ONCOLOGY",
	"OPHTHALMOLOGY",
	"ORTHOPAEDICS",
	"OTORHINOLARYNGOLOGY",
	"PAEDIATRIC",
	"PATHOLOGY",
	"PHARMACOLOGY",
	"PSYCHIATRY",
] as const

export type DoctorType = typeof DoctorTypes[number];