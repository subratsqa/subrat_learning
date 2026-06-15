function retry(testName, maxRetries = 3, dealy = 1000) {
    console.log(`Retrying ${testName} up to ${maxRetries} times, ${dealy} miliseconds`);
}

retry("Login test");
retry("Policy creation", 5, 2000);