//bulk email sending simulation with parallel promises and error handling

//1. Think of a scenerio where you must simulate sending bulk emil to 5 users.
// Treat each email sending operation as a promise (you may simulate it using setTimeout).
//all email must be send parallel using promise.all
//if any email fails then(for ex due to the random failure condition ), you must ccatch the error
//and clesrly show which specific email failed
//in addition, use a finally block to display a message indicating that the email sending process is completed
