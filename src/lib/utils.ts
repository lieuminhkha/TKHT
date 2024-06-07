import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function unixToDate(timestamp: number): string {

  const date = new Date(timestamp);

  const formattedDate = date.getDate().toString().padStart(2, '0') + '/'
    + (date.getMonth() + 1).toString().padStart(2, '0') + '/'
    + date.getFullYear();

  return formattedDate;
}

export const unixToHourTime = (timestamp: number) => {
  const date = new Date(timestamp);

  // Lấy giờ và phút
  let hours: number | string = date.getHours();
  let minutes: number | string = date.getMinutes();

  // Định dạng lại để đảm bảo rằng giờ và phút luôn có hai chữ số
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Xuất kết quả dưới dạng chuỗi giờ:phút
  return hours + ':' + minutes;
};

export function unixToDateTime(timestamp: number) {
  const date = new Date(timestamp);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', weekday: 'long' } as any;
  return date.toLocaleDateString('vi-VN', options);
}

export function formatTimestampToDateAndTime(timestamp: number) {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as any;
  return date.toLocaleString('vi-VN', options);
}
