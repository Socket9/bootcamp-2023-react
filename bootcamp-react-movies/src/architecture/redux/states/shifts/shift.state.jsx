import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shifts: [
        {
            id: 1,
            date: "2024-01-03",
            type: "caja",
            reason: "Baja de cuenta",
            finished: false,
        },
        {
            id: 2,
            date: "2024-01-04",
            type: "oficial",
            reason: "Retiro de productos",
            officerFullName: "Matias Zambrano",
            finished: false,
        },
        {
            id: 3,
            date: "2024-01-05",
            type: "online",
            reason: "Consulta general",
            scheduledDate: "2024-01-05",
            finished: false,
        },
        {
            id: 4,
            date: "2024-01-06",
            type: "oficial",
            reason: "Retiro de productos",
            officerFullName: "Jorge Gonzales",
            finished: false,
        },
    ],
    selectedShiftId: null,
};

export const ShiftEmptyState = {
    shiftList: [],
    selectedShiftId: null,
};

export const shiftSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {
        addShift: (state, action) => {
            state.shifts.push(action.payload);
        },
        setSelectedShiftId: (state, action) => {
            state.selectedShiftId = action.payload;
        },
        finalizeShift: (state, action) => {
            const shiftToFinalize = state.shifts.find(
                (shift) => shift.id === action.payload
            );
            if (shiftToFinalize) {
                shiftToFinalize.finishDate = new Date(
                    Date.now()
                ).toLocaleDateString();
                shiftToFinalize.finished = true;
            }
        },
        resetShiftList: ShiftEmptyState,
    },
});

export const { addShift, setSelectedShiftId, finalizeShift, resetShiftList } =
    shiftSlice.actions;
