import { reactive, toRefs } from "vue";

type Ghost = {
  id: string,
  coordinates: number[],
  coordinatesSearch: number[],
}

type Items = {
  id: string,
  coordinates: number[],
}

type State = {
  Board: number[],
  Points: number,
  PacmanCoordinates: number[],
  Ghosts: Ghost[],
  Items: Items[],
}
