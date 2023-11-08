export type PhoneList = Phone[];

export interface Phone {
    id:          number;
    numberPhone: string;
    employeeId:  number;
    employee:    Employee;
    unit:        null;
}

export interface Employee {
    id:   number;
    name: string;
    unit: Unit;
}

export interface Unit {
    id:           number;
    name:         string;
    abbreviation: string;
}
