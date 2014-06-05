
Meteor.startup ->
  
  # expose chai bdd assertions globally
  @expect = chai.expect

  if Meteor.isServer

    # configure chai to use sinon matchers
    chai.use sinonChai
