const dateFormatter = (timestamp: string) => {
  const date = new Date(timestamp);

  // Get date components
  const month = date.toLocaleString('en-US', { month: 'short' }); // e.g. 'Jan'
  const day = date.getDate(); // e.g. 8
  const year = date.getFullYear(); // e.g. 2025

  // Get time components
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle 0 as 12

  // Get time zone offset in hours and minutes (e.g. GMT+5)
  const offset = -date.getTimezoneOffset();
  const offsetHours = Math.floor(offset / 60);
  const offsetMinutes = Math.abs(offset % 60);
  const offsetSign = offset >= 0 ? '+' : '-';
  const timeZone = `GMT${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;

  // Format the final string
  return `${month}/${day}/${year} ${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm} ${timeZone}`;
};

export default dateFormatter;
