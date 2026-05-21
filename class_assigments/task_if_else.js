/* Question 1 — HTTP Status Code Categorizer
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

let status_code = 405;

if (status_code >= 200 && status_code <= 299) {
    console.log("Success");
} else if (status_code >= 300 && status_code <= 399) {
    console.log("Redirection");
} else if (status_code >= 400 && status_code <= 499) {
    console.log("Client Error");
} else if (status_code >= 500 && status_code <= 599) {
    console.log("Server Error");
} else {
    console.log("Invalid code");
}

/*Question 2 — Test Case Pass/Fail Verdict

Problem: Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials */

let actual_output = "Invalid Credentials";
let expected_output = "Login Successful";
if (actual_output === expected_output) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed");
}

/**Question 3 — Bug Severity Classifier

Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score

Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium */

let severity = 2;
if (severity === 9 || severity === 10) {
    console.log("Severity: Critical — Block release");
} else if (severity === 7 || severity === 8) {
    console.log("Severity: High");
} else if (severity >= 4 && severity <= 6) {
    console.log("Severity: Medium");
} else if (severity >= 1 && severity <= 3) {
    console.log("Severity: Low");

} else {
    console.log("Invalid Severity")
}

/*Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment */

let build_health_score = 88;
if (build_health_score === 100) {
    console.log("Green build")
} else if (build_health_score >= 90) {
    console.log("🟡 Stable Build")
} else if (build_health_score >= 70) {
    console.log("Unstable build");
} else {
    console.log("🔴 Broken Build — Block deployment")
}


/* Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. Lock the account after 3 failed attempts.
Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

let attempts = 3;
if (attempts === 0) {
    console.log("Login Successful");
} else if (attempts === 2) {
    console.log("1 attempt left before lockout");
} else if (attempts === 3) {
    console.log("🔒 Account Locked — Contact support");
}