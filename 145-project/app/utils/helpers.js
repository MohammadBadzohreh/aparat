export function getAge(age) {
    if (age <= 7) return `${age}روز پیش`;
    if (age <= 30)
      return `${Math.floor(age / 7)}هفته پیش`;
    if (age <= 365)
      return `${Math.floor(age / 30)}ماه پیش`;
    return `${Math.floor(age / 365)}سال پیش`;
  }