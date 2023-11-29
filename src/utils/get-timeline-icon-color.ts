
export function getTimelineIconColor(icon: string) {
    switch(icon) {
        case 'user':
            return '#677DEA'
        case 'calendar':
            return '#EC63A6';
        case 'medication':
            return '#F56565';
        case 'operation':
            return 'green';
        case 'new_patient':
            return '#EBC94A';
        case 'examination':
            return '#EC8C3C';
        default:
            return 'green';
    }
};
