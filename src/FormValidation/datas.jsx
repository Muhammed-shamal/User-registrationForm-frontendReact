

export const validateUname = {
  required: { value: true, message: "This field is required" },
  minLength: { value: 3, message: "Please enter at least 3 characters" },
  maxLength: { value: 30, message: "Please enter a maximum of 30 characters" },
  pattern: { value: /^[a-zA-Z\d]+$/, message: "Please enter a valid username" },
};

export const validateEmail = {
  required: { value: true, message: "This field is required" },
  minLength: { value: 8, message: "Please enter at least 8 characters" },
  maxLength: { value: 255, message: "Please enter a maximum of 255 characters" },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
};



export const validatePhoneNumber = {
  required: { value: true, message: "This field is required" },
  minLength: { value: 10, message: "Phone number should have at least 10 digits" },
  maxLength: { value: 15, message: "Phone number can have a maximum of 15 digits" },
  pattern: {
    value: /^[0-9]*$/,
    message: "Please enter a valid phone number with digits only",
  },
};

export const validatePincode = {
  required: { value: true, message: "This field is required" },
  minLength: { value: 6, message: "Pincode should have at least 6 characters" },
  maxLength: { value: 10, message: "Pincode can have a maximum of 10 characters" },
  pattern: {
    value: /^[0-9]*$/,
    message: "Please enter a valid pincode with digits only",
  },
};


export const validatePassword = {
  required: { value: true, message: "Password is required" },
  minLength: { value: 6, message: "Password must be at least 6 characters" },
  maxLength: { value: 255, message: "Password can have a maximum of 255 characters" },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,
    message: "Please enter a valid password",
  },
  customValidation: (value) => {
    if (value.length < 6) {
      return "Password is too weak, please enter a stronger password";
    } else if (value.length < 10) {
      return "Password is weak, consider a longer password for better security";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
      return "Password lacks complexity, include numbers, lowercase and uppercase letters";
    } else {
      return "Password strength is good!";
    }
  },
};

export const validateConfirmPassword = {
  required: { value: true, message: "Confirm Password is required" },
  validate: (value, allValues) => {
    if (value === allValues.password) {
      return true; // Validation passed
    }
    return "Passwords do not match to previos Value";
  },
};

export const validateSelect = {
  required: { value: true, message: "Please select an option" },
};




export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

//for each city
export const stateCityData = {
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Trichur", "Kollam", "Alappuzha", "Palakkad", "Kannur", "Kasaragod", /* ... other districts */],
  TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore", "Thoothukudi", "Tirunelveli", /* ... other districts */],
  Karnataka: ["Bangalore", "Mysore", "Hubli-Dharwad", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Udupi", "Shimoga", /* ... other districts */],
  AndhraPradesh: ["Hyderabad", "Vishakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Warangal", "Tirupati", "Anantapur", /* ... other districts */],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", /* ... other districts */],
  // Add more states and their districts here
};










