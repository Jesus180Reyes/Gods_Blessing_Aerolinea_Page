export interface Sucursales {
    title:     string;
    onClick: string;
    description: string;
    locationUrl: string;
    phone_number: string;
    employees: Employees[];
    links: LinksSM
}


export interface Employees {
    name: string;
    lastName: string;
    phoneNumber: string;
    imgUrl: string;
}


export interface LinksSM {
    tiktokUrl: string;
    facebookUrl: string
    instagramUrl: string
}