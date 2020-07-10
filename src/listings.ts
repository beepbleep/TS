interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    id: "001",
    title: "Cozy1",
    image: "https://i.picsum.photos/id/655/200/200.jpg",
    address: "Here1",
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5,
  },
  {
    id: "002",
    title: "Cozy2",
    image: "https://i.picsum.photos/id/656/200/200.jpg",
    address: "Here2",
    price: 11000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 1,
    rating: 4,
  },
  {
    id: "003",
    title: "Cozy3",
    image: "https://i.picsum.photos/id/657/200/200.jpg",
    address: "Here3",
    price: 12000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 4,
  },
];
