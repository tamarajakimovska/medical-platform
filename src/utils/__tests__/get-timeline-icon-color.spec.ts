import { getTimelineIconColor } from "../get-timeline-icon-color";

describe('getTimelineIconColor should return correct color for', () => {
    it('user', () => {
        const timelineColor = getTimelineIconColor('user');

        expect(timelineColor).toBe('#677DEA');
    });

    it('calendar', () => {
        const timelineColor = getTimelineIconColor('calendar');

        expect(timelineColor).toBe('#EC63A6');
    });

    it('medication', () => {
        const timelineColor = getTimelineIconColor('medication');

        expect(timelineColor).toBe('#F56565');
    });

    it('operation', () => {
        const timelineColor = getTimelineIconColor('operation');

        expect(timelineColor).toBe('green');
    });

    it('new_patient', () => {
        const timelineColor = getTimelineIconColor('new_patient');

        expect(timelineColor).toBe('#EBC94A');
    });

    it('examination', () => {
        const timelineColor = getTimelineIconColor('examination');

        expect(timelineColor).toBe('#EC8C3C');
    });

    it('default', () => {
        const timelineColor = getTimelineIconColor('');

        expect(timelineColor).toBe('green');
    });
})