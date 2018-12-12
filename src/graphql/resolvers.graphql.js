import heroesResolver from './resolvers/heroes.resolvers.sqlserver'
import powersResolver from './resolvers/powers.resolvers.sqlserver'
import positionsResolvers from './resolvers/position.resolvers'
import empresasResolvers from './resolvers/empresas.resolvers'
import empleadosResolvers from './resolvers/empleados.resolvers'

const resolvers = {
  Query: {
    ...heroesResolver.queries,
    ...powersResolver.queries,
    ...positionsResolvers.queries,
    ...empresasResolvers.queries,
    ...empleadosResolvers.queries
  },
  Mutation: {
    ...heroesResolver.mutations,
    ...powersResolver.mutations,
    ...positionsResolvers.mutations,
    ...empresasResolvers.mutations,
    ...empleadosResolvers.mutations
  },
  Heroe: {
    powers: powersResolver.relations.getByHeroe
  },
  Power: {
    heroe: heroesResolver.relations.getById
  },
  Empleado: {
    position: positionsResolvers.relations.getByEmpleado,
    company: empresasResolvers.relations.getByEmpleado
  },
  Position: {
    empleados: empleadosResolvers.relations.getByPosition
  },
  Empresa: {
    empleados: empleadosResolvers.relations.getByEmpresa
  }
}

export default resolvers
