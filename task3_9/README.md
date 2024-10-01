Design:

- https://www.figma.com/file/FI38CVPEek0RxddGqrkXo0/Calendar-(Foxminded)?type=design&node-id=0-1&mode=design&t=05T5Ep2CBAnbDHy2-0

Base level requirements:
- all data manipulations is done on the client side, no backend needed
- welcome page with login button is not needed
- import your UI Kit to this project and use it
- use any state management library you want
- it's required to use any standardized architecture methodology (like FSD)
- implement only "Day" view, so no dropdown with other views needed
- create event: all fields from the design should be implemented, except "Repeat" functionality
- create new event only by clicking on the "Create" button
- create, view, edit and delete events functionality
- create, edit and delete calendars functionality
- datepicker is changing the date for the current day, events should be updated accordingly
- on the 'Day' view the switcher at the top (like < > November 2023) should change the current day to the next/previous day
- each event is attached to a calendar, color of the event should be the same as the color of the calendar
- there is always a "default" calendar, so user can't delete it, only edit
- each calendar has a checkbox, so user can hide/show events from the specific calendar

* Advanced level requirements (all items are optional, you can choose which one to implement):
- implement backend side with any technology you want, so the app architecture should be client-server
- use Firebase for authorization, so the welcome page with login button is needed
- use Firebase for data storage (free plan is enough)
- use typescript
- implement "Repeat" event functionality
- implement only "Week" or "Day" and "Week" views, so the dropdown with views is needed
- unit tests

Bonus tasks:
- deploy your app to any hosting: Heroku, Firebase, DigitalOcean, etc.
- create event by clicking on the specific calendar cell
- edit event time/date by dragging the event to another time cell or dragging the bottom border to change the event duration
- there is an active red line that shows the current time, the line should be updated every minute
- add "Share" event functionality, so you can copy the link to the event and send it to another user.
  When the user opens the link, the event creation modal should be opened with all the fields filled in

If you have any troubles with the task, contact your mentor and discuss which requirements you can skip or change.

Useful links:
- https://medium.com/stackanatomy/react-architecture-patterns-for-your-projects-6f495448f04b
- https://feature-sliced.design/