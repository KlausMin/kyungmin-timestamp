import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    func(){
      this.refresh();
    }
  },
  model(){
    return new Date();
  }
});
