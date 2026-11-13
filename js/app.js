
document.addEventListener("DOMContentLoaded", () => {

    const menuGrid = document.getElementById("menuGrid");
    const menuSection = document.getElementById("menuSection");
    const enterButton = document.getElementById("enterMenu");
    const loadingScreen = document.getElementById("loadingScreen");

    // Opening animation
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }
    }, 2800);

    // Enter the menu
    if (enterButton && menuSection) {
        enterButton.addEventListener("click", () => {
            menuSection.classList.add("active");

            menuSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // Safe text rendering
    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
    }

    // Render all 25 menu cards
    function renderMenu() {

        if (!menuGrid) return;

        menuGrid.innerHTML = "";

        experiences.forEach((experience) => {

            const redeemed = StorageManager.isRedeemed(experience.id);

            const card = document.createElement("article");

            card.className = "experience-card";

            if (redeemed) {
                card.classList.add("redeemed");
            }

            card.innerHTML = `
                <div class="card-top">
                    <span class="experience-number">
                        NO. ${String(experience.id).padStart(2, "0")}
                    </span>

                    <span class="card-status">
                        ${redeemed ? "CLAIMED" : "AVAILABLE"}
                    </span>
                </div>

                <div class="card-decoration">
                    <span>✦</span>
                </div>

                <div class="card-content">
                    <p class="card-category">
                        ${escapeHTML(experience.category)}
                    </p>

                    <h3>${escapeHTML(experience.title)}</h3>

                    <p class="card-description">
                        ${escapeHTML(experience.description)}
                    </p>
                </div>

                <div class="card-bottom">
                    <span class="card-duration">
                        ${escapeHTML(experience.duration)}
                    </span>

                    <span class="card-action">
                        ${redeemed ? "ALREADY CLAIMED" : "VIEW EXPERIENCE →"}
                    </span>
                </div>

                ${redeemed ? '<div class="claimed-stamp">CLAIMED</div>' : ""}
            `;

            card.addEventListener("click", () => {
                openExperience(experience);
            });

            menuGrid.appendChild(card);
        });

        updateProgress();
    }

    // Open experience details
    function openExperience(experience) {

        const alreadyRedeemed =
            StorageManager.isRedeemed(experience.id);

        closeModal();

        const overlay = document.createElement("div");

        overlay.className = "experience-overlay";
        overlay.id = "experienceOverlay";

        overlay.innerHTML = `
            <div class="experience-modal">

                <button class="modal-close" id="closeModal"
                    aria-label="Close">&times;</button>

                <div class="modal-ornament">✦</div>

                <p class="modal-number">
                    PRIVATE EXPERIENCE ·
                    ${String(experience.id).padStart(2, "0")}
                </p>

                <p class="modal-category">
                    ${escapeHTML(experience.category)}
                </p>

                <h2>${escapeHTML(experience.title)}</h2>

                <div class="modal-line">
                    <span>❧</span>
                </div>

                <p class="modal-description">
                    ${escapeHTML(experience.description)}
                </p>

                <div class="instruction-box">

                    <span class="instruction-heading">
                        THE EXPERIENCE
                    </span>

                    <p>${escapeHTML(experience.instruction)}</p>

                </div>

                <p class="modal-duration">
                    ${escapeHTML(experience.duration)}
                </p>

                ${
                    alreadyRedeemed
                    ? `
                        <div class="redeemed-message">
                            ✦ THIS EXPERIENCE HAS BEEN CLAIMED ✦
                        </div>
                    `
                    : `
                        <button class="redeem-button" id="redeemButton">
                            REDEEM THIS EXPERIENCE
                        </button>
                    `
                }

                <p class="modal-footer">
                    PREPARED WITH LOVE · AFTER DARK
                </p>

            </div>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        document.getElementById("closeModal")
            .addEventListener("click", closeModal);

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeModal();
            }
        });

        const redeemButton =
            document.getElementById("redeemButton");

        if (redeemButton) {

            redeemButton.addEventListener("click", () => {

                const confirmed = window.confirm(
                    `Redeem "${experience.title}"?\n\nThis experience can only be claimed once on this browser.`
                );

                if (!confirmed) return;

                const success =
                    StorageManager.redeem(experience.id);

                if (success) {

                    closeModal();
                    renderMenu();

                    alert(
                        "Your experience has been claimed. Enjoy your special moment! ♥"
                    );

                } else {

                    alert(
                        "This experience has already been claimed or could not be saved."
                    );

                    closeModal();
                    renderMenu();
                }
            });
        }
    }

    // Close popup
    function closeModal() {

        const overlay =
            document.getElementById("experienceOverlay");

        if (overlay) {
            overlay.remove();
        }

        document.body.style.overflow = "";
    }

    // Remaining experience counter
    function updateProgress() {

        if (!menuSection) return;

        const remaining =
            StorageManager.getRemainingCount();

        let progress =
            document.getElementById("progressInfo");

        if (!progress) {

            progress = document.createElement("div");

            progress.id = "progressInfo";
            progress.className = "progress-info";

            menuGrid.insertAdjacentElement(
                "afterend",
                progress
            );
        }

        progress.innerHTML = `
            <span>YOUR PRIVATE COLLECTION</span>
            <strong>${remaining} / 25</strong>
            <span>EXPERIENCES REMAINING</span>
        `;
    }

    // Escape key closes popup
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeModal();
        }
    });

    // Initial render
    renderMenu();

});
