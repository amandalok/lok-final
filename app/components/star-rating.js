import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  toggle: false,
  click(){
    this.toggleProperty('toggle');
  },

    actions:{

      car1(){
        this.set('starRating', 1)
      },
      car2(){
        this.set('starRating', 2)
      },
      car3(){
        this.set('starRating', 3)
      },
      car4(){
        this.set('starRating', 4)
      },
      car5(){
        this.set('starRating', 5)
      }
    }
});
