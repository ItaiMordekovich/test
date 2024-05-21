export type ErrorType = {
    status: number;
    statusText?: string;
    data?: string;
    message: string;
    details: string;
};

export type CardType = {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: {
        url: string;
        alt: string;
        _id: string;
    };
    address: {
        state: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
        _id: string;
    };
    bizNumber: number;
    likes: string[];
    user_id: string;
    createdAt: string;
    __v: number;
};

export type FCC = ({ children: ReactNode }) => ReactNode;

export type LoginUser = {
    email: string;
    password: string;
};

export type RegisterUser = {
    name: {
        first: string;
        middle?: string;
        last: string;
    };
    phone: string;
    email: string;
    password: string;
    image?: {
        url: string;
        alt?: string;
    };
    address: {
        state?: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
    };
    isBusiness: boolean;
};

export type CreateCard = {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web?: string;
    image?: {
        url?: string;
        alt?: string;
    };
    address: {
        state?: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip?: number;
    };
};

export type JwtDecodeType = {
    iat: number;
    isAdmin: boolean;
    isBusiness: boolean;
    _id: string;
}

export type UpadateCardType = {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: {
        url: string;
        alt: string;
    };
    address: {
        state: string;
        country: string;
        city: string;
        street: string;
        houseNumber: number;
        zip: number;
    };
};

export type DeleteCardType = { id: string }

