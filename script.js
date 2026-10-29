```javascript
// Initial step count and daily goal

let steps = 4500;
const dailyGoal = 8000;


// Update the fitness dashboard

function updateDashboard() {
    document.getElementById("steps").textContent =
        steps.toLocaleString("en-IN");

    document.getElementById("goalText").textContent =
        steps.toLocaleString("en-IN") +
        " / " +
        dailyGoal.toLocaleString("en-IN") +
        " steps";

    let percentage = (steps / dailyGoal) * 100;

    // Progress bar cannot exceed 100%

    percentage = Math.min(percentage, 100);

    document.getElementById("progress").style.width =
        percentage + "%";
}


// Add 500 sample steps

function addSteps() {
    steps += 500;

    updateDashboard();

    if (steps >= dailyGoal) {
        document.getElementById("goalText").textContent =
            "Daily goal reached! Great job!";
    }
}


// Reset sample step count

function resetSteps() {
    steps = 0;

    updateDashboard();
}


// Personalized coaching suggestions

function getCoaching() {
    const goal = document.getElementById("fitnessGoal").value;

    const result = document.getElementById("coachResult");

    let message = "";

    switch (goal) {

        case "weight":
            message =
                "Your activity tip: Try a comfortable walk " +
                "or a short movement break. Start at your own pace.";
            break;

        case "strength":
            message =
                "Your stamina tip: Choose a comfortable activity " +
                "and build your routine gradually. Take breaks when needed.";
            break;

        case "sleep":
            message =
                "Your sleep tip: Try keeping a regular bedtime " +
                "and creating a calm routine before sleep.";
            break;

        case "health":
            message =
                "Your balance tip: Combine enjoyable movement " +
                "with enough rest and recovery.";
            break;

        default:
            message =
                "Choose a fitness goal to receive your coaching tip.";
    }

    result.textContent = message;
}


// Initialize the dashboard

updateDashboard();
```
