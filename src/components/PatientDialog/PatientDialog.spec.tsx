import { PatientDialog } from ".";
import { render } from "@testing-library/react";

describe('PatientDialog should render', () => {
    it('dialog with add copy', () => {
        const element = render(<PatientDialog
            isOpen={true}
            mode={'add'}
            patient={{}}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Add patient').length).toBe(2)
    })

    it('dialog with edit copy', () => {
        const element = render(<PatientDialog
            isOpen={true}
            mode={'edit'}
            patient={{}}
            onClose={() => null}
            onSubmit={() => null}
        />)

        expect(element.getAllByText('Edit patient').length).toBe(1);
        expect(element.getAllByText('Update patient').length).toBe(1);
    })
})