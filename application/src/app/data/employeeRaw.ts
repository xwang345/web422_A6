import {Positions} from './positions';

export class EmployeeRaw {
    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: string;
    PhoneNum: string;
    Extension: number;
    Position: Position;
    HireDate: string;
    SalaryBonus: number;
    __v: number;
}