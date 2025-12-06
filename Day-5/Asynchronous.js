// Fake API call (callback)
function fakeAPICall(data, callback) {
    setTimeout(() => {
        callback(null, `API Response: ${data}`);
    }, 2000);
}

// Callback Example

function fetchDataWithCallback() {
    console.log("Fetching using Callback...");

    fakeAPICall("User Data", (err, result) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("Callback Result:", result);
        }
    });
}

fetchDataWithCallback();

// Promise Version

function fakeAPICallPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`API Response: ${data}`);
        }, 2000);
    });
}

function fetchDataWithPromise() {
    console.log("Fetching using Promise...");

    fakeAPICallPromise("User Data")
        .then(result => console.log("Promise Result:", result))
        .catch(err => console.log("Error:", err));
}

fetchDataWithPromise();


// Async/Await Version
async function fetchDataAsync() {
    console.log("Fetching using Async/Await...");

    try {
        const result = await fakeAPICallPromise("User Data");
        console.log("Async/Await Result:", result);
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchDataAsync();
