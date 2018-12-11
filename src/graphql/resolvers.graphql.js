import heroesResolver from './resolvers/heroes.resolvers'
import powersResolver from './resolvers/powers.resolvers'

const resolvers = {
  Query: {
    ...heroesResolver.queries,
    ...powersResolver.queries
  },
  Mutation: {
    ...heroesResolver.mutations,
    ...powersResolver.mutations
  },
  Heroe: {
    powers: powersResolver.relations.getByHeroe
  },
  Power: {
    heroe: heroesResolver.relations.getById
  }
}

export default resolvers
