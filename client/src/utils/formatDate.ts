export const formatDateForInput = (date: Date): string => {
    let month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = date.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [year, month, day].join("-");
};

export const formatDateToDDMMYYYY = (dateString: string) => {
  const parts = dateString.split('-');
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}
