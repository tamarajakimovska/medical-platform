import { getTimelineIcon } from "../get-timeline-icon";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SearchIcon from '@mui/icons-material/Search';


describe('getTimelineIcon should return correct icon for', () => {
    it('user', () => {
        const timelineIcon = getTimelineIcon('user');

        expect(timelineIcon).toEqual(<AccountCircleIcon />);
    });

    it('calendar', () => {
        const timelineIcon = getTimelineIcon('calendar');

        expect(timelineIcon).toEqual(<CalendarMonthIcon />);
    }); 

     it('medication', () => {
        const timelineIcon = getTimelineIcon('medication');

        expect(timelineIcon).toEqual(<MedicationIcon />);
    }); 

      it('operation', () => {
        const timelineIcon = getTimelineIcon('operation');

        expect(timelineIcon).toEqual(<VaccinesIcon />);
    }); 

     it('new_patient', () => {
        const timelineIcon = getTimelineIcon('new_patient');

        expect(timelineIcon).toEqual(<PersonAddIcon />);
    }); 

      it('examination', () => {
        const timelineIcon = getTimelineIcon('examination');

        expect(timelineIcon).toEqual(<SearchIcon />);
    }); 

      it('default', () => {
        const timelineIcon = getTimelineIcon('');

        expect(timelineIcon).toEqual(<VaccinesIcon />);
    });
})
