import { PatientDialog } from ".";
import { render } from "@testing-library/react";

describe('PatientDialog should render', () => {
    it('dialog with add copy', () => {
        const element = render(<PatientDialog
            isOpen={true}
            mode={'add'}
            patient={{
                image: '',
                name: '',
                id: '123',
                age: 42,
                number: '444000222',
                adress: 'Jablonskistrasse 21, 10405, Berlin',
                lastVisit: '2023-01-01',
                gender: 'female',
                email: 'anna@musterman.com',
                date: '2023-05-05',
                visitTime: '09:00-09:45',
                doctor: 'Dr. Liam',
                injury: 'factura'
            }}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Add patient').length).toBe(2)
    })

    it('dialog with edit copy', () => {
        const element = render(<PatientDialog
            isOpen={true}
            mode={'edit'}
            patient={{
                image: '',
                name: '',
                id: '123',
                age: 42,
                number: '444000222',
                adress: 'Jablonskistrasse 21, 10405, Berlin',
                lastVisit: '2023-01-01',
                gender: 'female',
                email: 'anna@musterman.com',
                date: '2023-05-05',
                visitTime: '09:00-09:45',
                doctor: 'Dr. Liam',
                injury: 'factura'
            }}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Edit patient').length).toBe(1);
        expect(element.getAllByText('Update patient').length).toBe(1);
    })
})