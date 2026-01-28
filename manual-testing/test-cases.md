### TC_01 - Login with valid credentials
- Precondition: User is registered
- Steps:
  1. Navigate to Login Page
  2. Enter valid email and password
  3. Click on Login button
- Expected Result:
  - User is successfully logged in
  - User is redirected to the home page

### TC_02 - Login with invalid credentials
- Precondition: User is registered
- Steps:
  1. Open Login Page
  2. Enter invalid email and/or password
  3. Click Login button
- Expected Result:
  - Login fails
  - Appropriate error message is displayed

### TC_03 - Logout functionality
- Precondition: User is logged in
- Steps:
  1. Navigate to Profile Page
  2. Click on Logout option
- Expected Result:
  - User is logged out successfully

### TC_04 - Register with valid details
- Precondition: User is not registered
- Steps:
  1. Navigate to Registration/Sign up page
  2. Enter valid user details (name, user, password)
  3. Click on Register button
- Expected Result:
  - User registration is successful
  - User is redirected to Login page 

### TC_05 - Register with existing email
- Precondition: User already exists with the same email
- Steps:
  1. Navigate to Registration page
  2. Enter already registered email and valid password
  3. Click on Register button
- Expected Result:
  - Registration fails
  - Appropriate error message is displayed

### TC_06 - View list of available books
- Precondition: User is logged in
- Steps: 
  1. Navigate to the Home/Book Listing page
  2. Observe the list  of books displayed
- Expected Result:
  - List of available books is displayed
  - Each book shows basic details

### TC_07 - View details of available books
- Precondition: User is logged in
- Steps: 
  1. Navigate to the Home/Book Listing page
  2. Click on the book card to open to Book Details Page
- Expected Result:
  - Book details page is displayed with complete information
  - Add to Cart and Add to Favourite options are visible for the user
  - Edit and Delete options are visible only for Admin users

### TC_08 - Add book to cart
- Precondition: 
  - User is logged in
  - Book is available in the book listing
- Steps:
  1. Navigate to the Home/Book Listing Page
  2. Navigate to the Book Details Page
  3. Click on "Add to Cart"/Cart icon for a book
  4. Navigate to the Cart page
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Selected book is added to the cart
  - Book details are displayed correctly in the cart

### TC_09 - Remove book from cart
- Precondition:
  - User is logged in
  - At least one book is present in the cart
- Steps:
  1. Navigate to the Cart page
  2. Click on “Remove from Cart” or Delete icon for a book
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Selected book is removed from the cart
  - Cart is updated accordingly

### TC_10 - Place order successfully
- Precondition: 
  - User is logged in
  - At least one book is present in the cart
- Steps:
  1. Navigate to the Cart Page
  2. Click on "Place Order" / "Checkout" button
  3. Navigate to Profile page
  4. Open Order history section
- Expected Result:
  - Order is placed successfully
  - Order confirmation message is displayed
  - Newly placed order is visible in the Order history

### TC_11 - View order history
- Precondition: 
  - User is logged in
  - At least one order has been placed by the user
- Steps:
  1. Navigate to Profile page
  2. Open Order history section
- Expected Result:
  - Order history page/section is displayed
  - List of previously placed orders is visible with relevant details

### TC_12 - Add book to favourites
- Precondition: 
  - User is logged in
  - Book is available in the book listing
- Steps:
  1. Navigate to the Home/Book Listing Page
  2. Navigate to the Book Details Page
  3. Click on "Add to Favourites"/Favourites icon for a book
  4. Navigate to Profile page
  5. Open Favourites section
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Selected book is added to the favourites
  - Book appears in the Favourites page

### TC_13 - View Favourites
- Precondition: 
  - User is logged in
  - At least one book is added to favourites
- Steps:
  1. Navigate to Profile page
  2. Open Favourites section
- Expected Result:
  - Favourites page/section is displayed
  - List of previously added favourites books is visible with relevant details

### TC_14 - Remove Book from favourites
- Precondition: 
  - User is logged in
  - Book is available in the book listing
- Steps:
  1. Navigate to the Profile Page
  2. Open Favourites section
  3. Click on Remove button
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Selected book is removed from the favourites

### TC_15 - Add new book
- Precondition: 
  - Admin user is logged in
- Steps:
  1. Navigate to Admin Profile page
  2. Open Add Book section
  3. Enter valid book details
  4. Click on Add Book button
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - New Book is added successfully
  - Book appears in the listing

### TC_16 - Update book details
- Precondition: 
  - Admin user is logged in
  - Book is available in the book listing
- Steps:
  1. Navigate to Home/Book Listing page
  2. Navigate to the Book details page
  3. Click on Edit icon for a book
  4. Modify the required book details
  5. Click Update book button
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Book details are updated successfully
  - Updated details appear on the Book details page

### TC_17 - Delete a book
- Precondition: 
  - Admin user is logged in
  - Book is available in the book listing
- Steps:
  1. Navigate to Home/Book Listing page
  2. Navigate to the Book details page
  3. Click on Delete icon for a book
- Expected Result:
  - Confirmation or appropriate success message is displayed
  - Book is removed/deleted successfully
  - Book is no longer visible in the book listing