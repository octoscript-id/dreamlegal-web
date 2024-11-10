export type Testimony = {
    id: number;
    title: string;
    testimonial: string;
    profile: {
        name: string,
        position: string,
        photoUrl: string
    }
};