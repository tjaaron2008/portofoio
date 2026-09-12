/* =========================================
   PORTFOLIO DATA LOADER
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    loadPortfolio();
});


async function loadPortfolio() {

    try {

        const response = await fetch("database.json");

        if (!response.ok) {
            throw new Error("Could not load database.json");
        }

        const data = await response.json();

        populatePersonalInfo(data);
        populateEducation(data.education);
        populateSkills(data.skills);
        populateProjects(data.projects);
        populateExperience(data.experience);
        populateCertifications(data.certifications);
        populateAchievements(data.achievements);
        populateInterests(data.interests);
        populateSocials(data.socials);

        document.title =
            `${data.personal.name} | Portfolio`;

    } catch (error) {

        console.error("Portfolio loading error:", error);

        showError();

    }
}


/* =========================================
   PERSONAL INFORMATION
========================================= */

function populatePersonalInfo(data) {

    const personal = data.personal;

    setText("nav-name", personal.name);

    setText("hero-name", personal.name);

    setText("hero-role", personal.role);

    setText("hero-tagline", personal.tagline);

    setText(
        "hero-location",
        `📍 ${personal.location}`
    );

    setText(
        "about-text",
        personal.about
    );

    setText(
        "about-location",
        personal.location
    );

    setText(
        "email-text",
        personal.email
    );

    setText(
        "phone-text",
        personal.phone
    );

    setText(
        "footer-name",
        personal.name
    );


    /* Profile image */

    const profileImage =
        document.getElementById("profile-image");

    if (profileImage && personal.profileImage) {

        profileImage.src =
            personal.profileImage;

        profileImage.alt =
            `${personal.name} profile photo`;
    }


    /* Email */

    const emailLink =
        document.getElementById("email-link");

    if (emailLink) {
        emailLink.href =
