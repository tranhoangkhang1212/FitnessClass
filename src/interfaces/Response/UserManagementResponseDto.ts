import { UserAccountStatus } from '@/constants/users';

export interface UserManagementResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    dob: string;
    status: UserAccountStatus;
}

export interface CustomerManagementResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    dob: string;
    height: number,
    weight: number,
    muscleRatio: number,
    fatRatio: number,
    visceralFatLevels: number
}
