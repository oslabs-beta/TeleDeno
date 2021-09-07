import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const text = `type Query {
  userData: [UserDatum!]!
  userDatum(id: ID!): UserDatum!
  tasks: [Task!]!
  task(id: ID!): Task!
  users: [User!]!
  user(user_id: ID!): User!
}

type Mutation {
  addUserDatum(
    mental_score: Int!,
    weight: Int!,
    net_worth: Int!,
    major_life_event: String,
    future: Boolean,
    user_id: String!,
    record_date: String!,
    body_fat: Int!,
    full_name: String!,
  ): UserDatum!

  updateUserDatum(
    mental_score: Int,
    weight: Int,
    net_worth: Int,
    major_life_event: String,
    future: Boolean,
    id: ID!,
    user_id: String,
    record_date: String,
    body_fat: Int,
    full_name: String,
  ): UserDatum!

  deleteUserDatum(id: ID!): UserDatum!

  addTask(
    created_at: String!,
    item: String!,
  ): Task!

  updateTask(
    created_at: String,
    id: ID!,
    item: String,
  ): Task!

  deleteTask(id: ID!): Task!

  addUser(
    first_name: String!,
    token: String!,
    last_name: String!,
  ): User!

  updateUser(
    first_name: String,
    user_id: ID!,
    token: String,
    last_name: String,
  ): User!

  deleteUser(user_id: ID!): User!
}

type UserDatum {
id: ID!
mental_score: Int!
weight: Int!
net_worth: Int!
major_life_event: String
future: Boolean
user_id: String!
record_date: String!
body_fat: Int!
full_name: String!
}

type Task {
id: ID!
created_at: String!
item: String!
}

type User {
user_id: ID!
first_name: String!
token: String!
last_name: String!
}

`;

const text2 =`type Query {
  people: [Person!]!
  person(_id: ID!): Person!
  films: [Film!]!
  film(_id: ID!): Film!
  planets: [Planet!]!
  planet(_id: ID!): Planet!
  species: [Species!]!
  speciesById(_id: ID!): Species!
  vessels: [Vessel!]!
  vessel(_id: ID!): Vessel!
  starshipSpecs: [StarshipSpec!]!
  starshipSpec(_id: ID!): StarshipSpec!
}

type Mutation {
  addPerson(
    gender: String,
    species_id: ID,
    homeworld_id: ID,
    height: Int,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    name: String!,
    birth_year: String,
  ): Person!

  updatePerson(
    gender: String,
    species_id: ID,
    homeworld_id: ID,
    height: Int,
    _id: ID!,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    name: String,
    birth_year: String,
  ): Person!

  deletePerson(_id: ID!): Person!

  addFilm(
    director: String!,
    opening_crawl: String!,
    episode_id: Int!,
    title: String!,
    release_date: String!,
    producer: String!,
  ): Film!

  updateFilm(
    director: String,
    opening_crawl: String,
    episode_id: Int,
    _id: ID!,
    title: String,
    release_date: String,
    producer: String,
  ): Film!

  deleteFilm(_id: ID!): Film!

  addPlanet(
    orbital_period: Int,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    name: String,
    rotation_period: Int,
    diameter: Int,
  ): Planet!

  updatePlanet(
    orbital_period: Int,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    _id: ID!,
    name: String,
    rotation_period: Int,
    diameter: Int,
  ): Planet!

  deletePlanet(_id: ID!): Planet!

  addSpecies(
    hair_colors: String,
    name: String!,
    classification: String,
    average_height: String,
    average_lifespan: String,
    skin_colors: String,
    eye_colors: String,
    language: String,
    homeworld_id: ID,
  ): Species!

  updateSpecies(
    hair_colors: String,
    name: String,
    classification: String,
    average_height: String,
    average_lifespan: String,
    skin_colors: String,
    eye_colors: String,
    language: String,
    homeworld_id: ID,
    _id: ID!,
  ): Species!

  deleteSpecies(_id: ID!): Species!

  addVessel(
    cost_in_credits: String,
    length: String,
    vessel_type: String!,
    model: String,
    manufacturer: String,
    name: String!,
    vessel_class: String!,
    max_atmosphering_speed: String,
    crew: Int,
    passengers: Int,
    cargo_capacity: String,
    consumables: String,
  ): Vessel!

  updateVessel(
    cost_in_credits: String,
    length: String,
    vessel_type: String,
    model: String,
    manufacturer: String,
    name: String,
    vessel_class: String,
    max_atmosphering_speed: String,
    crew: Int,
    passengers: Int,
    cargo_capacity: String,
    consumables: String,
    _id: ID!,
  ): Vessel!

  deleteVessel(_id: ID!): Vessel!

  addStarshipSpec(
    vessel_id: ID!,
    MGLT: String,
    hyperdrive_rating: String,
  ): StarshipSpec!

  updateStarshipSpec(
    _id: ID!,
    vessel_id: ID,
    MGLT: String,
    hyperdrive_rating: String,
  ): StarshipSpec!

  deleteStarshipSpec(_id: ID!): StarshipSpec!
}

type Person {
_id: ID!
gender: String
height: Int
mass: String
hair_color: String
skin_color: String
eye_color: String
name: String!
birth_year: String
species: [Species]
planets: [Planet]
films: [Film]
vessels: [Vessel]
}

type Film {
_id: ID!
director: String!
opening_crawl: String!
episode_id: Int!
title: String!
release_date: String!
producer: String!
planets: [Planet]
people: [Person]
vessels: [Vessel]
species: [Species]
}

type Planet {
_id: ID!
orbital_period: Int
climate: String
gravity: String
terrain: String
surface_water: String
population: String
name: String
rotation_period: Int
diameter: Int
films: [Film]
species: [Species]
people: [Person]
}

type Species {
_id: ID!
hair_colors: String
name: String!
classification: String
average_height: String
average_lifespan: String
skin_colors: String
eye_colors: String
language: String
planets: [Planet]
people: [Person]
films: [Film]
}

type Vessel {
_id: ID!
cost_in_credits: String
length: String
vessel_type: String!
model: String
manufacturer: String
name: String!
vessel_class: String!
max_atmosphering_speed: String
crew: Int
passengers: Int
cargo_capacity: String
consumables: String
films: [Film]
people: [Person]
starshipSpecs: [StarshipSpec]
}

type StarshipSpec {
_id: ID!
MGLT: String
hyperdrive_rating: String
vessels: [Vessel]
}

`;



const text3 = "const typeDefs = `\ntype Query {\n  planets: [Planet!]!\n  planet(_id: ID!): Planet!\n  films: [Film!]!\n  film(_id: ID!): Film!\n  species: [Species!]!\n  speciesById(_id: ID!): Species!\n  vessels: [Vessel!]!\n  vessel(_id: ID!): Vessel!\n  people: [Person!]!\n  person(_id: ID!): Person!\n  starshipSpecs: [StarshipSpec!]!\n  starshipSpec(_id: ID!): StarshipSpec!\n}\n\ntype Mutation {\n  addPlanet(\n  name: String,\n  rotation_period: Int,\n  orbital_period: Int,\n  diameter: Int,\n  climate: String,\n  gravity: String,\n  terrain: String,\n  surface_water: String,\n  population: Int\n): Planet!\n\nupdatePlanet(\n  _id: ID!,\n  name: String,\n  rotation_period: Int,\n  orbital_period: Int,\n  diameter: Int,\n  climate: String,\n  gravity: String,\n  terrain: String,\n  surface_water: String,\n  population: Int\n): Planet!\n\ndeletePlanet(_id: ID!):  Planet!\n\naddFilm(\n  title: String!,\n  episode_id: Int!,\n  opening_crawl: String!,\n  director: String!,\n  producer: String!,\n  release_date: String!\n): Film!\n\nupdateFilm(\n  _id: ID!,\n  title: String!,\n  episode_id: Int!,\n  opening_crawl: String!,\n  director: String!,\n  producer: String!,\n  release_date: String!\n): Film!\n\ndeleteFilm(_id: ID!):  Film!\n\naddSpecies(\n  name: String!,\n  classification: String,\n  average_height: String,\n  average_lifespan: String,\n  hair_colors: String,\n  skin_colors: String,\n  eye_colors: String,\n  language: String,\n  homeworld_id: Int\n): Species!\n\nupdateSpecies(\n  _id: ID!,\n  name: String!,\n  classification: String,\n  average_height: String,\n  average_lifespan: String,\n  hair_colors: String,\n  skin_colors: String,\n  eye_colors: String,\n  language: String,\n  homeworld_id: Int\n): Species!\n\ndeleteSpecies(_id: ID!):  Species!\n\naddVessel(\n  name: String!,\n  manufacturer: String,\n  model: String,\n  vessel_type: String!,\n  vessel_class: String!,\n  cost_in_credits: Int,\n  length: String,\n  max_atmosphering_speed: String,\n  crew: Int,\n  passengers: Int,\n  cargo_capacity: String,\n  consumables: String\n): Vessel!\n\nupdateVessel(\n  _id: ID!,\n  name: String!,\n  manufacturer: String,\n  model: String,\n  vessel_type: String!,\n  vessel_class: String!,\n  cost_in_credits: Int,\n  length: String,\n  max_atmosphering_speed: String,\n  crew: Int,\n  passengers: Int,\n  cargo_capacity: String,\n  consumables: String\n): Vessel!\n\ndeleteVessel(_id: ID!):  Vessel!\n\naddPerson(\n  name: String!,\n  mass: String,\n  hair_color: String,\n  skin_color: String,\n  eye_color: String,\n  birth_year: String,\n  gender: String,\n  species_id: Int,\n  homeworld_id: Int,\n  height: Int\n): Person!\n\nupdatePerson(\n  _id: ID!,\n  name: String!,\n  mass: String,\n  hair_color: String,\n  skin_color: String,\n  eye_color: String,\n  birth_year: String,\n  gender: String,\n  species_id: Int,\n  homeworld_id: Int,\n  height: Int\n): Person!\n\ndeletePerson(_id: ID!):  Person!\n\naddStarshipSpec(\n  hyperdrive_rating: String,\n  MGLT: String,\n  vessel_id: Int!\n): StarshipSpec!\n\nupdateStarshipSpec(\n  _id: ID!,\n  hyperdrive_rating: String,\n  MGLT: String,\n  vessel_id: Int!\n): StarshipSpec!\n\ndeleteStarshipSpec(_id: ID!):  StarshipSpec!\n\n}\n\n  \ntype Planet {\n    _id: ID!\n    name: String\n    rotation_period: Int\n    orbital_period: Int\n    diameter: Int\n    climate: String\n    gravity: String\n    terrain: String\n    surface_water: String\n    population: Int\n    species: [Species]\n    films: [Film]\n    people: [Person]\n    planets_in_films: [PlanetsInFilm]\n  }\n  \ntype Film {\n    _id: ID!\n    title: String!\n    episode_id: Int!\n    opening_crawl: String!\n    director: String!\n    producer: String!\n    release_date: String!\n    people: [Person]\n    planets: [Planet]\n    species: [Species]\n    vessels: [Vessel]\n    people_in_films: [PeopleInFilm]\n    planets_in_films: [PlanetsInFilm]\n    species_in_films: [SpeciesInFilm]\n    vessels_in_films: [VesselsInFilm]\n  }\n  \ntype Species {\n    _id: ID!\n    name: String!\n    classification: String\n    average_height: String\n    average_lifespan: String\n    hair_colors: String\n    skin_colors: String\n    eye_colors: String\n    language: String\n    planets: [Planet]\n    films: [Film]\n    people: [Person]\n    species_in_films: [SpeciesInFilm]\n  }\n  \ntype Vessel {\n    _id: ID!\n    name: String!\n    manufacturer: String\n    model: String\n    vessel_type: String!\n    vessel_class: String!\n    cost_in_credits: Int\n    length: String\n    max_atmosphering_speed: String\n    crew: Int\n    passengers: Int\n    cargo_capacity: String\n    consumables: String\n    people: [Person]\n    films: [Film]\n    pilots: [Pilot]\n    starship_specs: [StarshipSpec]\n    vessels_in_films: [VesselsInFilm]\n  }\n  \ntype Person {\n    _id: ID!\n    name: String!\n    mass: String\n    hair_color: String\n    skin_color: String\n    eye_color: String\n    birth_year: String\n    gender: String\n    species: [Species]\n    planets: [Planet]\n    height: Int\n    films: [Film]\n    vessels: [Vessel]\n    people_in_films: [PeopleInFilm]\n    pilots: [Pilot]\n  }\n  \ntype StarshipSpec {\n    _id: ID!\n    hyperdrive_rating: String\n    MGLT: String\n    vessels: [Vessel]\n  }\n\n`"








// const useStyles = makeStyles({
//     root: {
//       background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//       border: 0,
//       borderRadius: 3,
//       boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//       color: 'white',
//       height: 50,
//       padding: '30px 30px',
//     },
//   });

const styles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
          border: '2px solid white',
          width: '100%',
          position: 'absolute',
          right: '0',
          height: '100%',
          spellCheck: "false"
        },
    }
});

function CodeOutput () {
    const classes = styles();
    return (
  <div id="codebox">
    <TextField
          id="outlined-multiline-static"
          fullWidth={true}
          label="Output"
          multiline
          rows={Math.floor(window.innerHeight/25.75)}
          className={classes.root}
          inputProps={{className: classes.root}}
          InputLabelProps={{className: classes.root}}
          defaultValue={text3}
          variant="outlined"
        />
        </div>
      
       
    )
};

export default CodeOutput;