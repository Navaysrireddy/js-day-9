// 1. Scenario: Online Library Membership
// ---------------------------------------
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:

// Basic Membership: Access to only free books.

// Standard Membership: Access to free books and discounted paid books.

// Premium Membership: Access to all books, including exclusive content.

// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.

let membershipType = 'Premium';

if (membershipType === 'Basic') {
    console.log('Access to only free books.');
} else if (membershipType === 'Standard') {
    console.log('Access to free books and discounted paid books.');
} else if (membershipType === 'Premium') {
    console.log('Access to all books, including exclusive content.');
} else {
    console.log('Invalid membership type.');
}

// 2. Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.

let membershipStatus = 'VIP';
let purchaseAmount = 200;

if (membershipStatus === 'Regular') {
    if (purchaseAmount < 100) {
        console.log(`No discount. Final price: $${purchaseAmount}.`);
    } else if (purchaseAmount >= 100 && purchaseAmount <= 500) {
        let discount = purchaseAmount * 0.05;
        console.log(`5% discount. Final price: $${purchaseAmount - discount}.`);
    } else {
        let discount = purchaseAmount * 0.10;
        console.log(`10% discount. Final price: $${purchaseAmount - discount}.`);
    }
} else if (membershipStatus === 'VIP') {
    if (purchaseAmount < 100) {
        let discount = purchaseAmount * 0.10;
        console.log(`10% discount. Final price: $${purchaseAmount - discount}.`);
    } else if (purchaseAmount >= 100 && purchaseAmount <= 500) {
        let discount = purchaseAmount * 0.15;
        console.log(`15% discount. Final price: $${purchaseAmount - discount}.`);
    } else {
        let discount = purchaseAmount * 0.20;
        console.log(`20% discount. Final price: $${purchaseAmount - discount}.`);
    }
} else {
    console.log('Invalid membership status.');
}


// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:

// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.

// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.

// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.

// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.

let gpa = 3.8;
let extracurricularActivities = 2;
let communityServiceHours = 50;

let eligibleScholarships = [];

if (gpa >= 3.5) {
    eligibleScholarships.push('Merit-Based Scholarship');
}

if (extracurricularActivities >= 2 && gpa >= 3.0) {
    eligibleScholarships.push('Leadership Scholarship');
}

if (communityServiceHours >= 100 && gpa >= 2.5) {
    eligibleScholarships.push('Community Service Scholarship');
}

if (eligibleScholarships.length > 0) {
    console.log(`Eligible for: ${eligibleScholarships.join(', ')}`);
} else {
    console.log('Not eligible for any scholarships.');
}

// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:

// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.

// Weekends: Standard price of $15. Seniors and children receive a 30% discount.

// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.

let dayOfWeek = 'Weekend';
let age = 25;

if (dayOfWeek === 'Weekday') {
    if (age >= 65 || age < 12) {
        console.log('Ticket price: $6');
    } else {
        console.log('Ticket price: $12');
    }
} else if (dayOfWeek === 'Weekend') {
    if (age >= 65 || age < 12) {
        console.log('Ticket price: $10.50');
    } else {
        console.log('Ticket price: $15');
    }
} else {
    console.log('Invalid day of week.');
}

// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:

// The user must be 18 years or older to register.

// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.

// The user must provide a valid email address.

// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.

let Age = 22;
let participants = 90;
let email = 'example@example.com';

if (age < 18) {
    console.log('Must be 18 years or older to register.');
} else if (participants >= 100) {
    console.log('Event is full. Registration is closed.');
} else if (!email.includes('@')) {
    console.log('Invalid email address.');
} else {
    console.log('Registration successful!');
}
