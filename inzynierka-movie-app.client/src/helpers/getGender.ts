const genders = [
  {
    id: 0,
    gender: "Not specified",
  },
  {
    id: 1,
    gender: "Female",
  },
  {
    id: 2,
    gender: "Male",
  },
  {
    id: 3,
    gender: "Non-binary",
  },
];

export default function getGender(id: number) {
  const found = genders.find((gender) => gender.id === id);
  return found ? found.gender : "";
}
