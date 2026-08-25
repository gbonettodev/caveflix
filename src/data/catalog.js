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
    title: 'Horizonte de Neon',
    type: 'Filme',
    genre: 'Ficção científica',
    year: 2025,
    duration: '2h 08min',
    rating: '16',
    score: 9.1,
    poster: avengersPoster,
    description: 'Uma piloto atravessa uma cidade orbital em busca da última memória da humanidade.',
  },
  {
    id: 2,
    title: 'Depois da Chuva',
    type: 'Filme',
    genre: 'Drama',
    year: 2024,
    duration: '1h 52min',
    rating: '12',
    score: 8.7,
    poster: devilWearsPradaPoster,
    description: 'Duas irmãs reencontram suas raízes quando a cidade natal é ameaçada por uma tempestade.',
  },
  {
    id: 3,
    title: 'Código de Fuga',
    type: 'Filme',
    genre: 'Ação',
    year: 2025,
    duration: '1h 47min',
    rating: '14',
    score: 8.4,
    poster: fantasticFourPoster,
    description: 'Uma especialista em segurança tem uma noite para impedir um ataque invisível.',
  },
])

export const movies = mediaSchema.array().parse([
  ...featuredMovies,
  {
    id: 4,
    title: 'Riso em Cartaz',
    type: 'Filme',
    genre: 'Comédia',
    year: 2023,
    duration: '1h 36min',
    rating: '10',
    score: 8.2,
    poster: grownUpsPoster,
    description: 'Um grupo de amigos transforma o cinema de bairro em palco para uma última grande sessão.',
  },
  {
    id: 5,
    title: 'A Última Frequência',
    type: 'Filme',
    genre: 'Suspense',
    year: 2022,
    duration: '1h 58min',
    rating: '16',
    score: 8.6,
    poster: itPoster,
    description: 'Uma radialista capta um pedido de socorro que deveria ter sido impossível.',
  },
  {
    id: 6,
    title: 'Maré Alta',
    type: 'Filme',
    genre: 'Drama',
    year: 2021,
    duration: '2h 01min',
    rating: '12',
    score: 8.1,
    poster: endPoster,
    description: 'Uma família se reúne em uma ilha para decidir o que levará para o futuro.',
  },
])

export const series = mediaSchema.array().parse([
  {
    id: 101,
    title: 'Distrito 09',
    type: 'Série',
    genre: 'Ação',
    year: 2025,
    duration: '2 temporadas',
    rating: '16',
    score: 9.3,
    poster: theBoysPoster,
    description: 'Uma equipe de investigadores descobre que a cidade está sendo observada de dentro.',
  },
  {
    id: 102,
    title: 'Entre Mundos',
    type: 'Série',
    genre: 'Ficção científica',
    year: 2024,
    duration: '1 temporada',
    rating: '14',
    score: 8.9,
    poster: rickAndMortyPoster,
    description: 'Cinco desconhecidos acordam em versões diferentes da mesma realidade.',
  },
  {
    id: 103,
    title: 'Quase Domingo',
    type: 'Série',
    genre: 'Comédia',
    year: 2023,
    duration: '3 temporadas',
    rating: '12',
    score: 8.5,
    poster: myWifeAndKidsPoster,
    description: 'A rotina de um prédio ganha novos episódios quando ninguém consegue ficar quieto.',
  },
  {
    id: 104,
    title: 'O Arquivo Azul',
    type: 'Série',
    genre: 'Suspense',
    year: 2025,
    duration: '1 temporada',
    rating: '16',
    score: 9.0,
    poster: youPoster,
    description: 'Uma arquivista encontra fitas que antecipam crimes ainda não cometidos.',
  },
])

export const team = [
  { id: 1, name: 'Danilo Carneiro', role: "Equipe Men's Caves" },
  { id: 2, name: 'Leonardo Barbosa', role: "Equipe Men's Caves" },
  { id: 3, name: 'Gustavo Bonetto', role: "Equipe Men's Caves" },
  { id: 4, name: 'Davi Sanches', role: "Equipe Men's Caves" },
  { id: 5, name: 'Luiz Guilherme', role: "Equipe Men's Caves" },
]
