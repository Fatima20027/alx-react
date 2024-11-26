import { getAllNotificationsByUser } from './notifications'; // Import the function to test
import * as notificationsData from '../../notifications.json';


describe('getAllNotificationsByUser', () => {
  it('should return the correct notifications for user ID 5debd764a7c57c7839d722e9', () => {
    // Expected data
    const expectedResult = [
      {
        guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
        isRead: true,
        type: "urgent",
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
      },
      {
        guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
        isRead: false,
        type: "urgent",
        value:
          "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
      }
    ];

    // Execute the function with the user ID
    const result = getAllNotificationsByUser("5debd764a7c57c7839d722e9");

    // Assert using arrayContaining to match the result
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});