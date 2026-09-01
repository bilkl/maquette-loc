export type RentalType = "courte-duree" | "longue-duree";

export interface BookingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicle: string;
  startDate: string;
  endDate: string;
  rentalType: RentalType;
  location: string;
  driverAge: string;
  message: string;
  consent: boolean;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export interface LongTermFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profile: string;
  duration: string;
  vehicle: string;
  message: string;
  consent: boolean;
}

export type LongTermFormErrors = Partial<Record<keyof LongTermFormValues, string>>;

export type AppointmentTimeSlot = "matin" | "apres-midi" | "peu-importe";

export interface AppointmentFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Slug de la prestation souhaitée (voir data/garage/<id>.ts), ou "autre" */
  service: string;
  vehicleBrand: string;
  vehicleModel: string;
  preferredDate: string;
  preferredTime: AppointmentTimeSlot;
  message: string;
  consent: boolean;
}

export type AppointmentFormErrors = Partial<Record<keyof AppointmentFormValues, string>>;

export interface ElectricienQuoteFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Slug du type d'intervention souhaité (voir data/electricien/<id>.ts), ou "autre" */
  interventionType: string;
  /** true pour une situation urgente : priorise la demande, sans imposer de date/créneau */
  isUrgent: boolean;
  preferredDate: string;
  preferredTime: AppointmentTimeSlot;
  message: string;
  consent: boolean;
}

export type ElectricienQuoteFormErrors = Partial<Record<keyof ElectricienQuoteFormValues, string>>;

export type VehicleConditionInput = "excellent" | "tres-bon" | "bon" | "a-revoir";

export interface SellVehicleFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleBrand: string;
  vehicleModel: string;
  year: string;
  mileage: string;
  condition: VehicleConditionInput;
  message: string;
  consent: boolean;
}

export type SellVehicleFormErrors = Partial<Record<keyof SellVehicleFormValues, string>>;
