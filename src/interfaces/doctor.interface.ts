export interface DoctorTimeline {
    title: string;
    time: string;
    icon: string;
    description: string;
}

export interface Doctor {
    image: string;
    name: string;
    specialty: string;
    adress: string;
    gender: string;
    id: string;
    timeline: DoctorTimeline[]
};
