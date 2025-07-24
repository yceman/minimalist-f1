// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

const teams = [
  { id:1, name: "Alpine", base: "Silverstone, United Kingdom", fullname: "BWT Alpine Formula One Team" },
  { id:2, name: "Aston Martin", base: "Enstone, United Kingdom", fullname: "Aston Martin Aramco Formula One Team" },
  { id:3, name: "Ferrari", base: "Maranello, Italy", fullname: "Scuderia Ferrari HP" },
  { id:4, name: "Haas", base: "Kannapolis, United States", fullname: "MoneyGram Haas F1 Team" },
  { id:5, name: "Kick Sauber", base: "Hinwil, Switzerland", fullname: "Stake F1 Team Kick Sauber" },
  { id:6, name: "McLaren", base: "Woking, United Kingdom", fullname: "McLaren Formula 1 Team" },
  { id:7, name: "Mercedes", base: "Brackley, United Kingdom", fullname: "Mercedes-AMG PETRONAS Formula One Team" },
  { id:8, name: "Racing Bulls", base: "Faenza, Italy", fullname: "Visa Cash App Racing Bulls Formula One Team" },
  { id:9, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom", fullname: "Oracle Red Bull Racing" },
  { id:10, name: "Williams", base: "Grove, United Kingdom", fullname: "Atlassian Williams Racing" },
]

const drivers = [
  { id:1, name: "Alexander Albon", team: "Atlassian Williams", number: "#23" },
  { id:2, name: "Andrea Kimi Antonelli", team: "Mercedes", number: "#12" },
  { id:3, name: "Carlos Sainz", team: "Atlassian Williams", number: "#55" },
  { id:4, name: "Charles Leclerc", team: "Ferrari", number: "#16" },
  { id:5, name: "Esteban Ocon", team: "Haas", number: "#31" },
  { id:6, name: "Fernando Alonso", team: "Aston Martin", number: "#14" },
  { id:7, name: "Franco Colapinto", team: "BWT Alpine", number: "#43" },
  { id:8, name: "Gabriel Bortoleto", team: "Kick Sauber", number: "#5" },
  { id:9, name: "George Russell", team: "Mercedes", number: "#63" },
  { id:10, name: "Isack Hadjar", team: "Racing Bulls", number: "#6" },
  { id:11, name: "Jack Doohan", team: "BWT Alpine", number: "#7" },
  { id:12, name: "Lance Stroll", team: "Aston Martin", number: "#18" },
  { id:13, name: "Lando Norris", team: "McLaren", number: "#4" },
  { id:14, name: "Lewis Hamilton", team: "Ferrari", number: "#44" },
  { id:15, name: "Liam Lawson", team: "Racing Bulls", number: "#30" },
  { id:16, name: "Max Verstappen", team: "Red Bull Racing", number: "#1" },
  { id:17, name: "Nico Hulkenberg", team: "Kick Sauber", number: "#27" },
  { id:18, name: "Oscar Piastri", team: "McLaren", number: "#81" },
  { id:19, name: "Oliver Bearman", team: "Haas", number: "#87" },
  { id:20, name: "Pierre Gasly", team: "BWT Alpine", number: "#10" },
  { id:21, name: "Yuki Tsunoda", team: "Red Bull", number: "#22" },
]

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get('/teams', async function handler (request, response) {
  response.type("application/json").code(200)
  return { teams }
})

fastify.get('/drivers', async function handler (request, response) {
  response.type("application/json").code(200)
  return { drivers }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
