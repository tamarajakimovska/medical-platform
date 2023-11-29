import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';

export function getTimelineIcon(icon: string) {
    switch (icon) {
        case 'user':
            return <AccountCircleIcon />
        case 'calendar':
            return <CalendarMonthIcon />
        case 'medication':
            return <MedicationIcon />
        case 'operation':
            return <VaccinesIcon />
        case 'new_patient':
            return <PersonAddIcon />
        case 'examination':
            return <SearchIcon />
        default:
            return <VaccinesIcon />
    }
};
