import BookingPage, { fetchData } from './BookingPage';
import * as BookingPageMethods from './BookingPage';

const defaultState = [
  { value: '18:00', label: '18:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
];

describe('BookingPage', () => {
  describe('initializeTimes', () => {
    xtest('calls fetchData method', () => {
      const spyOnInitializeTimes = jest.spyOn(BookingPageMethods, 'fetchData');
      BookingPageMethods.initializeTimes(jest.fn());

      expect(spyOnInitializeTimes).toHaveBeenCalled();
    });
  });

  describe('updateTimes', () => {
    test('returns correct value by default', () => {
      expect(BookingPageMethods.updateTimes(defaultState, {})).toEqual([
        { value: '18:00', label: '18:00' },
        { value: '21:00', label: '21:00' },
        { value: '22:00', label: '22:00' },
      ]);
    });
  });
});

