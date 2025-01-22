export class CreateUserDto {
    id?: string;
    authId: string;
    email: string;
    name: string;
    channelName?: string;
    description?: string;
    phone?: string;
}
