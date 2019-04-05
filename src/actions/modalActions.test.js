import { SHOW_MODAL } from '../constants/modalConstants';
import * as actions from './modalActions';

const testModal = {
  title: 'Modal Title',
  content: 'Modal Content'
};

describe('modal actions', () => {
  it('should create an action to add a modal', () => {
    const expectedAction = {
      type: SHOW_MODAL,
      payload: {
        ...testModal,
        display: true
      }
    };
    expect(actions.showModal(testModal)).toEqual(expectedAction);
  });
});
