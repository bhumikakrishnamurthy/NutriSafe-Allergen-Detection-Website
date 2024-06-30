NutriSafe
              NutriSafe is a web application designed to help users determine whether a food product is safe for consumption based on their dietary restrictions and allergens. Users can upload a photo of an ingredient label, and the app will process the image to extract the ingredients, check against their dietary preferences, and provide a safety evaluation.

Table of Contents

            Features
            Getting Started
            Prerequisites
            Installation
            Usage
            Firebase Configuration
            Contributing
            License

            
Features

            Upload a photo of an ingredient label.
            Extract and list ingredients from the photo.
            Check ingredients against user-specific dietary restrictions and allergens.
            Provide safety evaluation based on the user's profile.
            Suggest storage instructions for the item.
            Recommend alternatives for the ingredients in the item.


Getting Started

            Follow these instructions to set up and run the project on your local machine.


            
Prerequisites

            Ensure you have the following installed:
                      Node.js
                      A modern web browser (e.g., Google Chrome, Mozilla Firefox)
                      A Firebase project (for authentication and database)

                      
Installation

            Clone the repository:
                      git clone https://github.com/yourusername/nutrisafe.git
                      cd nutrisafe
                      
            Install the dependencies:
            	        npm install
                     
            Create a .env file in the root directory and add your Firebase configuration:
                      REACT_APP_FIREBASE_API_KEY=your_api_key
                      REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
                      REACT_APP_FIREBASE_DATABASE_URL=your_database_url
                      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
                      REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
                      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
                      REACT_APP_FIREBASE_APP_ID=your_app_id
                      REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id


Usage

          Start the development server:
                    npm start
                    
          Open your web browser and navigate to http://localhost:3000.
          Upload an image of an ingredient label and see the results based on your dietary profile.
          Firebase Configuration
                    Ensure your Firebase project is correctly configured to handle authentication and real-time database access:
                              Go to the Firebase Console.
                              Create a new project or use an existing project.
                              Set up Firebase Authentication (email/password).
                              Set up Firebase Realtime Database and structure it as follows:
                              	Json file:
                              {
                                "CustomerSet": {
                                	 "username": {
                                   		 "allergy": {
                                      				"dairy": false,
                                     				 "nuts": true
                                   			 },
                                  		  "diet": {
                                     				 "vegan": true
                                   			 }
                                 	 }
                                },
                                "users": {
                                 		 "uid": {
                                   				 "username": "username"
                                	 		 }
                                }
                              }
          Update the database rules to allow read and write access for authenticated users.
                      Json file:
                      	{
                        "rules": {
                          ".read": "auth != null",
                          ".write": "auth != null"
                        }
                      }


Contributing
    
    Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the existing style and structure.
        Fork the repository.
        Create a feature branch: git checkout -b feature-branch
        Commit your changes: git commit -m 'Add some feature'
        Push to the branch: git push origin feature-branch
        Open a pull request.

        
License

        This project is licensed under the MIT License - see the LICENSE file for details







