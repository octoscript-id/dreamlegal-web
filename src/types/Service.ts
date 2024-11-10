export type ServiceOption = {
    package: string;
    price: number;
    features: string[];
    duration?: string;
};

export type Service = {
    id: number;
    title: string;
    subtitle?: string;
    options: ServiceOption[];
    is_highlighted: boolean;
};

export type ServiceCategory = {
    id: number;
    category: string;
    services: Service[];
};