import fastify from 'fastify'
import userRoutes from './routes/user/user.routes'

const app = fastify()

app.get('/test',() => {

  return 'Hello World'
})
app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333,

}).then(() => {
  console.log('API Rodando')
})

export default app