
// Inventory Management System
// Version 1 - Frontend

const equipmentData = [
    {
        name: "Cooling Bed",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "New Straightening Machine",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "T2 Bed",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "NDT",
        type: "Main Equipment",
        subEquipment: [
            "Brushing Machine",
            "FMG Machine",
            "Eddy Current Testing Machine",
            "UT Machine",
            "Paint Marking",
            "TGU's"
        ]
    },
    {
        name: "Transfer Bed",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "Carbide Saw",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "Press Machine",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "Pilling Bed",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "Inspection Bed",
        type: "Main Equipment",
        subEquipment: []
    },
    {
        name: "LRW Equipments",
        type: "Main Equipment",
        subEquipment: [
            "Entry Side Roller Table",
            "Exit Side Roller Table",
            "Grinding Machine",
            "Welding Machine"
        ]
    }
];

console.log("Inventory Management System Loaded");

console.log("Total Main Equipment:", equipmentData.length);

console.log("Equipment List:", equipmentData);
function showEquipment() {

    const grid = document.getElementById("equipmentGrid");

    if (!grid) return;

    grid.innerHTML = "";

    equipmentData.forEach((equipment) => {

        const card = document.createElement("div");

        card.className = "equipment-card";

        let subHTML = "";

        if (equipment.subEquipment.length > 0) {

            subHTML = `
                <div style="margin-top:15px; font-weight:bold;">
                    Sub Equipment:
                </div>

                <ul class="sub-list">
                    ${equipment.subEquipment
                        .map(sub => `<li>${sub}</li>`)
                        .join("")}
                </ul>
            `;
        }

        card.innerHTML = `

            <div class="equipment-icon">
                ⚙️
            </div>

            <div class="equipment-name">
                ${equipment.name}
            </div>

            <div class="equipment-type">
                ${equipment.type}
            </div>

            ${subHTML}

        `;

        grid.appendChild(card);

    });

}

showEquipment();
function showPage(page) {

    const dashboard = document.getElementById("dashboardPage");
    const equipment = document.getElementById("equipmentPage");

    // Hide all pages first

    if (dashboard) {
        dashboard.style.display = "none";
    }

    if (equipment) {
        equipment.style.display = "none";
    }


    // Dashboard

    if (page === "dashboard") {

        if (dashboard) {
            dashboard.style.display = "block";
        }

    }


    // Equipment

    if (page === "equipment") {

        if (equipment) {
            equipment.style.display = "block";
        }

        showEquipment();

    }

}
