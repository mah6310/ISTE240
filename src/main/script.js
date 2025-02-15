function updateClock() { // This line declares function named updateClock, since we are constantly updating the clock
                               // to give latest time

    //NOTE: Date is an Object thats built into JS, no need for importation.

    const now = new Date();  /// Line creates new object called Date, which holds current date and time.

    let hours = now.getHours(); // Gets the current hour from 0 to 23 from object Date

    const minutes = now.getMinutes().toString().padStart(2, '0'); /* 1) Line gets current minutes from 0 to 59 .getMinutes()
                                                                            2) Converts it into a string .toString()
                                                                            3) Ensure that its 2 digits and padded with 0 if single digit .padStart(2, '0')
                                                                                                        */

    const seconds = now.getSeconds().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';  // Checks if current hour is 12 or greater
                                                   // If greater than 12 sets ampm to PM
                                                  // Else set to AM

    hours = hours % 12; // Turns the hour from 24 hour format to 12 hour format

    hours = hours ? hours : 12; // Ensures when hour is 0, turn the

    hours = hours.toString().padStart(2, '0'); //

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`; // Formates string combining hours + mins + seconds and AMPM
    document.getElementById('clock').textContent = timeString; // Finds HTML element with ID clock thats in home.html and sets text content into formatted time.
}

setInterval(updateClock, 1000);  // Update the clock every second (1000ms = 1 second)

updateClock();  // Displays current time as soon as page loads
