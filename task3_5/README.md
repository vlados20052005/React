Design:
- https://www.figma.com/file/JNr8hgMmfIp2SDF6Kk1KRP/Online-store-(Foxminded)?type=design&node-id=0-1&mode=design&t=BYu9FhgC3r9keJXx-0

Create a store app:
- home page is a simple products list, user can add products to cart
- click on the cart redirects to the checkout page, the checkout a multi steps form
- on the cart page user can navigate to previous steps clicking on Breadcrumbs, but not to the next ones if the current step is not submitted

Technical requirements:
- feel free to use any state management choice to store the cart state
- use react-router for routing or feel free to try any other routing library
- each checkout step should be a separate route
- use any form management library you like: formik, react-hook-form, etc
- validate the form with yup: https://www.npmjs.com/package/yup

* Advanced:
- store the checkout steps state in the location.state: https://reactrouter.com/en/main/start/concepts#locations

You can get products data from: https://dummyjson.com/products

Useful links:
- https://reactrouter.com/en/main
- https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router
- https://medium.com/geekculture/best-react-routing-libraries-17a27bd302dd
