export const toBaseShift = (id, type, date, reason) => {
    return {
        id,
        type,
        date,
        reason,
        finished: false,
    };
};

export const toOnlineShift = (
    id,
    shiftType,
    shiftDate,
    shiftReason,
    scheduledDate
) => {
    return {
        id: id,
        type: shiftType,
        date: shiftDate,
        reason: shiftReason,
        scheduledDate,
        finishDate: '',
        finished: false,
    };
};

export const toOfficerShift = (id, shiftType, shiftDate, officerFullName) => {
    return {
        id: id,
        type: shiftType,
        date: shiftDate,
        officerFullName: officerFullName,
        finished: false,
    };
};
