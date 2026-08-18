
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
