export interface Status {
    color_status: string;
    translation_status: string;
}

export interface User {
    uid: string;
    name: string;
    email: string;
    phone: string;
    status: Status;
}

export interface Auth {
    token: string;
    user: User;
}