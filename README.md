# 🍳 Recipe Sharing Platform
A modern, user-friendly platform to share, discover, and manage recipes. Designed with scalability, advanced features, and seamless interactions, this application is perfect for cooking enthusiasts and food bloggers.

## 🚀 Features

### 👩‍🍳 Core Features

- User Authentication: Secure registration and login using JWT.
- Recipe Management:
- Create, update, and delete recipes.
- Categorize recipes by meal type (e.g., breakfast, lunch, dinner, dessert).
- Upload and manage images via Cloudinary.
- User Engagement:
- Like, comment, and rate recipes.
- Mark recipes as favorites for easy access.
- Meal Planning:
- Organize favorite recipes into meal plans for specific dates.

### 🔥 Advanced Features
- Notifications: Alerts for likes, comments, and meal plan reminders. Ability to mark notifications as read.
- Admin Dashboard: Manage users and moderate recipes. Delete inappropriate content.
- Activity Log: Tracks user activities like recipe creation, likes, and ratings.

### 🛠️ Tech Stack
- Backend
	Node.js: Backend runtime.
	Express.js: Web framework for building RESTful APIs.
- Database
	MongoDB: NoSQL database to store user, recipe, and activity data.
	Mongoose: ODM library for MongoDB.
- Image Hosting
	Cloudinary: Manages image uploads and storage.
- Authentication
	JWT (JSON Web Tokens): Secure user authentication.

### 📁 Project Structure
```plaintext
recipe-sharing-platform/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Authentication logic
│   ├── recipeController.js   # Recipe CRUD and interactions
│   ├── commentController.js  # Comment management
│   ├── adminController.js    # Admin functionalities
│   ├── notificationController.js # Notifications handling
├── middlewares/
│   ├── authMiddleware.js     # Authentication middleware
│   ├── adminMiddleware.js    # Admin role middleware
├── models/
│   ├── User.js               # User schema
│   ├── Recipe.js             # Recipe schema
│   ├── Notification.js       # Notification schema
│   ├── Activity.js           # Activity log schema
├── routes/
│   ├── authRoutes.js         # Authentication routes
│   ├── recipeRoutes.js       # Recipe routes
│   ├── commentRoutes.js      # Comment routes
│   ├── adminRoutes.js        # Admin routes
│   ├── notificationRoutes.js # Notification routes
├── services/
│   └── cloudinary.js         # Cloudinary service
├── uploads/                  # Local image uploads (optional)
├── .env                      # Environment variables
├── .gitignore                # Files to ignore in Git
├── package.json              # Node.js dependencies
├── server.js                 # Server entry point
└── README.md                 # Project documentation
```

### ⚙️ Installation

Clone the Repository:

``` bash
git clone https://github.com/your-username/recipe-sharing-platform.git
cd recipe-sharing-platform
Install Dependencies:

``` bash
npm install
```

Set Up Environment Variables: Create a .env file in the root directory and add:

```plaintext
env
PORT=5000
MONGO_URI=mongodb://localhost:27017/recipe-platform
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
Start the Server:

``` bash
Copy
Edit
npm start
Access the Application: Visit http://localhost:5000 to access the platform.
```
### 📖 API Endpoints
1. Authentication
	- POST /api/auth/register: Register a new user.
	- POST /api/auth/login: Login and get a JWT token.
2. Recipes
	- GET /api/recipes: Fetch all recipes.
	- POST /api/recipes: Create a new recipe.
	- PUT /api/recipes/:id: Update a recipe.
	- DELETE /api/recipes/:id: Delete a recipe.
3. Comments
	- POST /api/recipes/:id/comments: Add a comment to a recipe.
	- GET /api/recipes/:id/comments: Get comments for a recipe.
4. Notifications
	- GET /api/notifications: Fetch notifications for the user.
	- PATCH /api/notifications/read: Mark notifications as read.
5. Admin
	- GET /api/admin/users: Fetch all users (Admin only).
	- DELETE /api/admin/recipes/:id: Delete a recipe (Admin only).

### 🛡️ Contributing
Fork the repository.

Create a feature branch:
``` bash
git checkout -b feature/your-feature-name
```

Commit your changes:
``` bash
git commit -m "Add your feature description"
```

Push to your branch:
``` bash
git push origin feature/your-feature-name
```
Open a pull request.

```📜 License
This project is licensed under the MIT License.
```

### 🚀 Future Enhancements
- Mobile App: Develop a React Native app for mobile users.
- Search Suggestions: Implement autocomplete for recipe search.
- Premium Features: Add subscription-based premium options.
- Analytics Dashboard: Create an admin dashboard with user and recipe metrics.

#### 💡 Feel free to fork, contribute, or suggest new features! Let’s make this platform the go-to hub for food enthusiasts.