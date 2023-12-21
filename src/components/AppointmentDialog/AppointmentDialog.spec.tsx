import { render } from "@testing-library/react";
import { AppointmentDialog } from ".";
import { Appointment } from "../../interfaces";

describe('AppointmentDialog should render', () => {
    it('dialog with add copy', () => {
        const element = render(<AppointmentDialog
            isOpen={true}
            mode={'add'}
            appointment={{} as Appointment}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Add appointment').length).toBe(2)
    })

    it('dialog with edit copy', () => {
        const element = render(<AppointmentDialog
            isOpen={true}
            mode={'edit'}
            appointment={{} as Appointment}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Edit appointment').length).toBe(1);
        expect(element.getAllByText('Update appointment').length).toBe(1);
    })
})