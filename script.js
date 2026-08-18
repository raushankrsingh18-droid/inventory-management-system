// ==========================================
// INVENTORY MANAGEMENT SYSTEM
// ==========================================


// ==========================================
// EQUIPMENT DATA
// ==========================================

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


// ==========================================
// SHOW EQUIPMENT
// ==========================================

function showEquipment(searchText = "") {

    const grid =
        document.getElementById("equipmentGrid");

    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    const search =
        searchText.toLowerCase().trim();


    const filteredEquipment =
        equipmentData.filter(

            equipment =>
                equipment.name
                    .toLowerCase()
                    .includes(search)

        );


    filteredEquipment.forEach(

        equipment => {

            const card =
                document.createElement("div");


            card.className =
                "equipment-card";


            let subHTML = "";


            if (
                equipment.subEquipment &&
                equipment.subEquipment.length > 0
            ) {

                subHTML = `

                    <div class="sub-title">
                        Sub Equipment
                    </div>

                    <ul class="sub-list">

                        ${equipment.subEquipment
                            .map(

                                sub => `
                                    <li>
                                        ${sub}
                                    </li>
                                `

                            )
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

        }

    );


    if (filteredEquipment.length === 0) {

        grid.innerHTML = `

            <div class="section">

                <h3>
                    No equipment found
                </h3>

                <p>
                    Try another search.
                </p>

            </div>

        `;

    }

}


// ==========================================
// EQUIPMENT SEARCH
// ==========================================

function searchEquipment() {

    const input =
        document.getElementById(
            "equipmentSearch"
        );


    if (!input) {
        return;
    }


    showEquipment(input.value);

}


// ==========================================
// ALL PAGES
// ==========================================

const pages = [

    "dashboardPage",

    "equipmentPage",

    "inventoryPage",

    "stockInPage",

    "stockOutPage",

    "historyPage",

    "lowStockPage",

    "reportsPage",

    "usersPage"

];


// ==========================================
// PAGE TITLES
// ==========================================

const pageTitles = {

    dashboard:
        "Dashboard",

    equipment:
        "Equipment",

    inventory:
        "Spare Inventory",

    stockIn:
        "Stock IN",

    stockOut:
        "Stock OUT",

    history:
        "History",

    lowStock:
        "Low Stock",

    reports:
        "Reports",

    users:
        "Users"

};


// ==========================================
// MENU IDs
// ==========================================

const menuIds = {

    dashboard:
        "menuDashboard",

    equipment:
        "menuEquipment",

    inventory:
        "menuInventory",

    stockIn:
        "menuStockIn",

    stockOut:
        "menuStockOut",

    history:
        "menuHistory",

    lowStock:
        "menuLowStock",

    reports:
        "menuReports",

    users:
        "menuUsers"

};


// ==========================================
// SHOW PAGE
// ==========================================

function showPage(page) {


    // Hide every page

    pages.forEach(

        pageId => {

            const element =
                document.getElementById(pageId);


            if (element) {

                element.style.display =
                    "none";

            }

        }

    );


    // Show selected page

    const selectedPage =
        document.getElementById(
            page + "Page"
        );


    if (selectedPage) {

        selectedPage.style.display =
            "block";

    }


    // Change page title

    const title =
        document.getElementById(
            "pageTitle"
        );


    if (title) {

        title.textContent =
            pageTitles[page] ||
            "Inventory Management";

    }


    // Remove active class

    Object.values(menuIds).forEach(

        menuId => {

            const menu =
                document.getElementById(
                    menuId
                );


            if (menu) {

                menu.classList.remove(
                    "active"
                );

            }

        }

    );


    // Add active class

    const activeMenu =
        document.getElementById(
            menuIds[page]
        );


    if (activeMenu) {

        activeMenu.classList.add(
            "active"
        );

    }


    // Load equipment

    if (page === "equipment") {

        showEquipment();

    }

}


// ==========================================
// START APPLICATION
// ==========================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        showPage("dashboard");

    }

);
