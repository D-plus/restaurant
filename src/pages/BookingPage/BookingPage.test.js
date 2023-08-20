import { BrowserRouter }  from "react-router-dom";
import { render } from '@testing-library/react';
import BookingPage, { fetchData } from './BookingPage';
import * as BookingPageMethods from './BookingPage';
import * as apiHelpers from '../../helpers/api-handlers';

const defaultState = [
  { value: '18:00', label: '18:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
];

describe('BookingPage', () => {
  describe('after component mount', () => {
    test('calls initializeTimes method', async () => {
      const spyOnInitializeTimes = jest.spyOn(apiHelpers, 'initializeTimes');

      await render(<BrowserRouter><BookingPage /></BrowserRouter>);

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

