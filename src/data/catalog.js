import { z } from 'zod'

export const genres = ['Todos', 'Ação', 'Drama', 'Ficção científica', 'Comédia', 'Suspense']

import avengersPoster from '../assets/imgs/Avengers.jpeg'
import endPoster from '../assets/imgs/e o fim.jpeg'
import myWifeAndKidsPoster from '../assets/imgs/eu i a patroa.jpeg'
import grownUpsPoster from '../assets/imgs/gente grande.jpeg'
import itPoster from '../assets/imgs/IT.jpeg'
import devilWearsPradaPoster from '../assets/imgs/o diabo veste prada.jpeg'
import fantasticFourPoster from '../assets/imgs/quarteto fantastico.jpeg'
import rickAndMortyPoster from '../assets/imgs/Rick and Morty.jpeg'
import theBoysPoster from '../assets/imgs/the boys.jpeg'
import youPoster from '../assets/imgs/you.jpeg'

const mediaSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  type: z.enum(['Filme', 'Série']),
  genre: z.enum(genres.slice(1)),
  year: z.number(),
  duration: z.string().min(1),
  rating: z.string().min(1),
  score: z.number().min(0).max(10),
  poster: z.string().min(1),
  description: z.string().min(1),
})

export const featuredMovies = mediaSchema.array().parse([
  {
    id: 1,
    title: 'Avengers Educadores',
    type: 'Filme',
    genre: 'Ficção científica',
    year: 2025,
    duration: '2h 08min',
    rating: '16',
    score: 9.1,
    poster: avengersPoster,
    description: 'Uma nova equipe de heróis encara uma missão que pode transformar o futuro.',
  },
  {
    id: 2,
    title: 'O Diabo Veste Prada 2',
    type: 'Filme',
    genre: 'Drama',
    year: 2024,
    duration: '1h 52min',
    rating: '12',
    score: 8.7,
    poster: devilWearsPradaPoster,
    description: 'Novos desafios colocam moda, carreira e escolhas pessoais em rota de colisão.',
  },
  {
    id: 3,
    title: 'O Quarteto Fantástico: Primeiros Passos',
    type: 'Filme',
    genre: 'Ação',
    year: 2025,
    duration: '1h 47min',
    rating: '14',
    score: 8.4,
    poster: fantasticFourPoster,
    description: 'A primeira família da Marvel enfrenta uma ameaça cósmica enquanto protege seu mundo.',
  },
])

export const movies = mediaSchema.array().parse([
  ...featuredMovies,
  {
    id: 4,
    title: 'Gente Grande 2',
    type: 'Filme',
    genre: 'Comédia',
    year: 2023,
    duration: '1h 36min',
    rating: '10',
    score: 8.2,
    poster: grownUpsPoster,
    description: 'Um grupo de amigos se reúne novamente e transforma as férias em uma sequência de confusões.',
  },
  {
    id: 5,
    title: 'It: Capítulo Dois',
    type: 'Filme',
    genre: 'Suspense',
    year: 2022,
    duration: '1h 58min',
    rating: '16',
    score: 8.6,
    poster: itPoster,
    description: 'O Clube dos Perdedores retorna a Derry para enfrentar o mal que marcou sua infância.',
  },
  {
    id: 6,
    title: 'É o Fim',
    type: 'Filme',
    genre: 'Drama',
    year: 2021,
    duration: '2h 01min',
    rating: '12',
    score: 8.1,
    poster: endPoster,
    description: 'Um grupo de amigos tenta sobreviver ao fim do mundo preso dentro de uma casa.',
  },
])

export const series = mediaSchema.array().parse([
  {
    id: 101,
    title: 'Os Guris',
    type: 'Série',
    genre: 'Ação',
    year: 2025,
    duration: '2 temporadas',
    rating: '16',
    score: 9.3,
    poster: theBoysPoster,
    description: 'Um grupo de amigos se envolve em uma noite de confusão, medo e muita aventura.',
  },
  {
    id: 102,
    title: "Men's Caves",
    type: 'Série',
    genre: 'Ficção científica',
    year: 2024,
    duration: '1 temporada',
    rating: '14',
    score: 8.9,
    poster: rickAndMortyPoster,
    description: 'Um grupo de jovens encara criaturas estranhas em uma aventura por mundos fantásticos.',
  },
  {
    id: 103,
    title: 'Eu Iludi as Crianças',
    type: 'Série',
    genre: 'Comédia',
    year: 2023,
    duration: '3 temporadas',
    rating: '12',
    score: 8.5,
    poster: myWifeAndKidsPoster,
    description: 'Uma família barulhenta transforma cada dia em uma nova situação inesperada.',
  },
  {
    id: 104,
    title: 'Tu',
    type: 'Série',
    genre: 'Suspense',
    year: 2025,
    duration: '1 temporada',
    rating: '16',
    score: 9.0,
    poster: youPoster,
    description: 'Um homem carismático esconde segredos enquanto observa cada passo de quem deseja.',
  },
])

export const team = [
  { id: 1, name: 'Danilo Carneiro', role: "Equipe Men's Caves" },
  { id: 2, name: 'Leonardo Barbosa', role: "Equipe Men's Caves" },
  { id: 3, name: 'Gustavo Bonetto', role: "Equipe Men's Caves" },
  { id: 4, name: 'Davi Sanches', role: "Equipe Men's Caves" },
  { id: 5, name: 'Luiz Guilherme', role: "Equipe Men's Caves" },
]
